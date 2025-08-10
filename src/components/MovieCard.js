import React from "react";
import { IMG_CDN_URL } from "../../utilities/constants";

const MovieCard = ({ imageUrl }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        className="rounded-lg"
        alt="movie-card-image"
        src={`${IMG_CDN_URL}${imageUrl}`}
      ></img>
    </div>
  );
};

export default MovieCard;
