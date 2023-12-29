import React from "react";
import { TypeAnimation } from "react-type-animation";

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
          <div className="flex">
            <button className="px-4 py-2 bg-[#fff] mt-3.5 font-bold font-maven text-[#b37eb5] border-2 border-[#b37eb5] border- rounded-3xl mx-auto md:mx-0 md:mr-3 ">
              CONTACT ME
            </button>
            <button className="px-4 py-2 bg-[#b37eb5] mt-3.5 font-bold font-maven text-[#fff] rounded-3xl mx-auto md:mx-0">
              DOWNLOAD CV
            </button>
          </div>
        </div>
        <div className="hidden md:w-1/2"></div>
      </div>
    );
}