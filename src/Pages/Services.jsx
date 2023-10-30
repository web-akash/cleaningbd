import React from "react";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import Title from "../Components/Shared/Title/Title";
import { servicesList } from "../Utils/servicesList";
import ServiceCard from "../Components/ServiceCard/ServiceCard";
import Pricing from "../Components/Pricing/Pricing";
import Portfolios from "../Components/Portfolios/Portfolios";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Cleaning BD-Service</title>
        <meta name="description" content="Cleaning Website" />
      </Helmet>
      <PageHeader heading={"Our Services"} location={"Home / Services"} />
      {/* ---------- SErvice Section */}
      <section className="lg:mt-[510px] mt-[200px]">
        <div className="max-w-6xl mx-auto px-3 py-24">
          <Title shortTitle="SERVICE" longTitle="We are dadicated" />
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {servicesList.map(({ id, icons, discretion, image, title }) => (
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
        </div>
      </section>
      {/* ------------ Pricing List */}
      <Pricing isGray={true} />
      {/* ---------- */}
      <Portfolios />
    </>
  );
};

export default Services;
