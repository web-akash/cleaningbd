import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Title from "../Shared/Title/Title";
import { servicesList } from "../../Utils/servicesList";

const Portfolios = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto  py-24 px-3">
        <Title shortTitle="PORTFOLIO" longTitle="Our Recent Projects" />
        <div className="gallery pt-8">
          {servicesList.map(({ id, discretion, image, title, isLarge }) => (
            <PortfolioCard
              key={id}
              id={id}
              image={image}
              title={title}
              discretion={discretion}
              isLarge={isLarge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
