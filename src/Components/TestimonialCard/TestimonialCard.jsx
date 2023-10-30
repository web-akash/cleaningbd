import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const TestimonialCard = ({ name, review, image }) => {
  return (
    <div className="flex md:flex-row flex-col justify-between  items-center md:space-x-4 space-x-0">
      <div className="bg-white/10 max-w-2xl text-white p-5 rounded-md relative w-full sm:min-h-[270px] min-h-[330px]">
        <BiSolidQuoteAltLeft className="text-7xl absolute text-black " />
        <div className="absolute">
          <i className="sm:text-lg text-base  ">{review}</i>
          <div className="mt-6 ">
            <b className="sm:text-xl text-lg">{name}</b>
            <br />
          </div>
        </div>
      </div>
      <div className="md:w-[160px] md:h-[290px] h-[140px] w-[140px] mt-5 md:mt-0">
        <img
          src={image}
          alt=""
          className="md:rounded-[150px] rounded-full w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
