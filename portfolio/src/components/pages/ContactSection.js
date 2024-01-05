import React from "react";


export default function ContactSection(){
    return (
      <div className="pt-[3rem] b z-0 bg-[#fff] w-full h-[90vh] md:h-[90vh] lg:h-[120vh] xl:h-[110vh] 2xl:h-[90vh] px-[2em] md:px-[0]">
        <div className="h-1/2 w-full bg-[#fff] px-[2em] md:px-[10.5em]">
          <div className="text-center font-poppins font-medium text-[15px] text-[#9b9696]">
            Contact
          </div>
          <div className="text-center">
            <span className="font-poppins font-bold text-[30px] text-[#5f2568]">
              Get In Touch With Me
            </span>
          </div>
        </div>
        <div className="h-1/2 w-full bg-black"></div>
      </div>
    );
}