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
    <div className="relative flex flex-col items-center text-white md:py-20 md:px-10 py-10">
      <div className="md:text-[40px] text-[35px] font-bold z-40 py-5 text-purple-300  hover:text-green-300">
        Our Partners
      </div>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show">
        <div className="z-40 md:py-20 py-5 flex flex-row md:gap-10 gap-3 justify-center items-center flex-wrap">
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
              className="md:h-24 h-16 grayscale hover:grayscale-0 cursor-pointer"
              alt=""
            />
          </motion.div>

          <motion.div variants={fadeIn("right", "spring", 0.44, 0.5)}>
            <img
              src={redca}
              className="md:h-36 h-24 grayscale hover:grayscale-0 cursor-pointer"
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
