import React from "react";
import redca from "../assets/redca.png";
import trecsa from "../assets/trecsa.png";
import trelec from "../assets/trelec.png";
import cfe from "../assets/cfe.png";
import curves from "../assets/curves.png";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "./motion/motion";

function Partners() {
  return (
    <div className=" mt-10 relative flex flex-col items-center text-white px-10 z-30">
      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-[40px] text-[35px] font-bold z-20 hover:text-green-400">
        Partners
      </div>
      <div className="md:text-lg text-sm text-indigo-200 px-4 text-center">
        <span className="text-green-300"> World class </span> partners
        fulfilling your requirements.
      </div>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show">
        <div className="z-40 md:py-10 py-5 flex flex-row md:gap-5 justify-center items-center flex-wrap">
          <motion.div variants={fadeIn("right", "spring", 0.24, 0.5)}>
            <img
              src={cfe}
              className="md:h-14 h-10 grayscale hover:grayscale-0 cursor-pointer z-100"
              alt=""
            />
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 0.34, 0.5)}>
            <img
              src={trelec}
              className="md:h-20 h-16 grayscale hover:grayscale-0 cursor-pointer"
              alt=""
            />
          </motion.div>

          <motion.div variants={fadeIn("right", "spring", 0.44, 0.5)}>
            <img
              src={redca}
              className="md:h-28 h-24 grayscale hover:grayscale-0 cursor-pointer"
              alt=""
            />
          </motion.div>

          <motion.div variants={fadeIn("right", "spring", 0.54, 0.5)}>
            <img
              src={trecsa}
              className="md:h-24 h-20 grayscale hover:grayscale-0 cursor-pointer"
              alt=""
            />
          </motion.div>
        </div>
      </motion.section>
      <motion.div
        animate={{
          transform: "translateY(10px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "easeOut",
        }}
        className="absolute md:top-[-150px] opacity-30 z-[-1]">
        <img src={curves} alt="bg" />
      </motion.div>
    </div>
  );
}

export default Partners;
