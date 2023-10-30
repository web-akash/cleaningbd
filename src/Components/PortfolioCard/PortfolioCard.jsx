import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const PortfolioCard = ({ title, image, isLarge, id }) => {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    controls.start({ opacity: 1, translateY: 0 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    controls.start({ opacity: 0, translateY: "100%" });
  };

  return (
    <motion.div
      className={`w-full relative group overflow-hidden h-full ${isLarge}`}
      initial={{ opacity: 0, translateY: "100%" }}
      whileInView={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Link to={`/service/${id}`}>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.img
            src={image}
            alt=""
            className="w-full h-[250px] object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            animate={controls}
            className={`${
              hovered ? "visible" : "invisible"
            } fixed top-0 left-0 w-full h-full flex justify-center items-center text-center bg-main bg-opacity-[0.4] text-white p-5`}
          >
            <h3 className="text-xl font-Roboto font-semibold">{title}</h3>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioCard;
