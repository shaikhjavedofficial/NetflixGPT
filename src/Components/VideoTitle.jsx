import React from 'react'

export const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-ld w-1/4">{overview}</p>
      <div className="">
        <button className=" bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg">
          ▶️ Play
        </button>
        <button className=" bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg mx-2">
          More Info ℹ️
        </button>
      </div>
    </div>
  );
}
