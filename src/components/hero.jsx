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
        <div className="absolute m-3 top-[25%] md:top-[30%] md:p-10 p-3 bg-black bg-opacity-30 rounded-3xl">
          <div className="text-[#82FF87] md:text-[40px] text-[30px]  font-bold p-2">
            Port to port lambdas with{" "}
            <span className="text-purple-300">
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
          <div className="text-white text-md md:text-lg  p-2">
            Transport capacity while taking care of your optical and financial
            budget with our unified OPGW network.
          </div>
          <div className="flex gap-4 p-2">
            <Button color="green">
              <a href="#contactus">Contact Us</a>
            </Button>
            <Button color="white" className="text-[#82FF87]" variant="outlined">
              Explore More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
