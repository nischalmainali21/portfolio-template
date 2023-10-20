"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.5 });
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className="mb-20 max-w-[50rem] text-center sm:mb-28 px-4 scroll-mt-36"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/nischal_portrait.jpg"
            alt="Nischal's portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-200 w-240 rounded-full object-cover border-[.35rem] border-white shadow-xl dark:border-black/10"
          ></Image>
        </motion.div>
        {/* Need to make the protrait a wierd oval shape */}
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti vitae
        ex similique officiis, corporis magnam perspiciatis optio iure
        reprehenderit facilis, autem aspernatur adipisci ab nulla illo facere
        placeat eveniet aut.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* button links */}
        <Link
          href="#contact"
          className=" group flex items-center bg-gray-900 text-white px-7 py-3 gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition dark:bg-white/20"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group flex items-center bg-gray-200 px-7 py-3 gap-2 rounded-full 
        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="/CV.pdf"
          download={true}
        >
          Donwload CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        {/* Change the linkedin and github link also change the flex in mobile */}
        <a
          className="flex items-center bg-zinc-50 p-4 gap-2 rounded-full 
        outline-none focus:scale-125 hover:scale-125 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://youtu.be/dQw4w9WgXcQ"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="flex items-center bg-zinc-50 p-4 gap-2 rounded-full 
        outline-none focus:scale-125 hover:scale-125 active:scale-105 transition cursor-pointer hover:text-gray-950 border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/nischalmainali21"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
