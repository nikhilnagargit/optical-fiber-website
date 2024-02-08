import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="w-full justify-between flex items-center py-2 fixed top-0 z-20 opacity-80">
      <img
        className="h-8 object-contain rounded-full cursor-pointer mx-5"
        src={logo}
        alt="logo"
      />
      <div className="flex text-[#82FF87] gap-10 pr-10 text-sm lg:pr-10">
        <p className="hover:text-purple-200 cursor-pointer">About Us</p>
        <p className="hover:text-purple-200 cursor-pointer">Services</p>
        <p className="hover:text-purple-200 cursor-pointer">Customers</p>
      </div>
    </div>
  );
}

export default Navbar;
