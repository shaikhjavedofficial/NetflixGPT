import React, { useRef } from "react";
import { lang } from "../Utils/languageConstant";
import { useSelector } from "react-redux";
import {openai} from "../Utils/openai";

export const GPTSearchBar = () => {
  const LanguageSelector = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[LanguageSelector].gptPlaceholder}
        />
        <button
          className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[LanguageSelector].search}
        </button>
      </form>
    </div>
  );
};
