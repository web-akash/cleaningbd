import React from "react";

const Title = ({ shortTitle, longTitle }) => {
  return (
    <div className="relative mb-9">
      <div>
        <h1 className="absolute md:-top-9 -top-5 lg:text-7xl md:text-6xl text-5xl  font-Roboto font-bold text-slate-200 ">
          {shortTitle}
        </h1>
        <b className="absolute  text-primary  inline-block text-2xl font-Roboto">
          {longTitle}
        </b>
      </div>
    </div>
  );
};

export default Title;
