"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowDownYellow from "../../../public/svg/arrowDownYellow.svg";
import Essential from "../../../public/Images/delivery/essential.png";
import LargeAndBulky from "../../../public/Images/delivery/largeandbulkygoods.png";
import SpecialCare from "../../../public/Images/delivery/specialcare.png";
import Moving from "../../../public/Images/delivery/moving1.png";
import DineAndShop from "../../../public/Images/delivery/dineandshop.png";

function Launching() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [isExpanded, setIsExpanded] = useState({
    "localDeliveryCollapseExample1": false,
    "localDeliveryCollapseExample2": false,
    "localDeliveryCollapseExample3": false,
    "localDeliveryCollapseExample4": false,
    "localDeliveryCollapseExample5": false,
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 1500) {
        setIsLaptop(!isLaptop);
      }
    }
  }, []);

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  const handleCollapse = (id) => {
    setIsExpanded((value) => {
      return {
        ...value,
        [id]: !isExpanded[id]
      }
    })
  };

  return (
    <>
      <div className="local_delivery_section section-spacer">
        <div className="container">
          <div className="row flex-wrap align-items-start justify-content-evenly">
            <div className={`card_width_1 ${isMobile ? "px-1 my-1" : "my-4"}`}>
              <div className={`inner_launching_section flex-column ${isMobile ? "px-0" : "px-4"} ${isExpanded['localDeliveryCollapseExample1'] ? 'expanded' : ''}`}
                data-bs-toggle="collapse"
                href="#localDeliveryCollapseExample1"
                role="button"
                aria-expanded={isExpanded ? "true" : "false"}
                onClick={() => { handleCollapse("localDeliveryCollapseExample1") }}
                aria-controls="localDeliveryCollapseExample1"
              >
                <div className="d-flex justify-content-center">
                  <Image loader={myLoader}
                    className={`${isLaptop ? "w-75" : "w-75"} h-auto object-fit-contain`}
                    src={Essential}
                    alt="essential"
                  />
                </div>
                <div>
                  <p className="launchingmain_title">Essential Deliveries</p>
                </div>
                <div
                  className="collapse multi-collapse bg-transparent"
                  id="localDeliveryCollapseExample1"
                >
                  <div className="text-center d-flex justify-content-center">
                    <div className="p-0 border-0 bg-transparent" style={{ width: "100%" }}>
                      <p className="launching_description px-0 ">
                        As soon as the need arises,
                        <br />
                        your employees can order
                        <br />
                        a ride or delivery
                      </p>
                    </div>
                  </div>
                </div>
                <ArrowDownYellow height="10%" width="10%" className="mt-1" />
              </div>
            </div>
            <div className={`card_width_1 ${isMobile ? "px-1 my-1" : "my-4"}`}>
              <div className={`inner_launching_section flex-column ${isMobile ? "px-0" : "px-4"} ${isExpanded['localDeliveryCollapseExample2'] ? 'expanded' : ''}`}
                data-bs-toggle="collapse"
                href="#localDeliveryCollapseExample2"
                role="button"
                aria-expanded={isExpanded ? "true" : "false"}
                onClick={() => { handleCollapse("localDeliveryCollapseExample2") }}
                aria-controls="localDeliveryCollapseExample2"
              >
                <div className="d-flex justify-content-center">
                  <Image loader={myLoader}
                    className={`${isLaptop ? "w-75" : "w-75"} h-auto object-fit-contain`}
                    src={LargeAndBulky}
                    alt="LargeAndBulky"
                  />
                </div>
                <div>
                  <p className="launchingmain_title">Large & Bulky Goods</p>
                </div>
                <div
                  className="collapse multi-collapse bg-transparent"
                  id="localDeliveryCollapseExample2"
                >
                  <div className="text-center d-flex justify-content-center">
                    <div className="p-0 border-0 bg-transparent" style={{ width: "100%" }}>
                      <p className="launching_description px-0 ">
                        Need to move sizable items like electronics, household or
                        garden furniture? we{`'`}ve got the capacity to deliver
                      </p>
                    </div>
                  </div>
                </div>
                <ArrowDownYellow height="10%" width="10%" className="mt-1" />
              </div>
            </div>
            <div className={`card_width_1 ${isMobile ? "px-1 my-1" : "my-4"}`}>
              <div className={`inner_launching_section flex-column ${isMobile ? "px-0" : "px-4"} ${isExpanded['localDeliveryCollapseExample3'] ? 'expanded' : ''}`}
                data-bs-toggle="collapse"
                href="#localDeliveryCollapseExample3"
                role="button"
                aria-expanded={isExpanded ? "true" : "false"}
                onClick={() => { handleCollapse("localDeliveryCollapseExample3") }}
                aria-controls="localDeliveryCollapseExample3"
              >
                <div className="d-flex justify-content-center">
                  <Image loader={myLoader}
                    className={`${isLaptop ? "w-75" : "w-75"} h-auto object-fit-contain`}
                    src={SpecialCare}
                    alt="SpecialCare"
                  />
                </div>
                <div>
                  <p className="launchingmain_title">Special Care Deliveries</p>
                </div>
                <div
                  className="collapse multi-collapse bg-transparent"
                  id="localDeliveryCollapseExample3"
                >
                  <div className="text-center d-flex justify-content-center">
                    <div className="p-0 border-0 bg-transparent" style={{ width: "100%" }}>
                      <p className="launching_description px-0 ">
                        Entrust us with your delicate
                        <br />
                        items - flowers, jewelery or any
                        <br />
                        fragile possessions.
                      </p>
                    </div>
                  </div>
                </div>
                <ArrowDownYellow height="10%" width="10%" className="mt-1" />
              </div>
            </div>
            {/* </div>
          <div className="row flex-wrap align-items-start justify-content-center"> */}
            <div className={`card_width_2 ${isMobile ? "px-1 my-1" : "my-4"}`}>
              <div className={`inner_launching_section flex-column ${isMobile ? "px-0" : "px-4"} ${isExpanded['localDeliveryCollapseExample4'] ? 'expanded' : ''}`}
                data-bs-toggle="collapse"
                href="#localDeliveryCollapseExample4"
                role="button"
                aria-expanded={isExpanded ? "true" : "false"}
                onClick={() => { handleCollapse("localDeliveryCollapseExample4") }}
                aria-controls="localDeliveryCollapseExample4"
              >
                <div className="d-flex justify-content-center">
                  <Image loader={myLoader}
                    className={`${isMobile ? "w-100" : "w-75"} ${isLaptop ? "w-75" : "w-75"} h-auto object-fit-contain`}
                    src={Moving}
                    alt="Moving"
                  />
                </div>
                <div>
                  <p className="launchingmain_title">Moving Services</p>
                </div>
                <div
                  className="collapse multi-collapse bg-transparent"
                  id="localDeliveryCollapseExample4"
                >
                  <div className="text-center d-flex justify-content-center">
                    <div className="p-0 border-0 bg-transparent" style={{ width: "100%" }}>
                      <p className="launching_description px-0 ">
                        We{`'`}ve got the vans and trucks to help you move
                        <br />
                        your stuff. And we{`'`}ve got the hands to help you
                        <br />
                        do it.
                      </p>
                    </div>
                  </div>
                </div>
                <ArrowDownYellow height="10%" width="10%" className="mt-1" />
              </div>
            </div>
            <div className={`card_width_3 ${isMobile ? "px-1 my-1" : "my-4"}`}>
              <div className={`inner_launching_section flex-column ${isMobile ? "px-0" : "px-4"} ${isExpanded['localDeliveryCollapseExample5'] ? 'expanded' : ''}`}
                data-bs-toggle="collapse"
                href="#localDeliveryCollapseExample5"
                role="button"
                aria-expanded={isExpanded ? "true" : "false"}
                onClick={() => { handleCollapse("localDeliveryCollapseExample5") }}
                aria-controls="localDeliveryCollapseExample5"
              >
                <div className="d-flex justify-content-center">
                  <Image loader={myLoader}
                    className={`${isLaptop ? "w-75" : "w-75"} h-auto object-fit-contain`}
                    src={DineAndShop}
                    alt="DineAndShop"
                  />
                </div>
                <div>
                  <p className="launchingmain_title">Dine & Shop Delivery</p>
                </div>
                <div
                  className="collapse multi-collapse bg-transparent"
                  id="localDeliveryCollapseExample5"
                >
                  <div className="text-center d-flex justify-content-center">
                    <div className="p-0 border-0 bg-transparent" style={{ width: "100%" }}>
                      <p className="launching_description px-0 ">
                        Craving something or need groceries? order
                        <br />
                        away! with our purchase service, we buy on
                        <br />
                        your behalf and swiftly deliver to your doorstep.
                      </p>
                    </div>
                  </div>
                </div>
                <ArrowDownYellow height="10%" width="10%" className="mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Launching;
