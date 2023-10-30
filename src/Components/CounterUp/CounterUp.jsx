import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUp = () => {
  const [counterOn, setCounterOn] = useState(false);
  const counterData = [
    {
      id: 1,
      counter: <CountUp start={0} end={800} duration={2} delay={0}></CountUp>,
      title: "Projects Finished",
    },
    {
      id: 2,
      counter: <CountUp start={0} end={12} duration={2} delay={0}></CountUp>,
      title: "Years of Experience",
    },
    {
      id: 3,
      counter: <CountUp start={0} end={500} duration={2} delay={0}></CountUp>,
      title: "Happy Clients",
    },
    {
      id: 4,
      counter: <CountUp start={0} end={10} duration={2} delay={0}></CountUp>,
      title: "Recognition",
    },
  ];
  return (
    <section>
      <div className="max-w-6xl mx-auto px-3 py-24">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5  ">
          {counterData.map((item, index) => (
            <div key={index}>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && (
                  <div className="text-center">
                    <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold text-primary">
                      {item.counter}+
                    </h2>

                    <h4 className="text-sm">{item.title}</h4>
                  </div>
                )}
              </ScrollTrigger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterUp;
