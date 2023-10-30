import React from "react";

const Button = ({ children }) => {
  return (
    <button className="font-bold uppercase text-base bg-primary text-white px-5 py-2 w-32 h-12 flex justify-center items-center rounded-sm transition-all hover:bg-main">
      {children}
    </button>
  );
};

export default Button;
