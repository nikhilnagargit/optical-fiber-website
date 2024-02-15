import React from "react";
import { Button } from "@material-tailwind/react";
import { ReactTyped } from "react-typed";
import StarsCanvas from "./canvas/stars";
import opticalfiber from "../assets/opticalfiber.png";
import guatemala from "../assets/guatemala.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motion/motion";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import curvesreverse from "../assets/curvesreverse.png";
import {
  RiInstallLine,
  RiCompass3Line,
  RiWaterFlashLine,
  RiCalendarCheckLine,
  RiExchangeDollarLine,
  RiAiGenerate,
} from "react-icons/ri";
import Tilt from "react-parallax-tilt";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";
import bg6 from "../assets/bg6.png";
const data = [
  {
    text: "Installed 50 meters above the ground",
    color: "green",
    icon: RiInstallLine,
    image: bg1,
  },
  {
    text: "17 db/km average loss",
    color: "red",
    icon: RiWaterFlashLine,
    image: bg2,
  },
  {
    text: "400 km coverage with 99.99% QoS",
    color: "blue",
    icon: RiCompass3Line,
    image: bg3,
  },
  {
    text: "Centralized PLEX and PLIN management",
    color: "purple",
    icon: RiCalendarCheckLine,
    image: bg4,
  },
  {
    text: "Savings in Maintenance and OpEx",
    color: "yellow",
    icon: RiExchangeDollarLine,
    image: bg6,
  },
];

function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <StarsCanvas />
      <motion.div
        animate={{
          transform: "translateY(10px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute md:top-[20%]  top-[40%] opacity-50 z-10 ">
        <img src={curvesreverse} alt="bg" />
      </motion.div>
      <div className="my-20 md:mx-28 md:max-w-[75%] mx-5 p-5 rounded-xl z-10 bg-[#060016] bg-opacity-60 md:bg-opacity-30">
        <div className="text-white md:text-[50px] text-[30px]">
          Port to port lambdas with{" "}
          <span className="bg-gradient-to-r font-bold cursor-pointer from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            <ReactTyped
              strings={["Performance", "99.9% QOS", "Bandwidth"]}
              typeSpeed={40}
              backDelay={2000}
              backSpeed={40}
              loop
              showCursor={false}
            />
          </span>
        </div>
        <div className="text-indigo-200 text-sm md:text-lg mb-4 text-justify">
          Transport capacity while taking care of your optical and financial
          budget with our unified OPGW network. Network with best connecitvity.
        </div>
        <div className="flex gap-4">
          <Button className="bg-gradient-to-l from-blue-700 via-green-600 to-indigo-500">
            <a href="#contactus" className="font-bold">
              Contact Us
            </a>
          </Button>
          <Button className="text-indigo-100" variant="outlined" color="indigo">
            <p className="font-normal">Explore More</p>
          </Button>
        </div>
      </div>
      <div className="flex justify-center relative w-full">
        <div className="md:w-[50%] w-[90%] z-10 opacity-75">
          <img src={guatemala} alt="img" className=""></img>
        </div>
        <div className="md:w-[20%] w-[30%] opacity-80 absolute left-0">
          <img src={opticalfiber} alt="bg" />
        </div>
        <div className="md:w-[20%] w-[30%] opacity-80 transform rotate-180 absolute right-0 top-[-20%]">
          <img src={opticalfiber} alt="bg" />
        </div>
      </div>

      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        className="flex w-full gap-2 md:gap-5 flex-wrap justify-center  md:m-20 m-5 rounded-lg z-50">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn("right", "spring", 0.3 * idx, 0.75)}>
            <Tilt
              className="md:w-[175px] w-[100px] h-full rounded-xl bg-gradient-to-bl from-blue-600 via-indigo-400 to-green-400  p-[1px]"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}>
              <div className="w-full h-full bg-[#0d0621] flex flex-col items-center gap-3 md:p-3 p-2 rounded-xl ">
                <img src={item.image} className="md:w-[40%] w-[60%]" alt="" />
                <p className="text-indigo-100 text-center md:text-sm text-[12px]">
                  {item.text}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}

export default Hero;
