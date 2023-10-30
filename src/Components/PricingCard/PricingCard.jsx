import React from "react";
import { HiOutlineCheck } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PriceCard = ({ features, price, plan }) => {
  return (
    <motion.div
      className={`px-8 py-10  bg-gray-50`}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div>
        <h4 className="text-secondary text-xl font-semibold">{plan}</h4>
        <small className="text-sm text-[#9193a8] font-medium  inline-block">
          When you need just one site.
        </small>
      </div>

      <div className={` mt-4 `}>
        <h1 className="text-3xl text-secondary font-bold font-Roboto">
          ${price}
          <sub className="text-sm text-[#9193a8] font-medium ">/per month</sub>
        </h1>
      </div>
      <div className="mt-10">
        <Link className="w-full flex justify-center items-center rounded-sm h-[48px] bg-main text-white">
          Choose {plan}
        </Link>
      </div>
      {/* ---------- Top Featur */}
      <div className="mt-8">
        <h4 className="text-secondary text-lg font-semibold ">Features</h4>
        {features.map(({ featureName, available }, index) => {
          return (
            <div key={index} className="flex items-center leading-10 space-x-3">
              <p className="w-4 h-4 rounded-full bg-main/10 flex justify-center items-center ">
                {available ? (
                  <HiOutlineCheck className="text-primary" />
                ) : (
                  <AiOutlineClose className="text-red-600" />
                )}
              </p>
              <p>{featureName}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default PriceCard;
