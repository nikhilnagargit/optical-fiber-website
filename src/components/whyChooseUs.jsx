import React from "react";
import NightCityCanvas from "./canvas/nighcity";
import {
  RiInstallLine,
  RiCompass3Line,
  RiWaterFlashLine,
  RiCalendarCheckLine,
  RiExchangeDollarLine,
  RiAiGenerate,
} from "react-icons/ri";

const data = [
  {
    text: "Installed 50 meters above the ground",
    color: "green",
    icon: RiInstallLine,
  },
  { text: "17 db/km average loss", color: "red", icon: RiWaterFlashLine },
  {
    text: "400 km coverage with 99.99% QoS",
    color: "blue",
    icon: RiCompass3Line,
  },
  {
    text: "Centralized PLEX and PLIN management",
    color: "purple",
    icon: RiCalendarCheckLine,
  },
  { text: "Best quality fiber optics", color: "indigo", icon: RiAiGenerate },
  {
    text: "Savings in Maintenance and OpEx",
    color: "yellow",
    icon: RiExchangeDollarLine,
  },
];
function WhyChooseUsSection() {
  return (
    <div className="relative flex flex-col items-center text-white md:py-10 md:px-10 p-3 w-full md:h-screen">
      <div className="md:text-[40px] text-[35px] font-bold z-20 md:pb-24  py-5 text-purple-300  hover:text-green-300">
        Why Us
      </div>
      {/* <div className="text-lg pb-10 z-20">
        Optical highway over high voltage. We simplify everything so you can use
        the same Lambda with multiple OPGW providers.
      </div> */}
      <div className="z-20 grid md:grid-cols-2 grid-cols-1 md:gap-3 gap-1">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="md:text-lg text-sm text-green-300 bg-black bg-opacity-40 rounded-md p-1 flex  items-center gap-3">
            <item.icon
              className={`text-${item.color}-500 md:border-2 border border-white-300 rounded-full p-1 text-3xl`}
            />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="absolute w-full h-full">
        <NightCityCanvas />
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
