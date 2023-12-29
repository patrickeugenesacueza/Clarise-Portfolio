import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection(){
    return (
      <div className=" bg-[#fff] h-[100vh] pt-[5rem] px-0 flex md:px-[8rem]">
        <div className="w-1/2  p-8 flex flex-col text-justify py-[12rem]">
          <div className="font-maven text-2xl mb-1">hello, I'm</div>
          <div className="font-maven text-[3.2rem] font-bold mb-1">
            Clarise Ann T. Duque
          </div>
          {/* <div className="font-maven text-lg">Financial Management</div> */}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Account Payables",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
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
        </div>
        <div className="w-1/2"></div>
      </div>
    );
}