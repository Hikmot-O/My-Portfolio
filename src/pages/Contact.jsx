import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

const Contact = () => {
  return (
    <section className="h-screen overflow-y-scroll bg-fuchsia-100 pt-[30px] md:pt-10">
      {/* <div className="flex flex-col sm:flex-row absolute"> */}
      {/* <div className="animate-blob_1  absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-[100px] filter blur-3xl left-10 mix-blend-multiply bg-purple-300 rounded-full "></div> */}
      {/* <div className="animate-blob absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-[100px] filter blur-3xl right-10 mix-blend-multiply bg-pink-300 rounded-full "></div> */}
      {/* </div> */}
      <div className="px-5">
        <Header />
      </div>

      <div className="mt-[68px] px-5 sm:mt-[100px] grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[50px]">
        <h4 className="mb-12 md:mb-0 font-[600] text-[20px] sm:text-2xl md:text-[45px] md:leading-[50px]">
          Have an idea or concept that really excites you? Let's make magic
          together!
        </h4>

        <div className="">
          <div className="mb-6 md:mb-[40px]">
            <p className="contact_label">Email</p>
            <a href="mailto:hikmotokunola@gmail.com" className="contact_main">
              hikmotokunola@gmail.com
            </a>
          </div>

          <div className="mb-10 md:mb-[60px]">
            <p className="contact_label">Twitter</p>
            <a
              href="https://twitter.com/HikmotAbolade"
              target="_blank"
              className="contact_main"
            >
              @hikmotAbolade
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[50px] items-start sm:items-center">
            <a
              href="https://github.com/Hikmot-O"
              target="_blank"
              className="social_links"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/hikmot-okunola-816671187/"
              target="_blank"
              className="social_links"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/hikmot"
              target="_blank"
              className="social_links"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className=" w-screen fixed bottom-[50px] flex items-center justify-center">
        <NavBar />
      </div>
    </section>
  );
};

export default Contact;
