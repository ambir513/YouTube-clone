import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../../../utils/helper";
import { useParams } from "react-router-dom";
import axios from "axios";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.message);
  const [text, setText] = useState([]);
  const VITE_API_KEY = import.meta.env.VITE_API_KEY;
  const { id } = useParams();

  useEffect(() => {
    const filter = chat?.filter((com) => com?.id === id);
    if (filter.length == 0) {
      console.log("noavailable");
      getcomments();
    } else {
      console.log("available");
      setText(filter);
      return;
    }
  }, []);

  async function getcomments() {
    try {
      const res = await axios(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=${VITE_API_KEY}&maxResults=50`
      );
      const fetchedComments = res.data.items.map((item) => {
        const snippet = item.snippet.topLevelComment.snippet;
        return {
          id: item.id,
          author: snippet.authorDisplayName,
          authorImage: snippet.authorProfileImageUrl,
          text: snippet.textDisplay,
        };
      });
      dispatch(addChat({ id: id, comments: fetchedComments }));
      setText([{ id: id, comments: fetchedComments }]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col">
      {console.log(text)}
      <ul className="h-fit flex flex-col gap-4">
        {text[0]?.comments?.map((com, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-3 bg-blue-200 px-2 rounded-2xl py-3 lg:w-[830px] md:w-[500px] w-[290px] h-fit"
            >
              <p className="flex gap-3">
                <p>
                  <a
                    href={`https://www.youtube.com/${com?.author}`}
                    target="_blank"
                  >
                    <img
                      src={com.authorImage}
                      alt="logo"
                      className="rounded-full"
                    />
                  </a>
                </p>
                <p className="">
                  <a
                    href={`https://www.youtube.com/${com?.author}`}
                    target="_blank"
                  >
                    <p className="text-sm">{com?.author}</p>
                  </a>
                  <p className="md:w-full w-[280px]">{com?.text}</p>
                </p>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LiveChat;
