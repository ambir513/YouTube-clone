import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Comment from "./Comment";
import LiveChat from "./liveChat";

const WatchPage = () => {
  const { id } = useParams();
  const toggle = useSelector((store) => store.app);
  const search = useSelector((store) => store.search);

  return (
    <div
      className={`mt-24 ${
        toggle.isMenuOpen ? "sm:ml-56" : "sm:ml-32"
      } flex sm:flex-row flex-col sm:justify-between sm:gap-2 justify-center sm:items-start items-center rounded-lg`}
    >
      <div className="sm:flex flex justify-center sm:justify-center items-center sm:gap-4">
        <div className="sm:flex flex  flex-col sm:items-start items-center">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&si=uMInOPXxB7qddXyn`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-xl sm:w-[853px] sm:h-[480px] w-[355px]  h-[256px]"
          ></iframe>
          <div className="p-3">
            <Comment />
          </div>
        </div>
      </div>
      <div className="w-[300px]">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
