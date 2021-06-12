import React, { Component } from 'react';
import { Header, MovieList, MovieDetails, Loading } from './components';
import * as axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false
    }
  }
  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    })
  }

  componentDidMount() {
    axios.get('https://api.themoviedb.org/4/discover/movie', {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWMyMGYzNmVhYTZhMzBkMTZkYzVjZTY0ODEwNjVhZSIsInN1YiI6IjYwYmNhNGRjOGRkYzM0MDA3ODdhNDhmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pQhnyc4aS1nWoqgT3JvuTj-OgjmPS5OrvGFnPzlwkqc'
      }
    })
    .then( response => response.data.results ) 
    .then ( moviesApi => {
      const movies = moviesApi.map( m => ({
        img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
        title: m.title,
        details: m.release_date + ' | ' + m.vote_average + ' /10 (' + m.vote_count + ')',
        description: m.overview,
      }) )
      this.updateMovies(movies);
    })
    .catch( err => console.log(err) );
  }

  updateMovies(movies) {
    this.setState({
      movies,
      loaded: true
    })
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        { this.state.loaded ? (
          <div className="d-flex flex-row flex-fill pt-4 p-2" >
            <MovieList 
              movies={ this.state.movies } 
              updateSelectedMovie={ this.updateSelectedMovie }/>
            <MovieDetails movie={ this.state.movies[this.state.selectedMovie] }/>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;