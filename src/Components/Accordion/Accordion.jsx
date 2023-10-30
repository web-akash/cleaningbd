import React, { useState } from "react";
import "./accordion.css";
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white px-2  mb-5  ">
      <div
        className="flex justify-between items-center py-5  cursor-pointer   "
        onClick={toggleAccordion}
      >
        <h3 className="sm:text-lg text-base text-primary/70 font-bold">
          {title}
        </h3>
        <div>
          {isOpen ? (
            <HiOutlineMinusCircle className="text-secondary text-2xl" />
          ) : (
            <HiOutlinePlusCircle className="text-secondary text-2xl" />
          )}
        </div>
      </div>

      <div
        className={` dark:text-[#9193a8] text-base   ${
          isOpen
            ? "pt-[10px] pb-[30px] h-full visible transition-all"
            : "h-0 invisible  transition-all"
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
