import React from "react";

export default function Form(){
    return (
      <div>
        <form>
          {/* <label></label> */}
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full h-12 bg-[#fff] text-[#495057] border-[1px] border-[#ced4da] py-2 px-4 rounded-md mb-4"
          />

          <input
            type="text"
            placeholder="Enter Subject"
            className="w-full h-12 bg-[#fff] text-[#495057] border-[1px] border-[#ced4da] py-2 px-4 rounded-md mb-4"
          />

          <textarea
            placeholder="Message"
            className="w-full h-48 bg-[#fff] border-[1px] border-[#ced4da] py-2 px-4 rounded-md mb-4 resize-none"
          ></textarea>

          <button className="px-4 py-1 w-full bg-[#b37eb5] font-bold font-maven text-[#fff] border-2 border-[#b37eb5] rounded-3xl mx-auto hover:bg-[#fff] hover:text-[#b37eb5] duration-500 md:mx-0 md:mr-3 2xl:text-[1.5rem] 2xl:px-6 2xl:py-4 2xl:rounded-[4em] ">
            Send Message
          </button>
        </form>
      </div>
    );
}