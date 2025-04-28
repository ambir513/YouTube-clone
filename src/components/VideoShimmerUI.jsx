import React from "react";
import { useSelector } from "react-redux";

const VideoShimmerUI = () => {
  const toggle = useSelector((store) => store.app);

  return (
    <div className="flex flex-col justify-center items-center gap-2 m-5">
      <div className="bg-black/40 w-[350px] h-[250px] rounded-2xl animate-pulse"></div>
      <div className="flex flex-col gap-2">
        <div className="bg-black/30 rounded-sm w-[350px] h-10 animate-pulse "></div>
        <div className="bg-black/30 rounded-sm w-[300px] h-6 animate-pulse"></div>
      </div>
    </div>
  );
};

export default VideoShimmerUI;
