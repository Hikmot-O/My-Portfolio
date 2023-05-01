import React from "react";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <section className="bg-fuchsia-100 relative pt-[30px] pb-[50px] only:sm:pt-10 p-5 flex flex-col items-center h-screen overflow-y-scroll w-full ">
      <div className="animate-blob_1  absolute w-[500px] h-[100%] top-[100px] filter blur-3xl left-10 mix-blend-multiply bg-purple-300 rounded-full "></div>
      <div className="animate-blob absolute w-[500px] h-[100%] top-[100px] filter blur-3xl right-10 mix-blend-multiply bg-pink-300 rounded-full "></div>
      <Header />
      {/* <header className="w-full flex justify-between items-center">
        <h3 className="color-white">h!</h3>
        <button className="text-[14.5px] border-[1px] border-black rounded-[20px] p-[10px] font-[500] ">
          Download Resume
        </button>
      </header> */}

      <div className="mt-[70px] sm:mt-[70px] flex flex-col items-center h-full relative sm:static">
        <h2 className="text-center font-[600] text-[52px] sm:text-[56px] max-w-[630px]">Hi, I'm Hikmot Okunola, a frontend engineer.</h2>
        {/* <h2 className="text-center font-[600] text-[52px] sm:text-[56px]">a frontend engineer</h2> */}
        <p className="mt-[20px] text-center max-w-[550px]">
          I build scalable and reliable web applications using frontend
          technology. I am interested in user experience, accessibility and web
          animations.
        </p>
        <div className="z-[10] absolute sm:static bottom-0  sm:mt-[150px] bg-slate-200 flex justify-center gap-12 items-center p-3 rounded-[16px]">
            <Link to='/home' className="bg-white px-[8px] py-[6px] text-center rounded-[14px]">Home</Link>
            <Link to='/projects' className="">Projects</Link>
            <Link to='/about' className="">About</Link>
            <Link to='/contact' className="">Contact</Link>
        </div>
        {/* <div className="w-full fixed bottom-[50px] flex items-center justify-center">
        <NavBar />
      </div> */}
      </div>
    </section>
  );
};

export default Home;
