import React, { useContext } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const toggle = useSelector((store) => store.app);

  return (
    <>
      {toggle.isMenuOpen ? (
        <div className=" fixed left-10 mt-10 pb-5  bg-white">
          <div className="flex justify-center gap-3 mt-10 pl-48 flex-wrap">
            <Button title="All" />
            <Button title="System design" />
            <Button title="Data Structure" />
            <Button title="Web Development" />
            <Button title="Software Engineering" />
            <Button title="Presentations" />
            <Button title="Strategies" />
            <Button title="Live" />
            <Button title="Recently uploaded" />
            <Button title="System design" />
          </div>
        </div>
      ) : (
        <div className=" w-full pt-10 pb-5  mt-10 fixed left-0  bg-white">
          <div className="flex justify-center gap-3   flex-wrap ">
            <Button title="All" />
            <Button title="Data Structure" />
            <Button title="Recently uploaded" />
            <Button title="Software Engineering" />
            <Button title="Live" />
            <Button title="Presentations" />
            <Button title="Web Development" />
            <Button title="React Redux" />
            <Button title="Mongoose" />
            <Button title="MERN Stack Developer" />
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonList;
