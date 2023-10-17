import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";

export default function Projects() {
  return (
    <section className="w-full px-4 mb-20 sm:mb-28 sm:px-32">
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
