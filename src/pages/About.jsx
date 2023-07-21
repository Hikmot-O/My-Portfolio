import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <section className="px-[30px] pt-10 bg-fuchsia-100 flex flex-col items-center h-screen overflow-y-scroll">
      <Header />
      <div className="pt-[90px] pb-16 flex items-center gap-4">
        {/* hero left */}
        <div className="w-[380px]">
          <h5 className=" text-lg ">HEY THERE!</h5>
          <p className="text-[44px] font-[600]">Frontend Engineer & Technical Writer</p>
        </div>
        {/* hero right */}
        <div className="w-[300px] h-[360px] rounded-3xl bg-black"></div>
      </div>

      <div className="bg-fuchsia-200 bg-opacity-[0.25] pt-12 flex flex-col gap-[4.5rem] items-center w-screen">
        <p className=" w-[720px] font-[500]">
          I'm Hikmot, a frontend engineer with over two years of experience and a
          background in marketing and consumer psychology. I have designed for a
          range of companies, including a design studio, startups, as well as a
          design agency. Currently, I am a product designer at Emergent Labs (a
          design studio)
        </p>
        <p className="text-black w-[720px] font-[500]">
          I'm Petra, a product designer with over two years of experience and a
          background in marketing and consumer psychology. I have designed for a
          range of companies, including a design studio, startups, as well as a
          design agency. Currently, I am a product designer at Emergent Labs (a
          design studio)
        </p>
        <p className="text-black w-[720px] font-[500]">
          I'm Petra, a product designer with over two years of experience and a
          background in marketing and consumer psychology. I have designed for a
          range of companies, including a design studio, startups, as well as a
          design agency. Currently, I am a product designer at Emergent Labs (a
          design studio)
        </p>
      </div>

      {/* Navbar */}
      <div className=" w-screen fixed bottom-[50px] flex items-center justify-center">
        <NavBar />
      </div>
    </section>
  );
};

export default About;
