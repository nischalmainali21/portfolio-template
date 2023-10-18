"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";

import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects", threshold: 0.4 });
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
