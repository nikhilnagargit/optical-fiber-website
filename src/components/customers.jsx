import React from "react";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

const logos = [logo1, logo2, logo3, logo4, logo5];
function CustomersSection() {
  return (
    <div className="relative flex flex-col items-center text-white px-10 md:mt-20 z-30">
      <div className="md:text-[40px] text-[35px] font-bold z-20 md:pb-4  py-5 text-purple-300  hover:text-green-300">
        Our Customers
      </div>
      <div className="md:text-lg text-sm px-4 text-center">
        <span className="text-green-300"> 25 glorious </span> years of working
        with industry leaders.
      </div>
      <div className="z-20 py-20 flex flex-wrap justify-center gap-6 items-baseline">
        <img
          src={logo1}
          className="md:w-24 w-20 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />

        <img
          src={logo2}
          className="md:w-24 w-20 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
        <img
          src={logo3}
          className="md:w-24 w-20 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />

        <img
          src={logo5}
          className="md:w-28 w-20 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
        <img
          src={logo4}
          className="md:w-40 w-40 grayscale hover:grayscale-0 cursor-pointer"
          alt=""
        />
      </div>
      {/* <div className="absolute top-[-150px]  opacity-20">
        <img src={curves} alt="bg" />
      </div> */}
    </div>
  );
}

export default CustomersSection;
