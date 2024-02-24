import React from "react";
import { lang } from "../Utils/languageConstant";

export const GPTSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang.de.gptPlaceholder}
        />
        <button className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg">
          {lang.de.search}
        </button>
      </form>
    </div>
  );
};
