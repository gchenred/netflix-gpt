import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utilities/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../utilities/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const videos = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await videos.json();
    const filterVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailerVideo = filterVideos.length
      ? filterVideos[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailerVideo));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
