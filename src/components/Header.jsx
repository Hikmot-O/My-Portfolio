import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <h3 className="color-white font-[600] text-[20px]">hikmot.</h3>
      <button className="cursor-pointer text-[14.5px] border-[1px] border-black rounded-[20px] p-[10px] font-[500] ">
        Download Resume
      </button>
    </header>
  );
};

export default Header;
