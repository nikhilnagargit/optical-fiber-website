import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="w-full justify-between flex items-center py-2 md:px-10 fixed top-0 z-40 bg-black bg-opacity-70">
      <img
        className="h-6 ml-3 md:h-8 object-contain opacity-60 rounded-lg cursor-pointer"
        src={logo}
        alt="logo"
      />
      <div className="flex text-[#82FF87] md:gap-10 md:pr-10 md:text-lg text-sm gap-4 pr-4">
        <p className="hover:text-purple-300 cursor-pointer">About Us</p>
        <p className="hover:text-purple-300 cursor-pointer">Services</p>
        <p className="hover:text-purple-300 cursor-pointer">Customers</p>
      </div>
    </div>
  );
}

export default Navbar;
