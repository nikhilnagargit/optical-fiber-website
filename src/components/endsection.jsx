import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import opticalfiber from "../assets/opticalfiber.png";
import NightCityCanvas from "./canvas/nighcity";

function EndSection() {
  return (
    <div
      id="contactus"
      className="relative flex md:mt-20 flex-col items-center text-white px-5  bg-black">
      <div className="absolute w-full h-full">
        <NightCityCanvas />
      </div>
      <div className="md:w-[20%] w-[30%] opacity-60 absolute left-0 top-[20%]">
        <img src={opticalfiber} alt="bg" />
      </div>
      <div className="md:w-[20%] w-[30%] opacity-50 transform rotate-180 absolute right-0 top-10">
        <img src={opticalfiber} alt="bg" />
      </div>
      <div className=" capitalize bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text md:text-[40px] text-[30px] text-center font-bold z-30   hover:text-indigo-200">
        Unlimited reliablity on your fingertips
      </div>
      <div className="md:text-lg text-sm text-indigo-200 px-4 md:pb-10 pb-5 text-center z-30">
        The perfect network for capacity. It starts today
      </div>
      <div className="bg-gradient-to-bl from-blue-600 via-indigo-400 to-green-400 z-30 p-[1px] rounded-xl opacity-85">
        <Card color="transparent" className=" md:p-8 p-5 z-30 bg-[#060016]">
          <Typography variant="h5" color="white">
            <p>Get In Touch</p>
          </Typography>

          <form className="mt-8 mb-2 w-80">
            <div className="mb-1 flex flex-col gap-4">
              <Typography color="white" className="-mb-4">
                Name
              </Typography>
              <Input
                className=" !border-t-blue-gray-200 focus:border-white text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography color="white" className="-mb-4">
                Email
              </Typography>
              <Input
                placeholder="your mail"
                className=" !border-t-blue-gray-200 focus:border-white text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography color="white" className="-mb-4">
                Comment
              </Typography>
              <Input
                placeholder="your comments"
                className=" !border-t-blue-gray-200 focus:border-white text-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <Button
              className="mt-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-indigo-900 text-sm tracking-wider"
              color="indigo"
              fullWidth>
              <p>Submit</p>
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default EndSection;
