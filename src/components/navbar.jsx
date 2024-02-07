import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <div className="w-full border flex items-center py-2 fixed top-0 z-20 text-[#82FF87]">
      <img className="h-10 w-20" src={logo} alt="logo" />
      <div className="flex">
        <div>About Us</div>
        <div>Partners</div>
        <div>Services</div>
      </div>
    </div>
  );
}

export default Navbar;
