import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";

const Home = () => {
  return (
    <section className="pt-[30px] pb-[50px] only:sm:pt-10 p-5 flex flex-col items-center h-screen overflow-y-scroll w-full ">
      <Header />
      {/* <header className="w-full flex justify-between items-center">
        <h3 className="color-white">h!</h3>
        <button className="text-[14.5px] border-[1px] border-black rounded-[20px] p-[10px] font-[500] ">
          Download Resume
        </button>
      </header> */}

      <div className="mt-[70px] sm:mt-[100px] flex flex-col items-center h-full relative sm:static">
        <h2 className="text-center font-[600] text-[52px] sm:text-[56px] max-w-[630px]">Hi, I'm Hikmot Okunola, a frontend engineer.</h2>
        {/* <h2 className="text-center font-[600] text-[52px] sm:text-[56px]">a frontend engineer</h2> */}
        <p className="mt-[20px] text-center max-w-[550px]">
          I build scalable and reliable web applications using frontend
          technology. I am interested in user experience, accessibility and web
          animations.
        </p>
        <div className="absolute sm:static bottom-0  sm:mt-[150px] bg-slate-200 flex justify-center gap-12 items-center p-3 rounded-[16px]">
            <Link to='/home' className="bg-white px-[8px] py-[6px] text-center rounded-[14px]">Home</Link>
            <Link to='/projects' className="">Projects</Link>
            <Link to='/about' className="">About</Link>
            <Link to='/contact' className="">Contact</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
