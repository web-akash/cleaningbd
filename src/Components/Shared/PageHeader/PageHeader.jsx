import React from "react";
import { motion } from "framer-motion";
const PageHeader = ({ heading, location }) => {
  return (
    <section className=" bg-main w-full absolute -z-10 top-0 lg:pt-[300px] lg:pb-[220px] pt-32 pb-10 overflow-hidden  ">
      <div className="grid lg:grid-cols-2 w-full lg:max-w-6xl mx-auto px-3">
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold font-Roboto lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white ">
            {heading}
          </h1>
          <p className=" mt-3 text-lg text-gray-400">{location}</p>
        </motion.div>
        <div className="hidden lg:block absolute z-50 -top-[65px] -right-[85px] h-[700px] w-[700px] rounded-full rounded-tr-none overflow-hidden after:contents-[''] after:top-0 after:right-0 after:absolute after:w-full after:h-full after:bg-header-linear ">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-[700px] h-[700px] object-cover rounded-full rounded-tr-none "
          />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
