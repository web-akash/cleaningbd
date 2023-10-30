import React from "react";

const SelectBox = ({ children }) => {
  return (
    <select
      name=""
      id=""
      className="bg-gray-100 px-3 py-3 w-full outline-none mb-5"
    >
      {children}
    </select>
  );
};

export default SelectBox;
