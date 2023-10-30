import React from "react";
import { Link } from "react-router-dom";

import map from "../../../assets/icons/map.png";
import call from "../../../assets/icons/telephone.png";
import email from "../../../assets/icons/mail.png";

const Footer = () => {
  return (
    <footer className="bg-[#051135]">
      <div className="max-w-6xl mx-auto w-full px-3 ">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" py-8 lg:order-last lg:py-16 lg:ps-16">
            <div className=" space-y-4 lg:mt-0">
              <div>
                <h1>
                  <Link
                    to={""}
                    className="text-2xl font-bold flex items-center text-white"
                  >
                    <span> Cleaning</span>
                    <span className="text-primary text-4xl">BD</span>
                  </Link>
                </h1>
                <p className="mt-4 max-w-lg text-gray-50 text-[15px] leading-6 tracking-wide">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, harum deserunt nesciunt praesentium, repellendus
                  eum perspiciatis ratione pariatur a aperiam eius numquam
                  doloribus asperiores sunt.
                </p>
              </div>
              <ul>
                <li>
                  <Link to={""}></Link>
                </li>
              </ul>

              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="rounded-md border border-gray-100 p-2  sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none   sm:text-sm outline-none bg-transparent text-white"
                  />

                  <button className="mt-1 w-full rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all hover:scale-105 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className=" grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-lg text-gray-50">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Home Cleaning
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Office Cleaning
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Toilet Cleaning
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Window Cleaning
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Kitchen Cleaning
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-lg text-gray-50">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Meet the Team
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="#"
                      className="text-gray-400 transition hover:opacity-75"
                    >
                      Accounts Review
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-lg text-gray-50">
                  Office Info
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start space-x-3">
                    <img src={map} alt="" className="w-4 mt-1" />
                    <p className="text-gray-400">
                      Mohammadpur
                      <br />
                      Bangladesh
                    </p>
                  </li>

                  <li className="flex items-start space-x-3">
                    <img src={email} alt="" className="w-4 mt-1" />
                    <a
                      href="mailto:dev.mhakash@gmail.com"
                      className="text-gray-400"
                    >
                      dev.mhakash@gamil.com
                    </a>
                  </li>

                  <li className="flex items-start space-x-3">
                    <img src={call} alt="" className="w-4 mt-1" />
                    <a href="tel:01608371608" className="text-gray-400">
                      01608371608
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#15265B] mt-12 h-16 flex justify-center items-center">
        <p className=" text-[15px] text-gray-50">
          &copy; 2023. All rights reserved.{" "}
          <Link
            to="https://fiverr.com/akash_coder"
            target="blank"
            className="font-bold text-primary"
          >
            www.fiverr.com/akash_coder
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
