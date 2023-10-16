"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
            className="h-200 w-240 rounded-full object-cover border-[.35rem] border-white shadow-xl"
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

      <div>{/* button links */}</div>
    </section>
  );
}

export default Intro;
