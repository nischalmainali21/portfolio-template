"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: "Contact", threshold: 0.3 });
  return (
    <section
      // ref={scrollRef}
      ref={ref}
      className="bg-[#f5f8fc] w-full px-4 pb-16 sm:pb-20 sm:px-32 scroll-mt-16"
      id="contact"
    >
      <div>
        <SectionHeading>Contact Me</SectionHeading>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <div className="flex gap-6 sm:gap-4 items-center justify-center bg-white/60 border border-black/[0.05] rounded-xl p-6">
            <div className="w-16 sm:w-20 bg-neutral-100 rounded-full h-16 sm:h-20 flex items-center justify-center">
              <BsFillTelephoneFill className="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-">
              <h3 className="font-semibold capitalize text-2xl text-gray-900">
                Phone
              </h3>
              <p className="font-normal text-gray-800">+977 9811111111</p>
            </div>
          </div>

          <div className="flex gap-6 sm:gap-4 items-center justify-center bg-white/60 border border-black/[0.05] rounded-xl sm:p-[6%] p-6">
            <div className="w-16 sm:w-20 bg-neutral-100 rounded-full h-16 sm:h-20 flex items-center justify-center">
              <MdEmail className="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h3 className="font-semibold capitalize text-2xl text-gray-900">
                Email
              </h3>
              <p className="font-normal text-gray-800">some@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
