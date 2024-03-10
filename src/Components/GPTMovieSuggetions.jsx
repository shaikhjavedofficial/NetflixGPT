import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";
export const GPTMovieSuggetions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80 file:">
      <div>
        {movieNames.map((movieName, i) => {
          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[i]}
            />
          );
        })}
      </div>
    </div>
  );
};
