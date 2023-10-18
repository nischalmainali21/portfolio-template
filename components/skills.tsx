"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0.3 });

  return (
    <section
      className="bg-[#f5f8fc] w-full px-4 pb-16 sm:pb-20 sm:px-32 scroll-mt-16"
      ref={ref}
    >
      <div>
        <SectionHeading>My Skills</SectionHeading>
      </div>
    </section>
  );
}
