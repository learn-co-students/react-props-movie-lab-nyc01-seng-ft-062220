import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

//spent a long time on this - ended up looking at solution to get over some syntax stuff

export default class MovieShowcase extends Component {

  generateMovieCards = () =>
    // map over your movieData array and return an array of the correct JSX
    movieData.map(movieObj => <MovieCard title={movieObj.title} IMDBRating={movieObj.IMDBRating} genres={movieObj.genres} poster={movieObj.poster} />)
  

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
