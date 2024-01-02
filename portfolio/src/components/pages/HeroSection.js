import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "../Link.js";
// import imageFrom from "../../../public/image/heroProfile";
// import heroImg from "/";

export default function HeroSection() {

  const heroImg = "./financeImage.png";

  return (
    <div className="bg-[#fff] h-[80vh] md:h-[90vh] lg:h-[90vh] pt-[5rem] px-0 md:px-[10.5rem] lg:text-start  w-full flex md:flex md:items-center">
      <div className="w-full text-center md:w-1/2 md:text-justify flex flex-col pt-[5em] pb-[6em] md:py-[7em] lg:py-10">
        <div className="font-maven text-2xl mb-1 md:text-4xl 2xl:text-[4rem] 2xl:mb-10">
          hello, I'm
        </div>
        <div className="font-maven text-[3.2rem] font-bold mb-1 text-[#b37eb5] md:text-4xl 2xl:text-[4rem] 2xl:mb-10">
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
          className="font-serif text-[#495057] text-xl md:text-4xl 2xl:text-[3rem] 2xl:mb-5"
          repeat={Infinity}
        />
        <div className="mb-2">
          <button className="px-4 py-2 bg-[#fff] mt-3.5 mr-2 font-bold font-maven text-[#b37eb5] border-2 border-[#b37eb5] rounded-3xl mx-auto hover:bg-[#b37eb5] hover:text-[#fff] duration-500 md:mx-0 md:mr-3 2xl:text-[1.5rem] 2xl:px-6 2xl:py-4 2xl:rounded-[4em] ">
            CONTACT ME
          </button>
          <button className="px-4 py-2 bg-[#b37eb5] mt-3.5 font-bold font-maven text-[#fff] rounded-3xl mx-auto border-2 border-[#b37eb5] hover:bg-[#fff] hover:text-[#b37eb5] duration-500 md:mx-0 2xl:text-[1.5rem] 2xl:px-6 2xl:py-4 2xl:rounded-[4em]">
            DOWNLOAD CV
          </button>
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
        <img src={heroImg} alt="illustrator character image" className="w-full h-full" />
      </div>
    </div>
  );
}
