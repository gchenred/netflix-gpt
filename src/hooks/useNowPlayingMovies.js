import React, { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../../utilities/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utilities/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoves = async () => {
    const movies = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
    const json = await movies.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMoves();
  }, []);
};

export default useNowPlayingMovies;
