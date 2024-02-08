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

function WhyChooseUsSection() {
  return (
    <div className="relative flex flex-col items-center text-white py-20 px-10">
      <div className="text-[40px] font-bold z-20 text-purple-300 tracking-widest py-20 hover:text-green-300">
        Why Choose Us
      </div>

      <div className="z-20 grid grid-cols-2 gap-3">
        <div className="text-lg text-green-300 bg-black bg-opacity-40 rounded-md p-1 flex  items-center gap-3">
          <RiInstallLine className="text-green-500 border-2 border-white-300 rounded-full p-1 text-4xl" />
          <p>Installed 50 meters above the ground</p>
        </div>
        <div className="text-lg text-green-300 bg-black bg-opacity-40 rounded-md p-1 flex  items-center gap-3">
          <RiWaterFlashLine className="text-red-300 border-2 border-white-300 rounded-full p-1 text-4xl" />
          <p>17 db/km average loss</p>
        </div>
        <div className="text-lg text-green-300 bg-black bg-opacity-40 rounded-md p-1 flex  items-center gap-3">
          <RiCompass3Line className="text-blue-300 border-2 border-white-300 rounded-full p-1 text-4xl" />
          <p> 400 km coverage with 99.99% QoS</p>
        </div>
        <div className="text-lg text-green-300 bg-black bg-opacity-40 rounded-md p-1 flex  items-center gap-3">
          <RiCalendarCheckLine className="text-purple-300 border-2 border-white-300 rounded-full p-1 text-4xl" />
          <p>Centralized PLEX and PLIN management</p>
        </div>
        <div className="text-lg text-green-300 bg-black bg-opacity-40 rounded-md p-1 flex  items-center gap-3">
          <RiExchangeDollarLine className="text-yellow-300 border-2 border-white-300 rounded-full p-1 text-4xl" />
          <p> Savings in Maintenance and OpEx</p>
        </div>
        <div className="text-lg text-green-300 bg-black bg-opacity-40 rounded-md p-1 flex  items-center gap-3">
          <RiAiGenerate className="text-indigo-300 border-2 border-white-300 rounded-full p-1 text-4xl" />
          <p> Best quality fiber optics</p>
        </div>
      </div>
      <div className="absolute w-full h-screen">
        <NightCityCanvas />
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
