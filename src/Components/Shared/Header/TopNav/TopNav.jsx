import React from "react";

import emailIcon from "../../../../assets/icons/mail.png";
import mapIcon from "../../../../assets/icons/map.png";
import phoneIcon from "../../../../assets/icons/telephone.png";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 hidden lg:flex justify-between items-center py-3">
      <h1>
        <Link to={""} className="text-2xl font-bold flex items-center">
          <span> Cleaning</span>
          <span className="text-primary text-4xl">BD</span>
        </Link>
      </h1>
      <div>
        <ul className="flex justify-between space-x-12">
          <li className="flex items-center space-x-2 cursor-pointer">
            <img src={emailIcon} alt="" />

            <div>
              <a href="mailto:dev.mhakash@gmail.com">dev.mhakash@gmail.com</a>
              <b className="font-semibold   block leading-none">Mail to us</b>
            </div>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <img src={phoneIcon} alt="" />
            <div>
              <a href="tel:01608371608">+88 01608371608</a>
              <b className="font-semibold   block leading-none">Call to us</b>
            </div>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <img src={mapIcon} alt="" />
            <div>
              <small className="">Mohammadpur</small>
              <b className="font-semibold   block leading-none">Bangladesh</b>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
