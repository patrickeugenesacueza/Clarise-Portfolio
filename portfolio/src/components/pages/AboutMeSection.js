import React from "react";
import { useState } from "react";
import resume from "../../Resume/resume.pdf";

export default function AboutMeSection() {
  const aboutImg = "./aboutImage.jpg";

    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
      setLoading(true);

      // Simulating a download delay (replace this with your actual download logic)
      setTimeout(() => {
        // After some delay (simulating download completion), set loading back to false
        setLoading(false);
      }, 2000); // Adjust the duration as needed for your use case
    };


  return (
    <div className="py-5 border-t-[2px] z-0 bg-[#fff] shadow-md w-full h-[auto] px-0 text-center md:px-[10.5rem] lg:px-[10.5rem]">
      <div className="italic text-[#87588e] text-center text-2xl mb-4">
        <span>"Preparation meets opportunity, luck happens" -Seneca</span>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-start mt-[4em] md:mt-[5em]">
        <div className="w-full md:w-1/5 md:h-[30vh] mb-4 md:mb-0">
          <img
            src={aboutImg}
            alt="aboutMe image"
            className="w-[255px] h-[255px] lg:w-[355px] lg:h-[355px] object-cover shadow-md mx-auto md:mx-0"
          />
        </div>
        <div className="w-1/2 mx-auto md:text-left md:ml-11 mt-4 md:mt-0">
          <div className="text-[3rem] font-bold text-[#5f2568]">About Me</div>
          <div className="sm: text-justify font-poppins font-[100]">
            Hello there! I'm Clarise Ann T. Duque, a driven and accomplished
            individual with a passion for financial management. I proudly earned
            my Bachelor of Science degree in Financial Management from
            Pamantasan ng Lungsod ng Maynila, where I graduated with the
            prestigious distinction of Magna Cum Laude. <br></br>
            <br></br>Throughout my studies, I honed my analytical skills,
            strategic thinking, and financial acumen, preparing me to excel in
            the dynamic world of finance. I am eager to leverage my education
            and skills to contribute meaningfully to the financial sector.
          </div>
          <div>
            <a href={resume} download="Resume">
              <button
                className={`buttonload ${
                  loading ? "loading" : ""
                } px-4 py-2 bg-[#b37eb5] mt-3.5 font-bold font-maven text-[#fff] rounded-3xl mx-auto border-2 border-[#b37eb5] hover:bg-[#fff] hover:text-[#b37eb5] duration-500 md:mx-0 2xl:text-[1.5rem] 2xl:px-6 2xl:py-4 2xl:rounded-[4em] relative`}
                onClick={handleDownload}
                disabled={loading}
              >
                {loading && <i className="fa fa-spinner fa-spin"></i>}
                {loading ? "Loading" : "DOWNLOAD CV"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
