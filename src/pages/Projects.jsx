import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import CodeBranch from "../assets/icons/CodeBranch";
import Eye from "../assets/icons/Eye";

const projects = [
  {
    title: "PunchGoal",
    about:
      "A productivity app designed to track tasks and achieve goals efficiently",
    tools: "React js + Firebase",
    code: "https://github.com/Hikmot-O/Productivity-app",
    live: "https://productivity-app-rho.vercel.app/",
  },
  {
    title: "Awaskill",
    about: "Figure out your ideal role in the world of tech",
    tools: "Next js + Framer motion",
    code: "",
    live: "https://awaskill.vercel.app/",
  },

  {
    title: "Portfolio",
    about: "",
    tools: "React js + Tailwind css",
    code: "",
    live: "https://hikmotokunola-portfolio.vercel.app/",
  },
  // { title: "Awaskill", about: "", tools: "", code: "", live: "" },
];

const Projects = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#projects", {
        xPercent: 100,
        // delay: 0.3,
        duration: 0.6,
        // stagger: 0.5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="overflow-x-hidden">
      <section
        id="projects"
        className=" pt-[30px] md:pt-10 h-screen overflow-y-scroll overflow-x-hidden bg-fuchsia-100"
      >
        <div className="px-5">
          <Header />
        </div>

        <h3 className="font-[600] text-center text-5xl md:text-[52px] pt-12 pb-20">
          Projects
        </h3>

        <div className="lg:px-[200px] px-5 grid-cols-1 grid md:grid-cols-2 gap-[15px] mx-auto">
          {projects.map((project) => (
            <div className="group project_card even:sm:translate-y-[70px]">
              <div className="">
                <p className="text-white font-[600] text-3xl mb-2">
                  {project.title}
                </p>
                <p className="uppercase text-xs">{project.tools}</p>
                <p className="text-sm mt-4 text-[#777778]">{project.about}</p>
              </div>
              <div className="mt-20 flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <Eye />
                  <a href={project.live}>Live</a>
                </div>
                {project.code !== "" ? (
                  <div className="flex items-center gap-1">
                    <CodeBranch />
                    <a href={project.code} className="text-sm">
                      Code
                    </a>
                  </div>
                ) : (
                  ""
                )}
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
          ))}
        </div>
        <div className=" w-screen fixed bottom-[50px] flex items-center justify-center">
          <NavBar />
        </div>
      </section>
    </div>
  );
};

export default Projects;
