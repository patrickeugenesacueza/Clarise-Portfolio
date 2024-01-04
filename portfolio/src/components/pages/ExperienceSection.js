import React from "react";
import timelineElements from "../TimelineSheets";
import { ReactComponent as InternIcon } from "../../internIcon.svg";
import { ReactComponent as WorkIcon } from "../../financeIcon.svg";

import "../../App.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function ExperienceSection() {
  let WorkIconStyles = { background: "#5f2568" };
  return (
    <>
      <div className="py-[7rem] b z-0 bg-[#b37eb5] w-full h-[auto] md:h-[130vh] lg:h-[130vh] xl:h-[140vh] 2xl:h-[90vh] px-[2em] md:px-[10.5rem]">
        <h1 className="text-justify md:text-center lg:text-center 2xl:text-center mb-5 text-2xl font-poppins font-bold text-[30px] text-[#fff]">
          EXPERIENCE
        </h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let isInternIcon = element.icon === "intern";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? WorkIconStyles : WorkIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <InternIcon />}
              >
                <h3 className="pt-[0.25em]">{element.title} </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p className="pt-[1.5em] pb-[2em]">{element.description}</p>
                {showButton && <a href="/">{element.buttonText}</a>}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
}
