import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 1.5 },
    },
  };

  const textVariants = {
    hidden: { x: -100 },
    visible: {
      x: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        variants={textVariants}
        className="text-4xl font-bold text-primary text-center mb-4"
      >
        CleaningBD Services
      </motion.h1>
      <motion.p variants={textVariants} className="text-lg text-center">
        We make your space shine!
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
