import React, {useRef, useLayoutEffect} from "react";
import { gsap } from "gsap";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const About = () => {
  // const comp = useRef(null)

  // useLayoutEffect(()=>{
  //   let ctx = gsap.context(()=>{
  //     const t1 = gsap.timeline()

  //   }, comp)

  //   return () => ctx.revert()
  // },[])

  return (
    <section  className=" bg-fuchsia-100  flex flex-col items-center w-sreen h-screen overflow-y-auto">
      <div className="w-full px-5 pt-[30px] md:pt-10">
        <Header />
      </div>
      <div className="pt-[90px] px-5 md:px-0 pb-16 md:flex items-center justify-center md:gap-4 w-full border-b-[1px] border-b-[#7d8487] ">
        {/* hero left */}
        <div className="md:w-[390px] mb-12 sm:mb-12">
          <h5 className="text-[17px]] sm:text-3xl md:text-lg mb-3 sm:mb-2">
            HEY THERE!
          </h5>
          <p className="text-4xl w-[380px] leading-[50px] sm:leading-[90px] sm:w-full sm:text-6xl md:text-[44px] font-[600]">
            Frontend Engineer & Life Long Learner
          </p>
        </div>
        {/* hero right */}
        <div className="h-[532px] sm:h-[700px] md:w-[300px] md:h-[360px] rounded-3xl bg-black">
          {/* <img
            className=" h-[532px] sm:h-[700px] md:w-[300px] md:h-[360px] rounded-3xl bg-black"
            src={pic}
            alt=""
          /> */}
        </div>
      </div>

      <div className="text-[17px] md:text-[17px] sm:text-2xl px-5 md:px-0 py-12 flex flex-col gap-[4rem] items-center">
        <p className="text-black md:w-[720px] font-[400]">
          I'm Hikmot, a frontend engineer and an aspiring technical writer based
          in Nigeria. I'm passionate about developing intuitive and visually
          appealing digital experiences as well as solving problems. So if
          you're in need of a frontend engineer that get's the job done, look no further!
        </p>
        {/* <p className="text-black md:w-[720px] font-[500]">
          I'm Hikmot, a frontend engineer and an aspiring technical writer based
          in Ibadan, Nigeria. with over two years of experience and a background
          in marketing and consumer psychology. I have designed for a range of
          companies, including a design studio, startups, as well as a design
          agency.
        </p>
        <p className="text-black md:w-[720px] font-[500]">
          I'm Hikmot, a frontend engineer and an aspiring technical writer based
          in Ibadan, Nigeria. with over two years of experience and a background
          in marketing and consumer psychology. I have designed for a range of
          companies, including a design studio, startups, as well as a design
          agency.
        </p> */}
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
