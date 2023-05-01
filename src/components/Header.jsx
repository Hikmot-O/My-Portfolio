import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <Link to="/">
        <h3 className="color-white font-[600] text-[20px]">hikmot.</h3>
      </Link>
      <button className="cursor-pointer text-[14.5px] border-[1px] border-black rounded-[20px] p-[10px] font-[500] ">
        Download Resume
      </button>
    </header>
  );
};

export default Header;
