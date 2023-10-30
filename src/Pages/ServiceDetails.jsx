import React, { useEffect } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import Button from "../Components/Shared/Button/Button";
import { FiPhone } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import { servicesList } from "../Utils/servicesList";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  const pramId = useParams();
  const serviceItem = servicesList.filter(({ id }) => id == pramId.id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cleaning BD-Service Details</title>
        <meta name="description" content="Cleaning Website" />
      </Helmet>
      <PageHeader
        heading={"House Cleaning"}
        location={"Home / Service / Service Details"}
      />
      <section className=" max-w-6xl mx-auto px-3 py-12 lg:mt-[510px] mt-[200px]">
        <div className="grid lg:grid-cols-[65%_auto] md:grid-cols-[50%_auto] gap-5">
          {serviceItem.map(({ image, title }) => {
            return (
              <div key={""}>
                <div>
                  <img
                    src={image}
                    alt=""
                    className="w-full h-[400px] object-cover rounded-sm"
                  />
                </div>
                <div className="mt-9">
                  <h1 className="text-3xl font-bold font-Roboto text-main">
                    {title}
                  </h1>
                  <p className="text-secondary leading-7 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus sequi, at quos aliquam, laborum expedita,
                    possimus maxime alias vero ea hic! Asperiores possimus
                    veniam dignissimos.
                  </p>
                  <p className="text-secondary leading-7 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus sequi, at quos aliquam, laborum expedita,
                    possimus maxime alias vero ea hic! Asperiores possimus
                    veniam dignissimos.
                  </p>
                  <ul className="my-7">
                    <li className="flex items-center space-x-4">
                      <p className="w-10 h-10 rounded-full bg-gray-300/[0.3] flex justify-center items-center">
                        <AiOutlineCheck className="text-main text-lg " />
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum, et!
                      </p>
                    </li>
                    <li className="flex items-center space-x-4 mt-5">
                      <p className="w-10 h-10 rounded-full bg-gray-300/[0.3] flex justify-center items-center">
                        <AiOutlineCheck className="text-main text-lg " />
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum, et!
                      </p>
                    </li>
                  </ul>
                  <p className="text-secondary leading-7 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus sequi, at quos aliquam, laborum expedita,
                    possimus
                  </p>
                  <ul className="my-7">
                    <li className="flex items-center space-x-4">
                      <p className="w-3 h-3 rounded-full bg-gray-300/[0.3] flex justify-center items-center"></p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum, et!
                      </p>
                    </li>
                    <li className="flex items-center space-x-4 mt-5">
                      <p className="w-3 h-3 rounded-full bg-gray-300/[0.3] flex justify-center items-center"></p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum, et!
                      </p>
                    </li>
                    <li className="flex items-center space-x-4 mt-5">
                      <p className="w-3 h-3 rounded-full bg-gray-300/[0.3] flex justify-center items-center"></p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Earum, et!
                      </p>
                    </li>
                  </ul>
                  <div className="mt-16">
                    <img
                      src={image}
                      alt=""
                      className="w-full h-[400px] object-cover rounded-sm"
                    />
                  </div>
                  <p className="text-secondary leading-7 mt-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus sequi, at quos aliquam, laborum expedita,
                    possimus Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quibusdam, nemo consequuntur voluptatum ullam
                    asperiores reprehenderit aspernatur vitae beatae doloribus,
                    aliquam explicabo laudantium voluptate. Sunt magnam eaque
                    itaque temporibus veritatis blanditiis consequuntur
                    excepturi repellat voluptate optio eum magni, deserunt at
                    tempora repellendus rem quidem velit dolorum possimus
                    delectus reprehenderit dolores ipsum. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Quisquam voluptatibus
                    laboriosam doloremque optio aliquam cupiditate quos
                    molestiae adipisci incidunt nulla!
                  </p>
                  <p className="text-secondary leading-7 mt-4">
                    reprehenderit aspernatur vitae beatae doloribus, aliquam
                    explicabo laudantium voluptate. Sunt magnam eaque itaque
                    temporibus veritatis blanditiis consequuntur excepturi
                    repellat voluptate optio eum magni, deserunt at tempora
                    repellendus rem quidem velit dolorum possimus delectus
                    reprehenderit dolores ipsum. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Quisquam voluptatibus
                    laboriosam doloremque optio aliquam cupiditate quos
                    molestiae adipisci incidunt nulla!
                  </p>
                  <div className="grid md:grid-cols-2 mt-9 gap-4">
                    <img
                      src={image}
                      alt=""
                      className="w-full h-[220px] rounded-sm"
                    />
                    <ul>
                      <li className="flex  space-x-4">
                        <div className="w-10">
                          <p className="w-10 h-10 rounded-full bg-gray-300/[0.3] flex justify-center items-center">
                            <AiOutlineCheck className="text-main text-lg " />
                          </p>
                        </div>
                        <p className="w-full">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, et!
                        </p>
                      </li>
                      <li className="flex  space-x-4 mt-5">
                        <div className="w-10">
                          <p className="w-10 h-10 rounded-full bg-gray-300/[0.3] flex justify-center items-center">
                            <AiOutlineCheck className="text-main text-lg " />
                          </p>
                        </div>
                        <p className="w-full">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Earum, et!
                        </p>
                      </li>
                    </ul>
                  </div>
                  <p className="text-secondary leading-7 mt-4">
                    reprehenderit aspernatur vitae beatae doloribus, aliquam
                    explicabo laudantium voluptate. Sunt magnam eaque itaque
                    temporibus veritatis blanditiis consequuntur excepturi
                    repellat voluptate
                  </p>
                </div>
              </div>
            );
          })}

          {/* ----------- right side */}
          <div>
            <div className="bg-gray-100 px-8 py-12">
              <h6 className="font-bold font-Roboto text-2xl text-main">
                Services
              </h6>
              <ul className="mt-5 ">
                {servicesList.map(({ id, title }) => {
                  return (
                    <li className="bg-white px-3 py-4" key={id}>
                      <Link
                        to={`/service/${id}`}
                        className="text-primary font-semibold flex items-center space-x-2 group transition-all hover:text-black/80"
                      >
                        <span>{title}</span>
                        <HiOutlineArrowRight className="group-hover:ml-3 transition-all" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bg-gray-100 px-8 py-12 mt-10">
              <h6 className="font-bold font-Roboto text-2xl text-main">
                Have Your Question
              </h6>
              <ul className="mt-5">
                <form action="">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full py-4 px-3 outline-none rounded-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full py-4 px-3 outline-none rounded-sm mt-5"
                  />
                  <textarea
                    placeholder="Message"
                    className="w-full py-4 px-3 outline-none rounded-sm mt-5 min-h-[120px]"
                  ></textarea>
                  <div className="mt-5">
                    <Button>Submit</Button>
                  </div>
                </form>
              </ul>
            </div>
            <div className="bg-gray-100 px-8 py-12 mt-10">
              <h6 className="font-bold font-Roboto text-2xl text-main">
                Need Help?
              </h6>
              <div className="bg-main mt-5 px-6 py-9">
                <p className="text-white  font-medium leading-8">
                  we will connect you with a team member who can help. Prefer
                  speaking with a human to filling out a form? call corporate
                  office and
                </p>

                <div className="  flex  items-center space-x-4 mt-5">
                  <div className=" w-[40px] h-[40px] rounded-full bg-gray-600/[0.5] flex justify-center items-center">
                    <FiPhone className="text-white text-lg" />
                  </div>
                  <p className=" text-white text-lg font-medium tracking-widest">
                    +88 01606-104415
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
