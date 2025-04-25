import React from "react";

const comments = [
  {
    name: "Amar Biradar",
    text: "Nice Video 🚀",
    reply: [
      {
        name: "Jayesh Singh",
        text: "Nice Video 🚀",
        reply: [
          {
            name: "Amit Singh",
            text: "Let goo 🚀",
            reply: [
              {
                name: "Jayesh Singh",
                text: "Let goo 🚀",
                reply: [
                  {
                    name: "Jayesh Singh",
                    text: "Let goo 🚀",
                    reply: [
                      {
                        name: "Jayesh Singh",
                        text: "Let goo 🚀",
                        reply: [
                          {
                            name: "Jayesh Singh",
                            text: "Let goo 🚀",
                            reply: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Jayesh Singh",
    text: "Let goo 🚀",
    reply: [],
  },
  {
    name: "Rahul Mishra",
    text: "mera mu me lo bhailog",
    reply: [],
  },
];

const CommentContainer = ({ comments }) => {
  const comment = comments.map((com) => {
    return (
      <div className="flex flex-col justify-center p-3 border-l-2  border-l-black">
        <ul className="flex items-center gap-2 p-2 rounded-2xl bg-blue-200">
          <img
            src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            alt="logo"
            className="w-8 rounded-full"
          />
          <li className="font-semibold">{com.name}</li>
          <li>{com.text}</li>
        </ul>
        <CommentContainer comments={com.reply} />
      </div>
    );
  });
  return comment;
};

const Comment = () => {
  return (
    <div className="flex flex-col justify-center gap-4 h-fit">
      <div className="flex items-center gap-3">
        <h1 className="text-lg">Comments :</h1>
      </div>
      <CommentContainer comments={comments} />
    </div>
  );
};

export default Comment;
