import React from "react";
import TopNav from "./TopNav/TopNav";
import BottomNav from "./BottomNav/BottomNav";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={`relative ${pathname === "/" ? "" : " text-white "} `}>
      <TopNav />
      <div
        className={`${
          pathname === "/" ? "bg-slate-200" : "bg-slate-800"
        } h-[1px] w-full`}
      />
      <BottomNav />
    </header>
  );
};

export default Header;
