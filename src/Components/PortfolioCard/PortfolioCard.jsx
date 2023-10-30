import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PortfolioCard = ({ title, image, isLarge, id }) => {
  return (
    <motion.div
      className={`w-full relative group overflow-hidden h-full ${isLarge}`}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Link to={`/service/${id}`}>
        <div>
          <img
            src={image}
            alt=""
            className="w-full h-[250px] object-cover group-hover:scale-105 transition-all "
          />
        </div>
        <div className="group-hover:visible invisible transition absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full text-center flex justify-center items-center bg-main bg-opacity-25 text-white p-5 ">
          <h3 className="text-xl font-Roboto font-semibold">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
