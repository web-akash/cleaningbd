import React from "react";
import Title from "../Shared/Title/Title";
import { pricingList } from "../../Utils/pricingList";
import PriceCard from "../PricingCard/PricingCard.jsx";

const Pricing = ({ isGray }) => {
  return (
    <section className={`${isGray ? "bg-gray-100" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-3 py-24">
        <Title shortTitle="PRICING" longTitle="We are dadicated" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-8">
          {pricingList.map(({ id, features, plan, price }) => (
            <PriceCard key={id} features={features} plan={plan} price={price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
