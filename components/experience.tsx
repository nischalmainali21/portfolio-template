"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.4,
  });

  return (
    <section
      className="w-full px-4 mb-20 sm:mb-28 sm:px-32 scroll-mt-16"
      id="experience"
      ref={ref}
    >
      <div id="soem">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="" animate={true}>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                date={item.date}
                icon={item.icon}
                contentStyle={{
                  background: "#f8fafc",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
                iconStyle={{ background: "#f8fafc", fontSize: "1.5rem" }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
