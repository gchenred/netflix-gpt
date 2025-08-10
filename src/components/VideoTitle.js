import React from "react";
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex gap-3">
        <div className="flex items-center bg-white text-black p-4 px-8 text-xl rounded-lg cursor-pointer hover:opacity-80">
          <FaPlay />
          <button className="ml-1">Play</button>
        </div>

        <div className="flex items-center bg-gray-500 text-white p-4 px-8 text-xl rounded-lg">
          <GoInfo />
          <button className="ml-1">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
