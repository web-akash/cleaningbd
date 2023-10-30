import React from "react";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import Pricing from "../Components/Pricing/Pricing";
import Accordion from "../Components/Accordion/Accordion";
import Title from "../Components/Shared/Title/Title";
import { Helmet } from "react-helmet";

const Prices = () => {
  return (
    <>
      <Helmet>
        <title>Cleaning BD-Price</title>
        <meta name="description" content="Cleaning Website" />
      </Helmet>
      <PageHeader heading={"Pricing"} location={"Home / Price"} />
      <div className="lg:mt-[510px] mt-[200px]"></div>
      <Pricing isGray={false} />

      {/* --------------- Faq Section */}
      <section className="bg-gray-100 mt-14">
        <div className="max-w-6xl mx-auto px-3 py-24">
          <Title shortTitle={"FQA"} longTitle={"We are offering the best"} />
          <div className="grid md:grid-cols-2 md:gap-5 gap-0 pt-8">
            <div>
              <Accordion
                title={"What should I include in my personal statement?"}
              >
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear
              </Accordion>
              <Accordion
                title={"Will membership plans be charged automatically?"}
              >
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear
              </Accordion>
              <Accordion title={"How can I make a change to my application?"}>
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear
              </Accordion>
            </div>
            <div>
              <Accordion title={"Where can I find out about funding?"}>
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear
              </Accordion>
              <Accordion
                title={"What will happen when I’ve sent my application?"}
              >
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear
              </Accordion>
              <Accordion title={"Can I get a free trial before I purchase?"}>
                Ahen an unknown printer took a galley of type and scrambled it
                to make a type specimen book areIt hasear
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
