import React from "react";
import redca from "../assets/redca.png";
import trecsa from "../assets/trecsa.png";
import trelec from "../assets/trelec.png";
import cfe from "../assets/cfe.png";
import curves from "../assets/curves.png";

function Partners() {
  return (
    <div className="relative flex flex-col items-center text-white py-20 px-10">
      <div className="text-[40px] font-bold z-20 text-purple-300 tracking-widest py-5 hover:text-green-300">
        Our Partners
      </div>
      <div className="text-lg pb-10 z-20">
        Optical highway over high voltage. We simplify everything so you can use
        the same Lambda with multiple OPGW providers.
      </div>
      <div className="z-20 py-20 flex gap-10 justify-center items-center">
        <img
          src={cfe}
          className="h-14 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
        <img
          src={redca}
          className="h-36 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
        <img
          src={trelec}
          className="h-24 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
        <img
          src={trecsa}
          className="h-24 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
      </div>
      <div className="absolute top-[-150px]  opacity-20">
        <img src={curves} alt="bg" />
      </div>
    </div>
  );
}

export default Partners;
