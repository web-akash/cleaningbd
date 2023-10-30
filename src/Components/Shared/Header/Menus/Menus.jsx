import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Menus = ({ handleMenuHide }) => {
  const { pathname } = useLocation();
  return (
    <div>
      {/* --------- Close icon */}
      <div
        className="lg:hidden block absolute right-[12px] top-[12px] py-2"
        onClick={handleMenuHide}
      >
        <FaTimes className="text-2xl cursor-pointer" />
      </div>
      {/* -----------Menus */}
      <ul className="flex flex-col lg:flex-row lg:items-center items-start lg:space-x-12 space-x-0 p-5 lg:p-0 leading-[50px] lg:leading-none mt-6 lg:mt-0">
        <li onClick={handleMenuHide}>
          <Link
            to={"/"}
            className={`font-semibold text-lg hover:text-primary transition-all py-5 inline-block ${
              pathname === "/" && "text-primary"
            } `}
          >
            Home
          </Link>
        </li>
        <li onClick={handleMenuHide}>
          <Link
            to={"/services"}
            className={`font-semibold text-lg hover:text-primary transition-all py-5 inline-block ${
              pathname === "/services" && "text-primary"
            } `}
          >
            <span>Services</span>
          </Link>
        </li>
        <li onClick={handleMenuHide}>
          <Link
            to={"/pricing"}
            className={`font-semibold text-lg hover:text-primary transition-all py-5 inline-block ${
              pathname === "/pricing" && "text-primary"
            } `}
          >
            Price
          </Link>
        </li>
        <li onClick={handleMenuHide}>
          <Link
            to={"/contact"}
            className={`font-semibold text-lg hover:text-primary transition-all py-5 inline-block ${
              pathname === "/contact" && "text-primary"
            }`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
