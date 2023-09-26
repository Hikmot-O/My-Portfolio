import React from "react";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
// import test from "../assets/Screenshot.png";

const Projects = () => {
  return (
    <section className=" pt-[30px] md:pt-10 h-screen overflow-y-scroll bg-fuchsia-100">
      <div className="px-5">
        <Header />
      </div>

      <h3 className="font-[600] text-center text-[52px] pb-20">Projects</h3>

      <div className="md:px-[200px] px-5 grid-cols-1 grid md:grid-cols-2 gap-[15px] mx-auto">
        <div className="group project_card">
          <p className="text-white font-[600] text-3xl mb-2">Awaskill</p>
          <p className="uppercase text-xs">Next js + Framer motion</p>
          <p className="text-sm mt-4 text-[#777778]">
            Figure out your ideal role in the world of tech
          </p>
          <div className="mt-20 flex items-center gap-3">
            <div className="text-sm"><a href="https://awaskill.vercel.app/">Live</a></div>
            <div className="flex">
              <FontAwesomeIcon icon="fa-solid fa-code-branch" />
              <p className="text-sm">Code</p>
            </div>
          </div>
          {/* <div className="flex items-center gap-2.5 invisible group-hover:visible">
            <div className="Tools_card  ">Django</div>
            <div className="Tools_card">TailwindCss</div>
            <div className="Tools_card">TypeScript</div>
          </div>
          <div className="viewProject_btn">View Project</div>

          <div className="invisible group-hover:visible absolute bottom-[60px]">
            <h4 className="text-[48px] pb-2.5">project Title</h4>
            <p className="text-[17.5px]">
              Project description and sha type a summary and make the space okay
            </p>
          </div> */}
        </div>
        <div className="group project_card sm:translate-y-[70px]">
          {/* <div className="flex items-center gap-2.5 invisible group-hover:visible">
            <div className="Tools_card  ">Django</div>
            <div className="Tools_card">TailwindCss</div>
            <div className="Tools_card">TypeScript</div>
          </div>
          <div className="viewProject_btn">View Project</div>

          <div className="invisible group-hover:visible absolute bottom-[60px]">
            <h4 className=" text-[48px] pb-2.5">project Title</h4>
            <p className="text-[17.5px]">
              Project description and sha type a summary and make the space okay
            </p>
          </div> */}
        </div>
        <div className="z-1 group project_card">
          {/* <div className="flex items-center gap-2.5 invisible group-hover:visible">
            <div className="Tools_card  ">Django</div>
            <div className="Tools_card">TailwindCss</div>
            <div className="Tools_card">TypeScript</div>
          </div>
          <div className="viewProject_btn">View Project</div>

          <div className="invisible group-hover:visible absolute bottom-[60px]">
            <h4 className=" text-[48px] pb-2.5">project Title</h4>
            <p className="text-[17.5px]">
              Project description and sha type a summary and make the space okay
            </p>
          </div> */}
        </div>
        <div className="z-1 transition-all duration-[.1s] group project_card sm:translate-y-[70px]">
          {/* <div className="transition-all duration-[.1s] flex items-center gap-2.5 invisible group-hover:visible">
            <div className="Tools_card  ">Django</div>
            <div className="Tools_card">TailwindCss</div>
            <div className="Tools_card">TypeScript</div>
          </div>
          <div className="viewProject_btn transition-all duration-[.1s]">
            View Project
          </div>

          <div className="transition-all duration-[.1s] invisible group-hover:visible absolute bottom-[60px]">
            <h4 className=" text-[48px] pb-2.5">project Title</h4>
            <p className="text-[17.5px]">
              Project description and sha type a summary and make the space okay
            </p>
          </div> */}
        </div>
      </div>
      <div className=" w-screen fixed bottom-[50px] flex items-center justify-center">
        <NavBar />
      </div>
    </section>
  );
};

export default Projects;
