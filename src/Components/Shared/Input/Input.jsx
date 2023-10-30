import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-gray-100 px-3 py-3 w-full outline-none "
    />
  );
};

export default Input;
