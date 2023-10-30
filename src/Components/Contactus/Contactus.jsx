import React, { useRef } from "react";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import Title from "../Shared/Title/Title";
import Button from "../Shared/Button/Button";
import { motion } from "framer-motion";

const Contactus = () => {
  const form = useRef();

  const handleContactInfoSubmit = (e) => {
    e.preventDefault();

    const names = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
  };

  return (
    <section className="max-w-6xl mx-auto px-3 py-28 ">
      <Title shortTitle={"CONTACT"} longTitle={"Have you any problem"} />
      <div className="mt-4 md:flex md:space-x-5 space-x-0 pt-14">
        <motion.div
          className="space-y-3  md:w-[40%]"
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className=" flex  items-center space-x-4 min-h-[100px] group">
            <div className="group-hover:scale-90 duration-700 w-[55px] h-[55px] rounded-full bg-primary/75 flex justify-center items-center">
              <TfiLocationPin className="text-white text-2xl" />
            </div>
            <div>
              <h4 className="font-bold font-Roboto text-xl text-main">
                Office Address
              </h4>
              <p className=" text-secondary font-medium text-[15px]">
                Mohammadpur, Bangladesh
              </p>
            </div>
          </div>
          <div className="  flex  items-center space-x-4 min-h-[100px] group">
            <div className="group-hover:scale-90 duration-700 w-[55px] h-[55px] rounded-full bg-primary/75 flex justify-center items-center">
              <TfiEmail className="text-white text-2xl" />
            </div>
            <div>
              <h4 className="font-bold font-Roboto text-xl text-main">
                Mail for information
              </h4>
              <a
                href="mailto:dev.mhakash@gmail.com"
                className=" text-secondary"
              >
                dev.mhaksh@gmail.com
              </a>
            </div>
          </div>

          <div className="  flex  items-center space-x-4 min-h-[100px] group">
            <div className="group-hover:scale-90 duration-700 w-[55px] h-[55px] rounded-full bg-primary/75 flex justify-center items-center">
              <FiPhone className="text-white text-2xl" />
            </div>
            <div>
              <h4 className="font-bold font-Roboto text-xl text-main">
                Call for help
              </h4>
              <a href="tel:01608371608" className=" text-secondary">
                +88 01608371608
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-0 md:w-[60%]"
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={handleContactInfoSubmit}>
            <div className="flex sm:flex-row flex-col justify-between gap-x-7 gap-y-5">
              <div className="sm:w-1/2">
                <label htmlFor="name" className="text-secondary">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="border bg-gray-50 text-secondary  rounded-sm px-4 py-2 outline-none w-full"
                />
              </div>
              <div className="sm:w-1/2">
                <label htmlFor="email" className="text-secondary">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="border bg-gray-50 text-secondary rounded-sm px-4 py-2 outline-none focus:outline-none w-full "
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-secondary">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                id="message"
                className="border bg-gray-50 text-secondary rounded-sm px-4 py-2 outline-none w-full min-h-[170px]"
              ></textarea>
            </div>
            <div className="mt-5">
              <Button>Contact</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contactus;
