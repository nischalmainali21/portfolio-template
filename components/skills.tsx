"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import { delay, motion, Variants } from "framer-motion";

const fadeInAnimationVaraints = {
  offScreen: {
    opacity: 0,
    y: 100,
  },
  onScreen: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.2,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0.3 });

  return (
    <section
      className="bg-[#f5f8fc] w-full px-4 pb-16 sm:pb-20 sm:px-32 scroll-mt-16 dark:bg-[#2C3639]"
      ref={ref}
      id="skills"
    >
      <div>
        <SectionHeading>My Skills</SectionHeading>
        <div className="flex items-center justify-center">
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-w-[53rem]">
            {skillsData.map((skill, index) => (
              <motion.li
                key={index}
                className="bg-white border border-black/[0.1] rounded-xl py-3 px-5 dark:bg-white/20 dark-text"
                variants={fadeInAnimationVaraints}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
