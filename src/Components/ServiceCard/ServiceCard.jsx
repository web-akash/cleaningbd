import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
const ServiceCard = ({ id, image, title, icons, discretion }) => {
  return (
    <motion.div
      className="grid grid-cols-2  gap-2 bg-gray-50 group"
      key={id}
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative after:transition-all after:group-hover:bg-main after:group-hover:bg-opacity-25 after:w-full after:h-full after:absolute ease-linear	 after:top-0 after:left-0 after:content-[''] after:z-40">
        <Link to={`/service/${id}`} className="relative">
          <img
            src={image}
            alt=""
            className="max-h-[200px] h-full w-full object-cover  "
          />
          <div className="absolute ease-linear right-0 bottom-0  w-14 h-14 p-3 bg-main transition-transform group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 ">
            <img src={icons} alt="" />
          </div>
        </Link>
      </div>
      <div className="p-2">
        <h3>
          <Link
            to={`/service/${id}`}
            className="lg:text-[22px] md:text-[20px] text-[19px] font-semibold font-Roboto text-main transition-all hover:text-primary"
          >
            {title}
          </Link>
        </h3>
        <p className="text-[15px] text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
          dolores, illum earum vero aut veritatis.
        </p>
        <div className="mt-3">
          <Link
            to={`/service/${id}`}
            className="text-primary font-semibold flex items-center space-x-2 group transition-all hover:text-black/80"
          >
            <span>Read More</span>{" "}
            <HiOutlineArrowRight className="group-hover:ml-3 transition-all" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
