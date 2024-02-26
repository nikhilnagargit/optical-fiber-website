import React from "react";
import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="flex bg-[#060016] p-10 flex-row flex-wrap items-center justify-center  text-center">
      <Typography color="gray" className="font-normal">
        &copy; 2024 NN
      </Typography>
    </footer>
  );
}

export default Footer;
