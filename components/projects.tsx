"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
  return (
    <section
      className="w-full px-4 mb-20 sm:mb-28 sm:px-32 scroll-mt-16"
      id="projects"
      ref={ref}
    >
      <div>
        <SectionHeading>My Projects</SectionHeading>
        <div className="flex items-center justify-center flex-col">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
