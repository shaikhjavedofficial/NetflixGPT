import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => {
        const filterData = response.results.filter(
          (item) => item.type === "Trailer"
        );
        const trailer = filterData ? filterData[0] : response.results[0];
        dispatch(addTrailerVideo(trailer));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
