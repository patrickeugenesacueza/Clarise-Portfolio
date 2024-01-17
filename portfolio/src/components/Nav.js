import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll, Element } from "react-scroll";
import Button from "./Button";

import HeroSection from "./pages/HeroSection";
import AboutMeSection from "./pages/AboutMeSection";
import SkillSection from "./pages/SkillSection";
import ExperienceSection from "./pages/ExperienceSection";
import AchievementSection from "./pages/AchievementSection";
import ContactSection from "./pages/ContactSection";
import FooterSection from "./pages/FooterSection";
import cert4 from "../image/text-icon.png";

export default function Nav() {
  let Links = [
    { name: "Home", link: "heroSection" },
    { name: "About", link: "aboutMeSection" },
    { name: "Skills", link: "skillSection" },
    { name: "Experience", link: "experienceSection" },
    { name: "Achievements", link: "achievementSection" },
  ];

  let [open, setOpen] = useState(false);

  const [activeLink, setActiveLink] = useState(null);
  
    const handleLinkClick = (name) => {
      setActiveLink(name);
    };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <Element name="heroSection">
        <HeroSection />
      </Element>
      <Element name="aboutMeSection">
        <AboutMeSection />
      </Element>
      <Element name="skillSection">
        <SkillSection />
      </Element>
      <Element name="experienceSection">
        <ExperienceSection />
      </Element>
      <Element name="achievementSection">
        <AchievementSection />
      </Element>
      <Element name="contactSection">
        <ContactSection />
        <FooterSection />
      </Element>

      <div className="shadow-md w-full bg-[#fff] z-20 fixed top-0 left-0 px-5 md:px-40 ">
        <div className="bg-[#fff] z-20 md:flex py-4">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            {/* <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="logo-google"></ion-icon>
            </span> */}
            <img src={cert4}></img>
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
            {Links.map((Link) => (
              <li key={Link.name} className="md:ml-8 text-md md:my-0 my-7">
                <ScrollLink
                  to={Link.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1500}
                  className={`text-gray-800 hover:text-[#5f2568] duration-500 cursor-pointer focus:outline-none ${
                    activeLink === Link.name
                      ? "active-link  border-[#5f2568] border-b-2"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(Link.name)}
                >
                  {Link.name}
                </ScrollLink>
              </li>
            ))}
            <ScrollLink
              to="contactSection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-800 hover:text-[#5f2568] duration-500"
            >
              <Button>Contact</Button>
            </ScrollLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
