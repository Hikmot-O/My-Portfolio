import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" bg-slate-200 flex justify-center gap-12 items-center p-3 rounded-[16px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "bg-white px-[8px] py-[6px] text-center rounded-[14px]"
            : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive
            ? "bg-white px-[8px] py-[6px] text-center rounded-[14px]"
            : ""
        }
      >
        Work
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "bg-white px-[8px] py-[6px] text-center rounded-[14px]"
            : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "bg-white px-[8px] py-[6px] text-center rounded-[14px]"
            : ""
        }
      >
        Contact
      </NavLink>
    </div>
  );
};

export default NavBar;
