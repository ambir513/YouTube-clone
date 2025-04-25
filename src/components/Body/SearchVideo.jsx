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
      className={`flex flex-wrap items-center cursor-pointer mt-32 ${
        toggle.isMenuOpen ? "ml-56" : "ml-26"
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
