import React from "react";
import { Carousel } from "@material-tailwind/react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import cylinder from "../assets/cylinder.svg";
import { Button } from "@material-tailwind/react";
import { ReactTyped } from "react-typed";

function Hero() {
  let slides = [slide1, slide2, slide3];
  return (
    <>
      <div className="relative flex justify-center">
        <Carousel
          className="md:h-screen h-[500px]"
          autoplay
          loop
          nextArrow={(handleInput) => {
            return <div></div>;
          }}
          prevArrow={(handleInput) => {
            return <div></div>;
          }}
          navigation={(handleInput) => {
            return <div></div>;
          }}>
          {slides.map((item, idx) => (
            <img
              key={idx}
              src={item}
              alt="img"
              className="h-full w-full object-cover opacity-90"
            />
          ))}
        </Carousel>
        <div className="absolute m-3 top-[25%] md:top-[30%] p-8 bg-black bg-opacity-50 rounded-3xl">
          <div className="text-white md:text-[40px] text-[30px]">
            Port to port lambdas with{" "}
            <span className="bg-gradient-to-r font-bold cursor-pointer from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
              <ReactTyped
                strings={["Performance", "99.9% QOS", "Bandwidth"]}
                typeSpeed={40}
                backDelay={2000}
                backSpeed={40}
                loop
                showCursor={false}
              />
            </span>
          </div>
          <div className="text-indigo-200 text-md md:text-lg   mb-4">
            Transport capacity while taking care of your optical and financial
            budget with our unified OPGW network.
          </div>
          <div className="flex gap-4 ">
            <Button
              color="green"
              className="bg-gradient-to-r from-blue-700 via-green-600 to-indigo-500">
              <a href="#contactus" className="font-bold">
                Contact Us
              </a>
            </Button>
            <Button color="white" className="text-white" variant="outlined">
              <p className=" font-normal">Explore More</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
