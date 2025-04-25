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
        toggle.isMenuOpen ? "ml-56" : "ml-32"
      } flex justify-between gap-2 rounded-lg`}
    >
      <div className="flex justify-center gap-4">
        <div className="">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&si=uMInOPXxB7qddXyn`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-xl"
          ></iframe>
          <div className="p-3">
            <Comment />
          </div>
        </div>

        <div className="flex flex-col gap-3"></div>
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
