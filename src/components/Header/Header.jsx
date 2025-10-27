import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { toggleMenu } from "../../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addSearchVideos, removeSearchVideo } from "../../utils/searchSlice";
import { Link } from "react-router-dom";
import { addSearchData } from "../../utils/searchDataSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionData, setSuggestionData] = useState([]);
  const search = useSelector((store) => store.search);
  const searchData = useSelector((store) => store.searchData);
  const [searchToggle, setSearchToggle] = useState(true);
  const YOUTUBE_SEARCH_API = import.meta.env.VITE_YOUTUBE_SEARCH_API;
  const VITE_YOUTUBE_SEARCH_VIDEO_API = import.meta.env
    .VITE_YOUTUBE_SEARCH_VIDEO_API;
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (searchQuery === "") return;
    const timer = setTimeout(() => {
      if (searchData[searchQuery]) {
        setSuggestionData(searchData[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    try {
      const response = await axios.get(
        YOUTUBE_SEARCH_API + searchQuery + "&key=" + VITE_API_KEY
      );
      console.log(response.data?.items);
      setSuggestionData(response.data?.items);
      dispatch(
        addSearchData({
          [searchQuery]: response.data?.items,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetSearchData = async (suggestion) => {
    const data = suggestion.split(" ").join("+");
    try {
      const res = await axios.get(
        VITE_YOUTUBE_SEARCH_VIDEO_API + data + "&key=" + VITE_API_KEY
      );
      console.log(res.data);
      if (search.length !== 0) {
        dispatch(removeSearchVideo());
      }
      dispatch(addSearchVideos(res.data.items));
      setSearchToggle((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full h-[60px] pt-3 z-50  px-4 shadow-lg fixed bg-white left-0">
      <nav className="flex gap-5 sm:grid sm:grid-flow-col">
        {/* Section 1 */}
        <div className="flex items-center col-span-8 gap-2">
          <div
            className="sm:flex hidden ml-3 p-2 cursor-pointer hover:rounded-full hover:bg-black/10"
            onClick={() => dispatch(toggleMenu())}
          >
            <GiHamburgerMenu size={22} />
          </div>
          <Link to="/">
            <div className="flex justify-center items-center overflow-hidden w-[120px] h-10 cursor-pointer">
              <img
                src="https://www.pngplay.com/wp-content/uploads/9/Youtube-Logo-Transparent-PNG.png"
                alt="YouTube-logo"
                className="w-[150px]"
              />
            </div>
          </Link>
        </div>
        {/* Section 2 */}
        <div className="flex items-center gap-2 col-span-10">
          <div className="sm:w-[500px] w-[210px] flex justify-between border-1 border-black/30 rounded-2xl">
            <input
              type="text"
              placeholder="Search"
              className="border-none focus:outline-none px-4 py-1 sm:w-[455px] w-[155px]"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onFocus={() => setSearchToggle(true)}
            />
            <button className="cursor-pointer pl-4 pr-3  bg-stone-100 border-l-1 border-black/30 rounded-r-2xl">
              <IoSearchOutline size={22} />
            </button>
          </div>
        </div>
        {/* Section 3 */}
        <div className="sm:flex hidden items-center cursor-pointer">
          <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-lg">
            A
          </div>
        </div>
      </nav>
      {suggestionData.length !== 0 || searchQuery.length !== 0 ? (
        <div
          className={`${
            searchToggle ? "flex" : "hidden"
          } justify-center items-center `}
        >
          <ul className="flex flex-col justify-center mt-4 bg-white w-[450px] rounded-xl shadow-xl p-2">
            {suggestionData.map((suggestion, index) => {
              return (
                <Link
                  to={`/watch/${suggestion?.id?.videoId}`}
                  key={index}
                  onClick={() => {
                    searchQuery("");
                    handleGetSearchData(suggestion?.id?.videoId);
                  }}
                >
                  <li className="cursor-pointer p-1 hover:bg-black/10 text-sm flex items-center gap-3">
                    <IoSearchOutline />
                    {suggestion?.snippet?.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
