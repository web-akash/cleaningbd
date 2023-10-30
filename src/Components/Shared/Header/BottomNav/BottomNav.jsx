import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import Menus from "../Menus/Menus";
import ModalWapper from "../../../ModalWapper/ModalWapper";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const { pathname } = useLocation();
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleMenuShow = () => {
    setIsMenuShow(true);
  };
  const handleMenuHide = () => {
    setIsMenuShow(false);
  };

  function openModal() {
    setModalIsOpen(true);
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-3 flex justify-between items-center py-3 lg:py-0  ">
        <div className="lg:hidden block">
          <h1>
            <Link to={""} className="text-2xl font-bold flex items-center">
              <span> Weepoka</span>
              <span className="text-primary text-4xl">24</span>
            </Link>
          </h1>
        </div>
        <nav className={`lg:block hidden `}>
          <Menus handleMenuHide={handleMenuHide} />
        </nav>
        {/* ------- Menu for small divices */}
        <nav
          className={`lg:hidden block fixed z-50  ${
            isMenuShow ? "right-0" : "-right-full"
          } transition-all top-0 min-w-[300px] h-full  bg-gray-200 text-black`}
        >
          <Menus handleMenuHide={handleMenuHide} />
        </nav>
        <div className="flex items-center space-x-5">
          <button
            className="border-b-[5px] border-b-primary font-semibold transition-all hover:border-b-main"
            onClick={openModal}
          >
            Book Service
          </button>
          <div className="lg:hidden block" onClick={handleMenuShow}>
            <FaBars className="text-2xl" />
          </div>
        </div>
      </div>
      <ModalWapper modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};

export default BottomNav;
