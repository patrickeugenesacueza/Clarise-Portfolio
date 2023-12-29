import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "../Link.js";

export default function HeroSection(){
    return (
      <div className=" bg-[#fff] h-[100vh] pt-[5rem] px-0 flex md:px-[8rem]">
        <div className="w-full p-0 text-center md:w-1/2 md:text-justify flex flex-col py-44">
          <div className="font-maven text-2xl mb-1">hello, I'm</div>
          <div className="font-maven text-[3.2rem] font-bold mb-1 text-[#b37eb5]">
            Clarise Ann T. Duque
          </div>
          <TypeAnimation
            sequence={[
              "Account Payables",
              1000,
              "Account Receivables",
              1000,
              "Assistant Accountant Officer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="font-maven text-lg"
            repeat={Infinity}
          />
          <div className="mb-2">
            <button className="px-4 py-2 bg-[#fff] mt-3.5 mr-2 font-bold font-maven text-[#b37eb5] border-2 border-[#b37eb5] rounded-3xl mx-auto hover:bg-[#b37eb5] hover:text-[#fff] duration-500 md:mx-0 md:mr-3 ">
              CONTACT ME
            </button>
            <button className="px-4 py-2 bg-[#b37eb5] mt-3.5 font-bold font-maven text-[#fff] rounded-3xl mx-auto border-2 border-[#b37eb5] hover:bg-[#fff] hover:text-[#b37eb5] duration-500 md:mx-0">
              DOWNLOAD CV
            </button>
          </div>
          <div className="m-auto flex md:flex md:m-0">
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
        <div className="hidden md:w-1/2"></div>
      </div>
    );
}