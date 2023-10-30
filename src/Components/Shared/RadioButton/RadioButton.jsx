import React from "react";

const RadioButton = ({ id, name }) => {
  return (
    <div>
      <input
        id={name}
        type="radio"
        value=""
        name="default-radio"
        className=" hidden "
      />
      <label
        for={name}
        className="flex cursor-pointer py-3 bg-gray-200 justify-center items-center  w-full   font-medium text-gray-900 "
      >
        {name}
      </label>
    </div>
  );
};

export default RadioButton;
