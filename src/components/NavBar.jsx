import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="text-sm sm:text-base font-[500] bg-slate-200 flex justify-center gap-12 items-center p-3 rounded-[16px]">
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
        Projects
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
    </nav>
  );
};

export default NavBar;
