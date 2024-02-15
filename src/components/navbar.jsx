import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="w-full justify-between flex items-center bg-[#060016] bg-opacity-80 py-2 md:px-10 fixed top-0 z-50">
      <img
        className="h-6 ml-3 md:h-8 object-contain rounded-lg cursor-pointer"
        src={logo}
        alt="logo"
      />
      <div className="flex text-white md:gap-10 md:pr-10 md:text-lg text-sm gap-4 pr-4">
        <a
          href="#aboutus"
          className="hover:text-indigo-300 text-green-400  cursor-pointer">
          About Us
        </a>
        <a
          href="#services"
          className="hover:text-indigo-300 text-green-400  cursor-pointer">
          Services
        </a>
        <a
          href="#customers"
          className="hover:text-indigo-300 text-green-400  cursor-pointer">
          Customers
        </a>
      </div>
    </div>
  );
}

export default Navbar;
