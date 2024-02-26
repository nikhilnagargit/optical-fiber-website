import React from "react";
import curvesreverse from "../assets/curvesreverse.png";
import Tilt from "react-parallax-tilt";
// import GlobeCanvas from "./canvas/globe";
import guatemala from "../assets/guatemala.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.png";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./motion/motion";

const data = [t1, t2, t3, t4];

function Services() {
  return (
    <div
      className="relative flex flex-col items-center text-white md:my-20 my-10 z-10"
      id="services">
      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-[40px] text-[30px] font-bold z-50  text-purple-300  hover:text-green-300">
        Custom IPODWDM
      </div>
      <div className="md:text-lg text-sm text-indigo-200 px-5 md:px-28 text-center">
        Whole country coverd, Optical highway over high voltage. We simplify
        everything so you can use the same Lambda with multiple OPGW providers.
      </div>
      <div className="flex md:flex-row flex-col md:mx-20 md:my-20 mx-5 my-5 gap-10">
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 z-20">
          {data.map((item, idx) => (
            <Tilt
              className="bg-gradient-to-bl from-blue-600 via-indigo-400 to-green-400  p-[1px]"
              perspective={500}
              glareEnable={true}
              glareMaxOpacity={0.45}
              scale={1.02}
              key={idx}>
              <img src={item} alt="" className="w-full h-full" />
            </Tilt>
          ))}
        </div>
        <div className="flex-1 md:text-lg text-sm text-indigo-100 font-sans text-justify">
          Nuestro servicio WAVELENGTH le facilita a nuestros clientes mover
          cargas pesadas de trafico con alto rendimiento (throughput), a traves
          de entornos metro, metro DCI (Data Center Interconnection), Regional.
          Larga o Ultra Larga Distancia (Long Haul y ULH) y en enlaces
          submarinos. mediante el use de tecnologia DWDM, usando multiples ondas
          de Luz coloreadas (colored waves) sobre la misma fibra optica usan
          doel medio de transmision eficientemente."
          <br />
          <br />
          <Button color="white" className="text-white" variant="outlined">
            <p className="font-normal">Explore More {">>"}</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;
