import React from "react";
import { IMG_CDN_URL } from "../Utils/constants";

export const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <div className="w-36 md:w-48 pr-4">
        <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
      </div>
    </div>
  );
};
