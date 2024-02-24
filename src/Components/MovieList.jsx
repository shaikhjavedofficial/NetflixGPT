import React from 'react'
import MovieCard from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (<div>
    <h1>{title}</h1>
    {/* <MovieCard /> */}
  </div>)
}
