"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

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
                  <a
                    className="underline"
                    href="mailto:nischalmainali21@gmail.com"
                  >
                    nischalmainali21@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form
            className="w-[min(100%,40rem)] mt-10 flex flex-col"
            action={async (formData) => {
              await sendEmail(formData);
            }}
          >
            <input
              type="email"
              name="senderEmail"
              className="h-14 rounded-lg border border-black/10 px-4"
              placeholder="Your Email"
              required
              maxLength={500}
            ></input>
            <textarea
              className="h-52 my-3 rounded-lg border border-black/10 p-4"
              placeholder="Your Message"
              required
              maxLength={500}
              name="message"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all group focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
            >
              Submit{" "}
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
