import React, { useContext } from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaFire } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { GrTrophy } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const toggle = useSelector((store) => store.app);
  return (
    <div className="sm:flex sm:flex-col hidden fixed bg-white left-0 top-14 h-full pr-3 z-40">
      {toggle.isMenuOpen ? (
        <div className={`w-[200px] h-full pt-3`}>
          <div className="flex flex-col">
            <Link to="/">
              <div className="flex items-center gap-3 p-3 ml-3 cursor-pointer hover:bg-black/10 rounded-xl">
                <MdHome size={25} />
                <span> Home</span>
              </div>
            </Link>
            <div className="flex items-center gap-3 p-3 ml-3 cursor-pointer hover:bg-black/10 rounded-xl">
              <SiYoutubeshorts size={22} />
              <span>Shorts</span>
            </div>
            <div className="flex items-center gap-3 p-3 ml-3 mb-2 cursor-pointer hover:bg-black/10 rounded-xl ">
              <MdOutlineSubscriptions size={22} />
              <span>Subscriptions</span>
            </div>
            <hr className="border-1 border-black/10 m-2" />
          </div>
          <div className=" flex flex-col mt-2">
            <div className="flex items-center gap-3 p-3 ml-2 cursor-pointer hover:bg-black/10 rounded-xl">
              <MdHistory size={25} />
              <span> History</span>
            </div>
            <div className="flex items-center gap-3 p-3 ml-2 cursor-pointer hover:bg-black/10 rounded-xl">
              <CgPlayList size={28} />
              <span>Playlist</span>
            </div>
            <div className="flex items-center gap-3 p-3 ml-3 cursor-pointer hover:bg-black/10 rounded-xl">
              <GoVideo size={20} />
              <span>Your videos</span>
            </div>
            <div className="flex items-center gap-3 p-3 ml-3">
              <MdOutlineWatchLater size={22} />
              <span>Watch later</span>
            </div>
            <div className="flex items-center gap-3 p-3 ml-3">
              <AiOutlineLike size={22} />
              <span>Liked videos</span>
            </div>
            <hr className="border-1 border-black/10 m-2" />
          </div>
          <div className="">
            <ul className="flex flex-col">
              <li className="flex items-center gap-3 p-3 ml-3 cursor-pointer hover:bg-black/10 rounded-xl">
                <FaFire size={20} />
                <span>Trending</span>
              </li>
              <li className="flex items-center gap-3 p-3 ml-3 cursor-pointer hover:bg-black/10 rounded-xl">
                <IoMusicalNotesOutline size={20} />
                <span>Music</span>
              </li>
              <li className="flex items-center gap-3 p-3 ml-3 cursor-pointer hover:bg-black/10 rounded-xl">
                <SiYoutubegaming size={20} />
                <span>Gaming</span>
              </li>
              <li className="flex items-center gap-3 p-3 ml-3 cursor-pointer hover:bg-black/10 rounded-xl">
                <GrTrophy size={20} />
                <span>Sports</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="w-[80px] h-full pt-3">
          <div className="flex flex-col">
            <Link to="/">
              <div className="flex items-center gap-3 p-3 ml-3 cursor-pointer hover:bg-black/10 rounded-xl">
                <MdHome size={25} />
              </div>
            </Link>
            <div className="flex items-center gap-3 p-3 ml-3 cursor-pointer hover:bg-black/10 rounded-xl">
              <SiYoutubeshorts size={22} />
            </div>
            <div className="flex items-center gap-3 p-3 ml-3 mb-2 cursor-pointer hover:bg-black/10 rounded-xl ">
              <MdOutlineSubscriptions size={22} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
