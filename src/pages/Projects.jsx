import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import test from "../assets/Screenshot.png";

const Projects = () => {
  return (
    <section className="px-[30px] pt-10 overflow-hidden">
      <Header />

      <h3 className="font-[600] text-center text-[52px] pb-20">Projects</h3>

      <div className="grid-cols-1 grid sm:grid-cols-2 gap-[15px]">
        <div className="group project_card">
          <div className="flex items-center gap-2.5 invisible group-hover:visible">
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
          </div>
        </div>
        <div className="group project_card sm:translate-y-[70px]">
          <div className="flex items-center gap-2.5 invisible group-hover:visible">
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
          </div>
        </div>
        <div className="group project_card">
          <div className="flex items-center gap-2.5 invisible group-hover:visible">
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
          </div>
        </div>
        <div className="transition-all duration-[.1s] group project_card sm:translate-y-[70px]">
          <div className="transition-all duration-[.1s] flex items-center gap-2.5 invisible group-hover:visible">
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
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-60px)] fixed bottom-[50px] flex items-center justify-center">
        <NavBar />
      </div>
    </section>
  );
};

export default Projects;
