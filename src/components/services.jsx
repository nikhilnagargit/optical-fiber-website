import React from "react";
import curvesreverse from "../assets/curvesreverse.png";
// import GlobeCanvas from "./canvas/globe";
import { motion } from "framer-motion";
import guatemala from "../assets/guatemala.png";
function Services() {
  return (
    <div
      className="relative flex flex-col items-center text-white my-10"
      id="services">
      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-[40px] text-[35px] font-bold z-50  text-purple-300  hover:text-green-300">
        Custom IPODWDM
      </div>
      <div className="md:text-lg text-sm text-indigo-200 px-4 md:px-28 text-center">
        Whole country coverd, Optical highway over high voltage. We simplify
        everything so you can use the same Lambda with multiple OPGW providers.
      </div>
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
        className="absolute md:top-[-15%] top-[40%] opacity-60 z-30">
        <img src={curvesreverse} alt="bg" />
      </motion.div>
      <div className="md:w-[55%] sm:w-[100%] p-5">
        <img src={guatemala} alt="img" className="" />
      </div>
    </div>
  );
}

export default Services;
