"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-neutral-100 w-full px-4 mb-20 sm:mb-16">
      <div className="flex flex-col">
        <div className="font-bold text-4xl mb-6">About Me</div>
        <div className="flex flex-col">
          <div className="mb-6">
            {/* image  maybe a black and white image*/}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Image
                src="/nischal_portrait.jpg"
                alt="Nischal's portrait"
                width="192"
                height="192"
                quality="95"
                className="w-full border-[.05rem] border-white shadow-xl rounded-md"
              ></Image>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-col">
              {/* some paragraphs */}
              <span className="text-xl mb-6">
                Hi, I'm{" "}
                <span className="font-bold text-2xl">Nischal Mainali</span>
              </span>
              <p className="text-gray-500">
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
