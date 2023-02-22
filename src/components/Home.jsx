import React from "react";

const Home = () => {
  return (
    <section className="pt-10 p-5 flex flex-col items-center h-screen overflow-y-auto w-full ">
      <header className="mb-[100px] w-full flex justify-between items-center">
        <h3 className="color-white">h!</h3>
        <button className="text-[14.5px] border-[1px] border-black rounded-[20px] p-[10px] font-[500] ">
          Download Resume
        </button>
      </header>

      <div className=" flex flex-col items-center">
        <h2 className="font-[600] text-[56px] sm:leading-[40px]">Hi, I'm Hikmot Okunola,</h2>
        <h2 className="font-[600] text-[56px]">a frontend engineer</h2>
        <p className="mt-[20px] text-center max-w-[550px]">
          I build scalable and reliable web applications using frontend
          technology. I am interested in user experience, accessibility and web
          animations.
        </p>
        <div className="mt-[150px] bg-slate-200 flex justify-center gap-12 items-center p-3 rounded-[16px]">
            <p className="">Home</p>
            <p className="">Projects</p>
            <p className="">About</p>
            <p className="">Contact</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
