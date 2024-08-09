import React, { useRef } from "react";

// icons
import { BiSearch } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";

const Header = ({ name }) => {
  const inputRef = useRef(null);
  return (
    <div className="header">
      <div className="m-auto header" style={{ width: "95%" }}>
        <div className="md:w-2/5 w-1/2">
          <h1>Welcome {name}!</h1>
          <p className="text-gray-600 sm:block hidden">
            Here is your Profile Dashboard
          </p>
        </div>
        <div
          className="w-2/5 items-center bg-white px-6 py-4 rounded-lg cursor-pointer shadow-sm md:flex hidden"
          onClick={() => inputRef.current?.focus()}
        >
          <BiSearch
            className="mr-3 cursor-pointer"
            size={20}
            color="#e35d8f"
            onClick={() => inputRef.current?.focus()}
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            className="border-none outline-none bg-transparent"
          />
        </div>
        <div className="md:w-1/5 w-1/2 overflow-hidden flex justify-center items-center">
          <BsFillBellFill size={25} color="#e35d8f" />
          <img
            src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-12 h-12 rounded-full object-cover relative ml-5"
          />
          <MdArrowDropDown size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
