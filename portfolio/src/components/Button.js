import React from "react";

export default function Button(props) {
  return (
    <button className="bg-[#b37eb5] text-[#fff] normal py-2 px-6 rounded border-2 border-[#b37eb5] md:ml-8 hover:bg-[#fff] duration-500 hover:text-[#b37eb5]">
      {props.children}
    </button>
  );
}
