import React from "react";
import { Carousel } from "@material-tailwind/react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import cylinder from "../assets/cylinder.svg";

const Carousel = () => {
  let slides = [slide1, slide2, slide3];
  return (
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
  );
};

export default Carousel;
