import React from "react";
import redca from "../assets/redca.png";
import trecsa from "../assets/trecsa.png";
import trelec from "../assets/trelec.png";
import cfe from "../assets/cfe.png";
import curves from "../assets/curves.png";

function Partners() {
  return (
    <div className="relative flex flex-col items-center text-white md:py-20 md:px-10 py-10">
      <div className="md:text-[40px] text-[35px] font-bold z-20 py-5 text-purple-300  hover:text-green-300">
        Our Partners
      </div>

      <div className="z-20 md:py-20 py-5 flex flex-row md:gap-10 gap-3 justify-center items-center flex-wrap">
        <img
          src={cfe}
          className="md:h-14 h-10 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
        <img
          src={trelec}
          className="md:h-24 h-16 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
        <img
          src={redca}
          className="md:h-36 h-24 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />

        <img
          src={trecsa}
          className="md:h-24 h-20 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
      </div>
      <div className="absolute md:top-[-150px] opacity-30">
        <img src={curves} alt="bg" />
      </div>
    </div>
  );
}

export default Partners;
