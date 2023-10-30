import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";
import Footer from "../../Components/Shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
