import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import opticalfiber from "../assets/opticalfiber.png";

function EndSection() {
  return (
    <div className="relative flex md:mt-10 flex-col items-center text-white px-5 bg-black">
      <div className="md:py-20 md:text-[40px] text-[15px] font-bold z-20 md:pb-4  py-5 text-green-300  hover:text-purple-300">
        UNLIMITED RELIABILITY AT YOUR FINGERTIPS
      </div>
      <div className="md:text-lg text-sm px-4 pb-10 text-center z-30">
        The perfect network for capacity. It starts today
      </div>
      <Card
        color="transparent"
        className="border opacity-90 md:p-8 p-5 border-green-300 z-30 bg-blue-700 bg-opacity-10 ">
        <Typography variant="h5" color="white">
          Get In Touch
        </Typography>

        <form className="mt-8 mb-2 w-80">
          <div className="mb-1 flex flex-col gap-4">
            <Typography color="light-green" className="-mb-4">
              Name
            </Typography>
            <Input
              placeholder="your name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography color="light-green" className="-mb-4">
              Email
            </Typography>
            <Input
              placeholder="your mail"
              className=" !border-t-blue-gray-200 focus:border-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography color="light-green" className="-mb-4">
              Comment
            </Typography>
            <Input
              placeholder="your comments"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" color="purple" fullWidth>
            Submit
          </Button>
        </form>
      </Card>
      <div className="absolute top-[150px] left-0 w-[30%] opacity-60">
        <img src={opticalfiber} alt="bg" />
      </div>
      <div className="absolute right-0 w-[20%] top-[50%] transform rotate-180 opacity-70">
        <img src={opticalfiber} alt="bg" />
      </div>
    </div>
  );
}

export default EndSection;
