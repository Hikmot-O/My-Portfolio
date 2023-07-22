import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <section className=" bg-fuchsia-100  flex flex-col items-center w-sreen h-screen overflow-y-auto">
      <div className="w-full px-[30px] pt-10">
        <Header />
      </div>
      <div className="pt-[90px] px-5 md:px-0 pb-16 md:flex items-center justify-center gap-4 w-full border-b-[1px] border-b-[#7d8487] ">
        {/* hero left */}
        <div className="w-[380px]">
          <h5 className=" text-lg ">HEY THERE!</h5>
          <p className="text-[44px] font-[600]">
            Frontend Engineer & Technical Writer
          </p>
        </div>
        {/* hero right */}
        <div className="h-[532px] sm:h-[700px] md:w-[300px] md:h-[360px] rounded-3xl bg-black"></div>
      </div>

      <div className="text-[17px] px-5 md:px-0 py-12 flex flex-col gap-[4rem] items-center">
        <p className="text-black md:w-[720px] font-[400]">
          I'm Hikmot, a frontend engineer and an aspiring technical writer based in Ibadan, Nigeria. with over two years of experience and
          a background in marketing and consumer psychology. I have designed for
          a range of companies, including a design studio, startups, as well as
          a design agency. Currently, I am a product designer at Emergent Labs
          (a design studio)
        </p>
        <p className="text-black md:w-[720px] font-[500]">
          I'm Petra, a product designer with over two years of experience and a
          background in marketing and consumer psychology. I have designed for a
          range of companies, including a design studio, startups, as well as a
          design agency. Currently, I am a product designer at Emergent Labs (a
          design studio)
        </p>
        <p className="text-black md:w-[720px] font-[500]">
          I'm Petra, a product designer with over two years of experience and a
          background in marketing and consumer psychology. I have designed for a
          range of companies, including a design studio, startups, as well as a
          design agency. Currently, I am a product designer at Emergent Labs (a
          design studio)
        </p>
      </div>

      <div className="">
        <div className=""></div>
      </div>

      {/* Navbar */}
      <div className=" w-screen fixed bottom-[50px] flex items-center justify-center">
        <NavBar />
      </div>
    </section>
  );
};

export default About;
