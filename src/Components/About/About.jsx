import React from "react";

import mop from "../../assets/icons/mop.png";
import groceries from "../../assets/icons/groceries.png";
import Title from "../Shared/Title/Title";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto w-full px-3 py-24 mt-20 relative">
        <div className="grid md:grid-cols-[40%_auto] gap-6">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative max-w-md w-full mx-auto mt-10 md:mt-0 order-1 md:order-0"
          >
            <img
              src="https://images.pexels.com/photos/6197122/pexels-photo-6197122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="max-h-[530px] w-full max-w-md mx-auto object-cover"
            />
            <div className="absolute top-0 left-0 bg-gray-50 w-40 h-32  p-3 text-center  rounded-br-md">
              <div className="bg-primary w-full h-full p-2 rounded-md">
                <h2 className="font-Roboto text-4xl font-bold text-white">
                  12
                </h2>
                <p className="font-semibold text-white">Year's Experience</p>
              </div>
            </div>
          </motion.div>
          <div className=" order-0 md:order-1">
            <Title longTitle={"Why Choose us"} shortTitle={"ABOUT"} />
            <motion.div
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-12 "
            >
              <p className="font-medium text-black/70 sm:text-[17px] text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                minima sunt quisquam commodi voluptas dolore omnis saepe
                doloribus facilis. Sed libero dolorem blanditiis, possimus ex
                deserunt nobis labore repellendus corporis?
              </p>
              <div className="sm:flex justify-between mt-4">
                <div className="flex items-stretch space-x-5 max-w-[280px]">
                  <div className="bg-primary rounded-md sm:w-16 w-14 sm:h-14 h-12 flex justify-center items-center">
                    <img src={groceries} alt="" className="sm:w-10 w-8" />
                  </div>
                  <h5 className="font-bold sm:text-[20px] text-[17px] font-Roboto">
                    High Quality Cleaning
                  </h5>
                </div>
                <div className="flex items-stretch space-x-5 max-w-[280px] mt-5 sm:mt-0">
                  <div className="bg-primary rounded-md sm:w-16 w-14 sm:h-14 h-12 flex justify-center items-center">
                    <img src={mop} alt="" className="sm:w-10 w-8" />
                  </div>
                  <h5 className="font-bold sm:text-[20px] text-[17px] font-Roboto">
                    Expert Cleaner Team
                  </h5>
                </div>
              </div>
              <p className="mt-5 font-medium text-black/70 sm:text-[17px] text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                minima sunt quisquam commodi voluptas dolore omnis saepe
                doloribus facilis. Sed libero dolorem blanditiis, possimus ex
                deserunt nobis labore repellendus corporis?
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
