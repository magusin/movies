import React, { Component } from 'react';
import MovieElement from './MovieElement';

export default class MovieList extends Component {

  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap align-content-start">
  <MovieElement movie={ this.props.movie[0] } updateSelectedMovie={this.props.updateSelectedMovie}/>
  <MovieElement movie={ this.props.movie[1] } updateSelectedMovie={this.props.updateSelectedMovie}/>
  <MovieElement movie={ this.props.movie[2] } updateSelectedMovie={this.props.updateSelectedMovie}/>
  <MovieElement movie={ this.props.movie[3] } updateSelectedMovie={this.props.updateSelectedMovie}/>
      </div>
    );
  }
}