import React, { useState } from "react";
import Button from "./Button";

export default function Nav() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "Testimonial", link: "/" },
    { name: "Career", link: "/" },
    { name: "Experience", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 px-40">
      <div className=" bg-#fff md:flex py-4 md:">
        <div className="font-bold text-2xl cursor-pointer flex items-center normal text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-google"></ion-icon>
          </span>
          CLARISE
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex ml-auto md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {/* Use ml-auto to move the ul to the right */}
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={Link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))}
          <Button>Download CV</Button>
        </ul>
      </div>
    </div>
  );
}
