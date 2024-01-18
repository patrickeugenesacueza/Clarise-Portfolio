import React from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "../Link.js";
import resume from "../../Resume/resume.pdf";
import { Link as ScrollLink, scroller } from "react-scroll";

export default function HeroSection() {
  const heroImg = "./financeImage.png";

  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    // Simulating a download delay (replace this with your actual download logic)
    setTimeout(() => {
      // After some delay (simulating download completion), set loading back to false
      setLoading(false);
    }, 2000); // Adjust the duration as needed for your use case
  };

  
  const scrollToContact = () => {
    // Scroll to the ContactSection when the button is clicked
    scroller.scrollTo("contactSection", {
      smooth: true,
      duration: 2000,
    });
  };

  return (
    <div className="bg-[#fff] h-[80vh] md:h-[90vh] lg:h-[90vh] pt-[5rem] px-0 md:px-[10.5rem] lg:text-start  w-full flex md:flex md:items-center">
      <div className="w-full text-center md:w-1/2 md:text-justify flex flex-col pt-[5em] pb-[6em] md:py-[7em] lg:py-10">
        <div className="font-maven text-2xl mb-1 md:text-2xl 2xl:text-2xl 2xl:mb-10">
          hello, I'm
        </div>
        <div className="font-maven text-2xl font-bold mb-1 text-[#b37eb5] 2xl:mb-10">
          Clarise Ann T. Duque
        </div>
        <TypeAnimation
          sequence={[
            "Account Payables",
            1000,
            "Account Receivables",
            1000,
            "Assistant Account Officer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="font-serif text-[#495057] text-xl md:text-xl 2xl:text-xl 2xl:mb-5"
          repeat={Infinity}
        />
        <div className="mb-2">
          <button
            onClick={scrollToContact}
            className="px-4 py-2 bg-[#fff] mt-3.5 mr-2 font-bold font-maven text-[#b37eb5] border-2 border-[#b37eb5] rounded-3xl mx-auto hover:bg-[#b37eb5] hover:text-[#fff] duration-500 md:mx-0 md:mr-3 2xl:text-2xl 2xl:px-4 2xl:py-2 2xl:rounded-[4em] "
          >
            CONTACT ME
          </button>
          <a href={resume} download="Resume">
            <button
              className={`buttonload ${
                loading ? "loading" : ""
              } px-4 py-2 bg-[#b37eb5] mt-3.5 font-bold font-maven text-[#fff] rounded-3xl mx-auto border-2 border-[#b37eb5] hover:bg-[#fff] hover:text-[#b37eb5] duration-500 md:mx-0 2xl:text-[1.5rem] 2xl:rounded-[4em] relative`}
              onClick={handleDownload}
              disabled={loading}
            >
              {loading && <i className="fa fa-spinner fa-spin"></i>}
              {loading ? "Loading" : "DOWNLOAD CV"}
            </button>
          </a>
        </div>
        <div className="m-auto z-0 flex md:flex md:m-0">
          <div className="mr-2">
            <Link
              url="https://www.facebook.com/clacla.patpat"
              icon="logo-facebook"
              iconSize="large"
              iconColor="#9b6c9a"
            />
          </div>
          <div className="mr-2">
            <Link
              url="https://www.linkedin.com/in/clarise-duque-52a087262/"
              icon="logo-linkedin"
              iconSize="large"
              iconColor="#9b6c9a"
            />
          </div>
          <div>
            <Link
              url="https://twitter.com/i/flow/login?redirect_after_login=%2FYujinCla2017"
              icon="logo-twitter"
              iconSize="large"
              iconColor="#9b6c9a"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 h-full">
        <img
          src={heroImg}
          alt="illustrator character image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
