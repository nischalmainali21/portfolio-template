import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

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

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, imageUrl, tags }: ProjectProps) {
  return (
    <section className="bg-neutral-200 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 group even:pl-8">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[21rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t shadow-2xl group-even:right-[initial] group-even:-left-40"
      />
    </section>
  );
}
