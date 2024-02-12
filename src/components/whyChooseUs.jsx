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
    <div
      id="whyus"
      className="relative flex flex-col items-center justify-center text-white mt-20 w-full md:h-screen">
      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text md:text-[40px] text-[30px] font-bold  text-purple-300  hover:text-green-300">
        Why Us
      </div>
      <div className="z-20  md:text-lg text-sm text-indigo-200 px-4 text-center">
        Optical highway over high voltage. We simplify everything so you can use
        the same Lambda with multiple OPGW providers.
      </div>

      <div className="z-20 grid grid-cols-1 md:p-8 p-2 md:gap-3 gap-1 rounded-2xl bg-black bg-opacity-30 md:bg-opacity-50">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="md:text-lg text-sm text-green-300 rounded-md p-1 flex  items-center gap-3">
            <item.icon
              className={`text-${item.color}-500 border border-white-300 rounded-full p-1 text-3xl`}
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
