import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import bg1 from "../../assets/images/bg-1.avif";
import bg2 from "../../assets/images/bg-2.jpg";
import bg3 from "../../assets/images/bg-3.jpg";

const Banner = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
  };

  return (
    <section>
      <Slider {...settings}>
        <SliderItem heading={`Cleaning BD A Cleaning Compnay`} image={bg1} />
        <SliderItem heading={`Cleaning BD Have A Strong Team`} image={bg2} />
        <SliderItem heading={`Cleaning BD Have A Website`} image={bg3} />
      </Slider>
    </section>
  );
};

export default Banner;

const SliderItem = ({ heading, discretion, image }) => {
  const headingArray = heading.split(" ");
  const para = headingArray.map((part, index) => {
    return (
      <>
        {" "}
        <span
          key={index}
          className={`${index === 1 && "text-primary inline-block -ml-2 "}`}
        >
          {part}
        </span>
      </>
    );
  });

  return (
    <div className="bg-gray-200 lg:h-[calc(100vh-130px)] h-[calc(100vh-30px)]  relative">
      <motion.div
        className="max-w-6xl h-full flex items-center mx-auto px-3"
        initial={{ opacity: 0, translateY: 100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl absolute z-10 px-2 py-2 bg-gray-200 bg-opacity-50">
          <h5 className="font-semibold text-lg">Our Progression</h5>
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-medium mt-3 font-Roboto text-black">
            {para}
          </h1>
          <p className="mt-4 md:text-[17px] text-base tracking-widest">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            vel possimus adipisci fugiat quibusdam veniam eveniet nemo itaque
            officia et.
          </p>
        </div>
      </motion.div>
      {/* left side end  */}
      <motion.div
        className="absolute  right-0 top-0 h-full  lg:w-[600px] md:w-[480px] sm:w-[360px] w-[270px] "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={image} alt="bg" className="w-full h-full  object-cover" />
      </motion.div>
    </div>
  );
};
