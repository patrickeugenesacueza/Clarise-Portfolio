import React from "react";

export default function SkillSection(){
    return (
      <>
        <div className="py-[7rem] b z-0 bg-[#fff] w-full h-[auto] md:h-[90vh] lg:h-[75vh] xl:h-[50vh] 2xl:h-[50vh] px-[2em] md:px-[10.5rem]">
          <div className="item-center text-center">
            <div>
              <span className="font-poppins font-medium text-[15px] text-[#9b9696]">
                Skills
              </span>
            </div>
            <div>
              <span className="font-poppins font-bold text-[30px] text-[#5f2568]">
                Why Choose me
              </span>
            </div>
            <div className="mt-5">
              <span className="font-poppins font-[100] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl sm: text-justify">
                I humbly present myself, marked by the distinction of Magna Cum
                Laude in BS Financial Management, <br></br>
                with a genuine commitment to contributing modest yet meaningful
                insights in any professional endeavor.
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-[#fff] border-[.50px] border-[#b2bbc3] px-24 py-[55px] rounded-md text-center hover:text-white hover:bg-[#9b6c9a] hover:duration-500">
                <div>
                  <ion-icon name="analytics-outline" size="large"></ion-icon>
                </div>
                <div className="">Analytical</div>
              </div>
              <div className="bg-[#fff] border-[.50px] border-[#b2bbc3] px-24 py-[55px] rounded-md text-center hover:text-white hover:bg-[#9b6c9a] hover:duration-500">
                <div className="">
                  <ion-icon
                    name="chatbubble-ellipses-outline"
                    size="large"
                  ></ion-icon>
                </div>
                <div className="">Vocal</div>
              </div>
              <div className="bg-[#fff] border-[.50px] border-[#b2bbc3] px-24 py-[55px] rounded-md text-center hover:text-white hover:bg-[#9b6c9a] hover:duration-500">
                <div>
                  <ion-icon name="bulb-outline" size="large"></ion-icon>
                </div>
                <div>Strategic</div>
              </div>
              <div className="bg-[#fff] border-[.50px] border-[#b2bbc3] px-24 py-[55px] rounded-md text-center hover:text-white hover:bg-[#9b6c9a] hover:duration-500">
                <div>
                  <ion-icon name="bar-chart-outline" size="large"></ion-icon>
                </div>
                <div>Ethical</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}   