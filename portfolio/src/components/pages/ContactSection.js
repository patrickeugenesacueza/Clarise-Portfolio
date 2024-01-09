import React from "react";
import Form from "../Form";
// import { IonIcon } from "@ionic/react";
// import { FaBeer, FaLocationArrow, FaCoffee, FaSearchLocation} from "react-icons/fa";
import { ReactComponent as LocationIcon } from "../../locationPinIcon.svg";
import { ReactComponent as EmailIcon } from "../../emailIcon.svg";
import { ReactComponent as ContactNumberIcon } from "../../contactNumberIcon.svg";


export default function ContactSection() {
  // Your component logic here
  return (
    <div className="pt-[3rem] pb-0 bg-[#fff] w-full h-[70vh]">
      <div className="h-2/5 w-full bg-[#fff] px-[2em] md:px-[10.5em]">
        <div className="text-center">
          <span className="font-poppins font-medium text-[15px] text-[#9b9696]">
            Contact
          </span>
        </div>
        <div className="text-center mb-10">
          <span className="font-poppins font-bold text-[30px] text-[#5f2568]">
            Get In Touch With Me
          </span>
        </div>
        <div className="relative w-[500px] md:w-[1000px] l:w-[1000px] xl:w-[1000px] 2xl:w-[1000px] h-[500px] bg-[#fff] m-auto rounded-md shadow-lg border border-[#adb5bd80] flex z-10">
          <div className="h-full w-full md:w-3/5 l:w-3/5 xl:w-3/5 2xl:w-3/5 bg-[#fff] border-r-2 p-4">
            <h6 className="font-poppins font-medium text-[15px] text-[#9b9696]">
              Available 24/7
            </h6>
            <h2 className="font-poppins font-bold text-[28px] text-[#5f2568] mb-6">
              Get In Touch
            </h2>
            <Form />
          </div>
          <div className="h-full w-2/5 bg-[#fff] px-[2em] pt-[7em] hidden md:block l:block xl:block 2xl:block">
            {/* 1st row */}
            <div className="flex mb-6 w-full">
              <div>
                <LocationIcon />
                {/* <FaSearchLocation className="text-black" size={30} /> */}
              </div>
              <div className="px-4">
                <div>
                  <h3 className="font-[500] text-[1.25rem]">Location</h3>
                </div>
                <div className="border-[#495057] border-b-[.5px]">
                  <p className="font-[50] font-[#495057]">
                    Lives in Manila, Metro Manila
                  </p>
                </div>
              </div>
            </div>
            {/* 2nd row */}
            <div className="flex mb-6">
              <div>
                <ContactNumberIcon className="text-[#5f2568]" />
                {/* <FaSearchLocation className="text-black" size={30} /> */}
              </div>
              <div className="px-4">
                <div>
                  <h3 className="font-[500] text-[1.25rem]">Phone Number</h3>
                </div>
                <div className="border-[#495057] border-b-[.5px] ">
                  <p className="font-[50] font-[#495057]">+(63) 976-090-8780</p>
                </div>
              </div>
            </div>
            {/* 3rd row */}
            <div className="flex">
              <div>
                <EmailIcon />
                {/* <FaSearchLocation className="text-black" size={30} /> */}
              </div>
              <div className="px-4">
                <div>
                  <h3 className="font-[500] text-[1.25rem]">Email Address</h3>
                </div>
                <div className="border-[#495057] border-b-[.5px] ">
                  <p className="font-[50] font-[#495057]">
                    clrsduque22@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-[#495057]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61776.72477700896!2d120.93835996632652!3d14.596494687497135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1704534524098!5m2!1sen!2sph"
          // allowfullscreen="true"
          className="w-full h-full opacity-[0.5]"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="myFrame"
        ></iframe>
      </div>
    </div>
  );
}
