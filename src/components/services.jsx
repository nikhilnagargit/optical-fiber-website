import React from "react";
import curves from "../assets/curves.png";
import GlobeCanvas from "./canvas/globe";
import guatemala from "../assets/guatemala.png";
function Services() {
  return (
    <div className="relative flex flex-col items-center text-white py-16 md:px-20 ">
      <div className="md:text-[40px] text-[35px] font-bold z-20 md:pb-4  py-5 text-purple-300  hover:text-green-300">
        Custom IPODWDM
      </div>
      <div className="md:text-lg text-sm px-4 pb-10 text-center">
        Whole country coverd, Optical highway over high voltage. We simplify
        everything so you can use the same Lambda with multiple OPGW providers.
      </div>
      <div className="absolute md:top-[-10%] top-[50%] opacity-80 rotate-180">
        <img src={curves} alt="bg" />
      </div>
      <div className="md:w-[50%] sm:w-[100%]">
        <img src={guatemala} alt="img" className="" />
      </div>
    </div>
  );
}

export default Services;
