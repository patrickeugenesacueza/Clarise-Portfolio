import React from "react";

export default function AboutMeSection() {
  const aboutImg = "./aboutImage.jpg";

  return (
    <div className="py-5 border-t-[2px] shadow-md w-full h-[70vh] px-0 text-center md:px-[10.5rem] lg:px-[10.5rem]">
      <div className="italic text-[#87588e] text-center text-2xl mb-4">
        <span>"Preparation meets opportunity, luck happens" -Seneca</span>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start mt-[5em]">
        <div className="w-full md:w-1/5 md:h-[30vh] mb-4 md:mb-0">
          <img
            src={aboutImg}
            alt="aboutMe image"
            className="w-[255px] h-[255px] lg:w-[355px] lg:h-[355px] object-cover shadow-md mx-auto md:mx-0"
          />
        </div>
        <div className="mx-auto md:text-left md:ml-11 mt-4 md:mt-0">
          Details of about me
        </div>
      </div>
    </div>
  );
}
