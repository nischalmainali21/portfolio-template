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
      ref={ref}
      className="bg-[#f5f8fc] w-full px-4 pb-16 sm:pb-20 sm:px-32 scroll-mt-16"
      id="contact"
    >
      <div className="flex flex-col">
        <SectionHeading>Contact Me</SectionHeading>
        <div className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full sm:max-w-[53rem]">
            <div className="flex gap-4 sm:gap-10 items-center justify-center bg-white/60 border border-black/[0.05] rounded-xl w-[85%] sm:w-[50%] h-40 p-4">
              <div className="bg-neutral-100 rounded-full p-4 sm:p-6">
                <BsFillTelephoneFill className="scale-105 sm:scale-125" />
              </div>
              <div>
                <h3 className="font-semibold capitalize text-xl sm:text-2xl text-gray-900">
                  Phone
                </h3>
                <p className="font-normal text-gray-800">+977 9811122233</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-10 items-center justify-center bg-white/60 border border-black/[0.05] rounded-xl w-[85%] sm:w-[50%] h-40 p-4">
              <div className="bg-neutral-100 rounded-full p-4 sm:p-6">
                <MdEmail className="scale-105 sm:scale-125" />
              </div>
              <div>
                <h3 className="font-semibold capitalize text-xl sm:text-2xl text-gray-900">
                  Email
                </h3>
                <p className="font-normal text-gray-800">
                  nischalmainali21@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
