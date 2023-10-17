"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-neutral-100 w-full px-4 mb-20 sm:mb-28 sm:px-32">
      <div className="flex flex-col">
        <div className="font-bold text-4xl mb-6 sm:text-5xl sm:mb-10">
          <motion.div>About Me</motion.div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse sm:flex-grow sm:justify-between sm:gap-5 md:gap-4">
          <div className="mb-6 sm:mb-0">
            {/* image  maybe a black and white image*/}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Image
                src="/nischal_portrait.jpg"
                alt="Nischal's portrait"
                width="192"
                height="192"
                quality="95"
                className="w-full border-[.05rem] border-white shadow-xl rounded-md md:h-[450px] lg:h-[600px] sm:rounded-lg"
              ></Image>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="sm:max-w-[45%]"
          >
            <div className="flex flex-col">
              {/* some paragraphs */}
              <span className="text-xl mb-6 sm:text-3xl sm:mb-10">
                Hi, I'm{" "}
                <span className="font-bold text-2xl sm:text-4xl">
                  Nischal Mainali
                </span>
              </span>
              <p className="text-gray-700 sm:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                consequuntur est dolorem harum dolorum soluta molestiae libero
                cum voluptate perferendis. Tempore voluptatem assumenda fugiat
                recusandae officia expedita vitae, incidunt facere?
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
