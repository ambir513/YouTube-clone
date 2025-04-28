import React, { useEffect, useState } from "react";
import VideoCart from "./VideoCart";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SearchVideo = () => {
  const toggle = useSelector((store) => store.app);
  const search = useSelector((store) => store.search);

  console.log(search);
  return (
    <div
      className={`flex flex-wrap justify-center items-center cursor-pointer mt-32 ${
        toggle.isMenuOpen ? "sm:ml-56" : "sm:ml-26"
      }`}
    >
      {search.length !== 0
        ? search[0].map((video, index) => {
            return <VideoCart video={video} key={index} />;
          })
        : null}
    </div>
  );
};

export default SearchVideo;
