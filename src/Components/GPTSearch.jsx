import React from "react";
import { GPTSearchBar } from "./GPTSearchBar";
import { GPTMovieSuggetions } from "./GPTMovieSuggetions";
import {BG_IMG} from "../Utils/constants"
export const GPTSearch = () => {
  return (
    <div>
      <div>
        <img className="absolute -z-10" src={BG_IMG} alt="background" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggetions />
    </div>
  );
};
