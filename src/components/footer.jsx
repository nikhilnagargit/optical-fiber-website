import React from "react";
import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="flex bg-black p-10 flex-row flex-wrap items-center justify-center  text-center">
      <Typography color="gray" className="font-normal">
        &copy; 2024 Nikhil Nagar
      </Typography>
    </footer>
  );
}

export default Footer;
