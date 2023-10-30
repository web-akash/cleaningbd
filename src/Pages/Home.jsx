import React from "react";
import Banner from "../Components/Banner/Banner";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Button from "../Components/Shared/Button/Button";
import About from "../Components/About/About";
import Portfolios from "../Components/Portfolios/Portfolios";
import CounterUp from "../Components/CounterUp/CounterUp";
import { servicesList } from "../Utils/servicesList";
import ServiceCard from "../Components/ServiceCard/ServiceCard";
import { SampleNextArrow, SamplePrevArrow } from "../Utils/sliderArrows";
import Title from "../Components/Shared/Title/Title";
import Slider from "react-slick";
import { reviewList } from "../Utils/reviewList";
import TestimonialCard from "../Components/TestimonialCard/TestimonialCard";
const Home = () => {
  let settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    verticalSwiping: true,
    swipeToSlide: true,
    dots: false,
    nextArrow: <SampleNextArrow centerArrow={false} />,
    prevArrow: <SamplePrevArrow centerArrow={false} />,
  };
  return (
    <>
      <Helmet>
        <title>CleaningBD-Home</title>
        <meta name="description" content="Cleaning Website" />
      </Helmet>
      <Banner />
      <About />
      <CounterUp />
      {/* ----------- Services */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-3 py-24">
          <Title shortTitle="SERVICE" longTitle="We are dadicated" />
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {servicesList
              .slice(0, 4)
              .map(({ id, icons, discretion, image, title }) => (
                <ServiceCard
                  key={id}
                  id={id}
                  icons={icons}
                  image={image}
                  title={title}
                  discretion={discretion}
                />
              ))}
          </div>
          <div className="mt-9 flex justify-center w-full">
            <Link to={"/services"}>
              <Button>VIEW ALL</Button>
            </Link>
          </div>
        </div>
      </section>
      <Portfolios />
      {/* ---------- Testimonial */}
      <section className="testimonial">
        <div className="max-w-4xl mx-auto w-full px-3 py-24">
          <Slider {...settings}>
            {reviewList.map(({ id, image, name, review }) => (
              <TestimonialCard
                key={id}
                name={name}
                image={image}
                review={review}
              />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
