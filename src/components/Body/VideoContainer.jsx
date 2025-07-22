import React, { useEffect, useState } from "react";
import VideoCart from "./VideoCart";
import axios from "axios";
import { useSelector } from "react-redux";
import VideoShimmerUI from "../VideoShimmerUI";
import ShimmerUI from "../ShimmerUI";

const VideoContainer = () => {
  const toggle = useSelector((store) => store.app);

  const YOUTUBE_VIDEOS_API = import.meta.env.VITE_YOUTUBE_VIDEOS_API;
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;
  const [videoData, setVidoeData] = useState([]);

  useEffect(() => {
    getPopularVideo();
  }, []);

  const getPopularVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEOS_API + VITE_API_KEY);
      setVidoeData(res.data.items);
    } catch (error) {
      console.log(error?.response?.data?.error?.message);
    }
  };
  return (
    <div className="">
      {videoData.length === 0 ? (
        <ShimmerUI />
      ) : (
        <div
          className={`flex flex-wrap justify-center items-center cursor-pointer sm:mt-32 mt-24 ${
            toggle.isMenuOpen ? "sm:ml-20" : "sm:ml-8"
          }`}
        >
          {videoData?.map((video, index) => {
            return <VideoCart video={video} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
