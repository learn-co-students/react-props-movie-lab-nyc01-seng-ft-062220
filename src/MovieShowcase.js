import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie, index) => //console.log(movie, index) // need to iterate over every movie object within movieData array
    <MovieCard 
      key = {index} //for each iteration we are on
      title = {movie.title}
      IMDBRating = {movie.IMDBRating}
      genres = {movie.genres}
      poster = {movie.poster}
      />
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}


