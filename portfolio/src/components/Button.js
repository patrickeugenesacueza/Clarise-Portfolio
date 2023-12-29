import React from "react";

export default function Button(props) {
  return (
    <button className="bg-[#b37eb5] text-[#fff] normal py-2 px-6 rounded md:ml-8 hover:bg-[#b37eb5] duration-500">
      {props.children}
    </button>
  );
}
