import React from "react";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import Contactus from "../Components/Contactus/Contactus";

const Contact = () => {
  return (
    <>
      <PageHeader heading={"Contact Us"} location={"Home / Contact"} />
      <div className="lg:mt-[510px] mt-[200px]"></div>
      <Contactus />
    </>
  );
};

export default Contact;
