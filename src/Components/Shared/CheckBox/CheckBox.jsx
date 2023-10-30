import React from "react";

const CheckBox = ({ id, name }) => {
  return (
    <div>
      <input id={id} type="checkbox" value="" name="" className=" hidden " />
      <label
        for={id}
        className="flex cursor-pointer py-3 bg-gray-200 justify-center items-center  w-full   font-medium text-gray-900 "
      >
        {name}
      </label>
    </div>
  );
};

export default CheckBox;
