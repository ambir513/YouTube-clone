import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../../../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.message);
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hii");
      dispatch(
        addChat({
          name: generateRandomName(),
          text: generateRandomText(10),
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <div className=" border-2 sm:w-[370px] w-[300px] h-[470px] border-black m-3 rounded-lg overflow-y-hidde overflow-y-scroll">
        {chat.map((chat) => {
          return (
            <ul className="flex items-center gap-2 m-2 p-2 rounded-2xl bg-blue-200">
              <img
                src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                alt="logo"
                className="w-8 rounded-full"
              />
              <li className="font-semibold">{chat.name}</li>
              <li>{chat.text}</li>
            </ul>
          );
        })}
      </div>
      <form
        className="ml-3"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addChat({
              name: "Amar Biradar",
              text: text,
            })
          );
          setText("");
        }}
      >
        <input
          type="text"
          className="border-2 border-black px-3 rounded-md"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-green-500 px-4 py-1 text-white rounded-lg ml-3"
          type="submit"
        >
          send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
