import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

const Contact = () => {
  return (
    <section className=" h-screen bg-fuchsia-100 px-[30px] pt-10 overflow-y-auto">
      <div className="flex flex-col sm:flex-row absolute">
        <div className="animate-blob_1 h-[50px]  w-[100px] sm:w-[500px] sm:h-[100%] top-[100px] filter blur-3xl left-10 mix-blend-multiply bg-purple-300 rounded-full "></div>
        <div className="animate-blob h-[50px]   w-[100px] sm:w-[500px] sm:h-[100%] top-[100px] filter blur-3xl right-10 mix-blend-multiply bg-pink-300 rounded-full "></div>
      </div>
      <Header />

      <div className="mt-[30px] sm:mt-[100px] grid grid-cols-1 sm:grid-cols-2 gap-y-[50px] sm:gap-x-[50px]">
        <h4 className="font-[600] text-[45px] leading-[50px]">
          Have an idea or concept that really excites you? Let's make magic
          together!
        </h4>

        <div className="">
          <div className="mb-[40px]">
            <p className="contact_label">Email</p>
            <a href="mailto:hikmotokunola@gmail.com" className="contact_main">
              hikmotokunola@gmail.com
            </a>
          </div>

          <div className="mb-[60px]">
            <p className="contact_label">Twitter</p>
            <a
              href="https://twitter.com/HikmotAbolade"
              target="_blank"
              className="contact_main"
            >
              @hikmotAbolade
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-[25px] sm:gap-[50px] items-start sm:items-center">
            <a
              href="https://instagram.com/hikmot"
              target="_blank"
              className="social_links"
            >
              Instagram
            </a>
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
          </div>
        </div>
      </div>
      <div className="w-[calc(100%-60px)] fixed bottom-[25px] flex items-center justify-center">
        <NavBar />
      </div>
    </section>
  );
};

export default Contact;
