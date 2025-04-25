import React from "react";

const Button = ({ title }) => {
  return (
    <button
      className={`w-fit lg:h-8 h-fit rounded-lg px-3 py-1 font-semibold text-sm cursor-pointer ${
        title == "All"
          ? "bg-black text-white"
          : "bg-black/10 hover:bg-black/20 "
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
