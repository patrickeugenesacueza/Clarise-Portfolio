import React from "react";

export default function HeroSection(){
    return (
      <div className=" bg-[#fff] h-[100vh] pt-[5rem] px-[8rem] flex">
        <div className="w-1/2  p-8 flex flex-col text-justify py-[12rem]">
          <div className="font-maven text-2xl mb-1">hello, I'm</div>
          <div className="font-maven text-[3.2rem] font-bold mb-1">
            Clarise Ann T. Duque
          </div>
          <div className="font-maven text-lg">Financial Management</div>
        </div>
        <div className="w-1/2"></div>
      </div>
    );
}