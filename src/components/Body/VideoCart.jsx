import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../../utils/appSlice";

const VideoCart = ({ video }) => {
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.app);
  const snippet = video?.snippet;
  return (
    <Link
      to={`/watch/${video.id.videoId || video.id}`}
      className={`${toggle.isMenuOpen ? " w-[350px]" : " w-[300px]"} sm:m-5 m-2 mb-3`}
      onClick={() => dispatch(toggleMenu())}
    >
      <img
        src={snippet?.thumbnails?.high?.url}
        alt=""
        className={`${
          toggle.isMenuOpen ? "w-[457px]" : "w-[327px]"
        } h-[256px] rounded-xl`}
      />
      <div className="flex gap-4 items-center">
        <div className="flex flex-col  mt-3">
          <p className="text-sm  font-semibold pb-2">{snippet?.title}</p>
          <p className="text-sm pb-2">{snippet?.channelTitle}</p>
          <p className="text-sm">{video?.statistics?.viewCount} views</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCart;
