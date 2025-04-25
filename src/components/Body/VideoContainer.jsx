import React, { useEffect, useState } from "react";
import VideoCart from "./VideoCart";
import axios from "axios";
import { useSelector } from "react-redux";

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
      console.log(res.data.items);
      setVidoeData(res.data.items);
    } catch (error) {
      console.log(error?.response?.data?.error?.message);
    }
  };
  return (
    <div
      className={`flex flex-wrap items-center cursor-pointer mt-32 ${
        toggle.isMenuOpen ? "ml-56" : "ml-26"
      }`}
    >
      {videoData.map((video) => {
        return <VideoCart video={video} key={video?.id} />;
      })}
    </div>
  );
};

export default VideoContainer;
