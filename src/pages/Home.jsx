import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline();

      t1.to("#home", {
        // scale: 1,
        opacity: 0,
        duration: 1.1,
        y: "+=30",
      }).from("#home", {
        duration: 0.5,
        scale: 0.1,
        y: 0,
        opacity: 0,
        ease: "power1.out",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={comp}
      className="bg-fuchsia-100 pt-[30px] only:sm:pt-10 p-5 flex flex-col items-center h-screen overflow-y-scroll"
    >
      {/* <div className="animate-blob_1  absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-[100px] filter blur-3xl left-10 mix-blend-multiply bg-purple-300 rounded-full "></div>
      <div className="animate-blob absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-[100px] filter blur-3xl right-10 mix-blend-multiply bg-pink-300 rounded-full "></div> */}
      <Header />
      {/* <header className="w-full flex justify-between items-center">
        <h3 className="color-white">h!</h3>
        <button className="text-[14.5px] border-[1px] border-black rounded-[20px] p-[10px] font-[500] ">
          Download Resume
        </button>
      </header> */}

      <div
        // id="home"
        className="mt-[160px] sm:mt-[70px] flex flex-col items-center h-screen relative sm:static"
      >
        <div id="home" className="">
          {/* Okunola, a frontend engineer. */}
          <h2 className="text-center font-[500] text-[36px] sm:text-[56px] md:max-w-[630px]">
            Hi, I'm Hikmot.
          </h2>
          <h2 className="text-center font-[500] text-[36px] sm:text-[56px]">
            A frontend engineer.
          </h2>
          {/* //and reliable */}
          <p className="mt-[20px] text-center max-w-[550px]">
            I build scalable web applications using frontend technology. I am
            interested in user experience, accessibility and web animations.
          </p>
        </div>
        <div className=" w-screen fixed bottom-[50px] flex items-center justify-center">
          <NavBar />
        </div>
      </div>
    </section>
  );
};

export default Home;
