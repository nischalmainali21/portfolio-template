"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.4,
  });

  const { theme } = useTheme();
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
                  background:
                    theme === "light" ? "#f8fafc" : "rgba(255,255,255,0.10)",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255,255,255,0.5)",
                }}
                iconStyle={{
                  background:
                    theme === "light" ? "#f8fafc" : "(255,255,255,0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark-text">
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
