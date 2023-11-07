"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowDownYellow from "../../public/Images/Vector.png";
import Dashpack from "../../public/Images/apply_to_drive/DASHPACK.png";
import vehiclesticker from "../../public/Images/apply_to_drive/vehiclesticker.png";
import MissionBonuses from "../../public/Images/apply_to_drive/MissionBonuses.png";
import Insurance from "../../public/Images/apply_to_drive/Insurance.png";
import VehicleRental from "../../public/Images/apply_to_drive/VehicleRental.png";
import HealthandFitness from "../../public/Images/apply_to_drive/HealthandFitness.png";

function Launching() {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState({
    "multiCollapseExample1": false,
    "multiCollapseExample2": false,
    "multiCollapseExample3": false,
    "multiCollapseExample4": false,
    "multiCollapseExample5": false,
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
    }
  }, []);

  const handleCollapse = (id) => {
    setIsExpanded((value) => {
      return {
        ...value,
        [id]: !isExpanded[id]
      }
    })
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className={`launching_section1 ${isMobile ? "pt-3" : "pt-5 pb-4"}`}>
        <div className="container my-3">
          <div className={`${isMobile ? "card" : ""}`} style={{ backgroundColor: isMobile ? "#333333" : "" }}>
            <div className="row w-100">
              <div className="col-12">
                <h2 className="Launching_title">Exclusive benefits</h2>
              </div>
            </div>
            <div className="row flex-wrap align-items-start justify-content-evenly">
              <div className={`launching_card_1  ${isMobile ? "px-1 my-2" : "my-3"}`}>
                <div
                  className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample1'] ? 'expanded' : ''}`}
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded={isExpanded ? "true" : "false"}
                  onClick={() => { handleCollapse("multiCollapseExample1") }}
                  aria-controls="multiCollapseExample1"
                >
                  <div>
                    <Image loader={myLoader} className="exclusive_img object-fit-contain" src={Dashpack} alt="Dashpack" style={{ width: "100%" }} />
                  </div>
                  <p className="launchingmain_title">DashPack</p>
                  <p className={`fw-600 text-white launchingsub_title ${isExpanded['multiCollapseExample1'] ? 'd-none' : ''}`}>Not just an accessory, but a tool to enhance your earnings.</p>
                  <div className="row">
                    <div className="col px-0 ">
                      <div className="collapse multi-collapse bg-transparent" id="multiCollapseExample1">
                        <div className="card px-0 card-body py-0 border-0 bg-transparent">
                          <p className="launching_description px-0 ">
                            Not just an accessory, but a tool to enhance
                            <br />
                            your earnings. With an Dashpack, you increase
                            <br />
                            your earnings by 1.1x and become eligible to
                            <br />
                            take on food deliveries. Expand your service
                            <br />
                            offerings and reach, and thereby your income!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image loader={myLoader} className="object-fit-contain" src={ArrowDownYellow} alt="ArrowDownYellow" style={{ width: "4%", marginTop: "10px" }} />
                </div>
              </div>
              <div className={`launching_card_1 ${isMobile ? "px-1 my-2" : "my-3"}`}>
                <div
                  className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample2'] ? 'expanded' : ''}`}
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample2"
                  role="button"
                  aria-expanded={isExpanded ? "true" : "false"}
                  onClick={() => { handleCollapse("multiCollapseExample2") }}
                  aria-controls="multiCollapseExample2"
                >
                  <div>
                    <Image loader={myLoader} className="exclusive_img object-fit-contain" src={vehiclesticker} alt="vehiclesticker" style={{ width: "100%" }} />
                  </div>
                  <p className="launchingmain_title">Vehicle Sticker </p>
                  <p className={`fw-600 text-white launchingsub_title ${isExpanded['multiCollapseExample2'] ? 'd-none' : ''}`}>Boost your visibility and priority in our system.</p>
                  <div className="row">
                    <div className="col px-0 ">
                      <div className="collapse multi-collapse bg-transparent" id="multiCollapseExample2">
                        <div className="card px-0 card-body py-0 border-0 bg-transparent">
                          <p className="launching_description px-0 ">
                            Boost your visibility and priority in our system.
                            <br />
                            Drivers sporting our OZ Ove vehicle sticker get
                            <br />
                            a whopping 2.2x prioritization for orders over
                            <br />
                            others. It&apos;s not just a sticker, it&apos;s your ticket to
                            <br />
                            higher earnings!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image loader={myLoader} className="object-fit-contain" src={ArrowDownYellow} alt="ArrowDownYellow" style={{ width: "4%", marginTop: "10px" }} />
                </div>
              </div>
              <div className={`launching_card_1 ${isMobile ? "px-1 my-2" : "my-3"}`}>
                <div
                  className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample3'] ? 'expanded' : ''}`}
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample3"
                  role="button"
                  aria-expanded={isExpanded ? "true" : "false"}
                  onClick={() => { handleCollapse("multiCollapseExample3") }}
                  aria-controls="multiCollapseExample3"
                >
                  <div>
                    <Image loader={myLoader} className="exclusive_img object-fit-contain" src={MissionBonuses} alt="MissionBonuses" style={{ width: "100%" }} />
                  </div>
                  <p className="launchingmain_title">Mission Bonuses </p>
                  <p className={`fw-600 text-white launchingsub_title ${isExpanded['multiCollapseExample3'] ? 'd-none' : ''}`}>Rewards for your commitment and excellent service!</p>
                  <div className="row">
                    <div className="col px-0 ">
                      <div className="collapse multi-collapse bg-transparent" id="multiCollapseExample3">
                        <div className="card px-0 card-body py-0 border-0 bg-transparent">
                          <p className="launching_description px-0 ">
                            Rewards for your commitment and excellent
                            <br />
                            service! Achieve targets, maintain high ratings,
                            <br />
                            and you can unlock bonus earnings. Each
                            <br />
                            completed order takes you a step closer to
                            <br />
                            that bonus!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image loader={myLoader} className="object-fit-contain" src={ArrowDownYellow} alt="ArrowDownYellow" style={{ width: "4%", marginTop: "10px" }} />
                </div>
              </div>
              <div className={`launching_card_1 ${isMobile ? "px-1 my-2" : "my-3"}`}>
                <div
                  className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample4'] ? 'expanded' : ''}`}
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample4"
                  role="button"
                  aria-expanded={isExpanded ? "true" : "false"}
                  onClick={() => { handleCollapse("multiCollapseExample4") }}
                  aria-controls="multiCollapseExample4"
                >
                  <div>
                    <Image loader={myLoader} className="exclusive_img object-fit-contain" src={Insurance} alt="Insurance" style={{ width: "100%" }} />
                  </div>
                  <p className="launchingmain_title">Insurance</p>
                  <p className={`fw-600 text-white launchingsub_title ${isExpanded['multiCollapseExample4'] ? 'd-none' : ''}`}>Got you covered! Enjoy our specially curated insurance plans as a valued OZ Ove partner.</p>
                  <div className="row">
                    <div className="col px-0 ">
                      <div className="collapse multi-collapse bg-transparent" id="multiCollapseExample4">
                        <div className="card px-0 card-body py-0 border-0 bg-transparent">
                          <p className="launching_description px-0 ">
                            We&apos;ve got you covered! As a valued OZ Ove
                            <br />
                            partner, enjoy our specially curated insurance
                            <br />
                            plans. So you can focus on delivering great
                            <br />
                            service without worrying about unforeseen
                            <br />
                            circumstances.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image loader={myLoader} className="object-fit-contain" src={ArrowDownYellow} alt="ArrowDownYellow" style={{ width: "4%", marginTop: "10px" }} />
                </div>
              </div>
              <div className={`launching_card_1 ${isMobile ? "px-1 my-2" : "my-3"}`}>
                <div
                  className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample5'] ? 'expanded' : ''}`}
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample5"
                  role="button"
                  aria-expanded={isExpanded ? "true" : "false"}
                  onClick={() => { handleCollapse("multiCollapseExample5") }}
                  aria-controls="multiCollapseExample5"
                >
                  <div>
                    <Image loader={myLoader} className="exclusive_img object-fit-contain" src={VehicleRental} alt="VehicleRental" style={{ width: "100%" }} />
                  </div>
                  <p className="launchingmain_title">Vehicle Rental</p>
                  <p className={`fw-600 text-white launchingsub_title ${isExpanded['multiCollapseExample5'] ? 'd-none' : ''}`}>Keep your earnings high and your costs low with exclusive discounts on vehicle rentals.</p>
                  <div className="row">
                    <div className="col px-0 ">
                      <div className="collapse multi-collapse bg-transparent" id="multiCollapseExample5">
                        <div className="card px-0 card-body py-0 border-0 bg-transparent">
                          <p className="launching_description px-0 ">
                            Keep your earnings high and your costs low
                            <br />
                            with exclusive discounts on vehicle rentals.
                            <br />
                            Being an OZ Ove partner means less
                            <br />
                            overheads, more profits
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image loader={myLoader} className="object-fit-contain" src={ArrowDownYellow} alt="ArrowDownYellow" style={{ width: "4%", marginTop: "10px" }} />
                </div>
              </div>
              <div className={`launching_card_1 ${isMobile ? "px-1 my-2" : "my-3"}`}>
                <div
                  className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample6'] ? 'expanded' : ''}`}
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample6"
                  role="button"
                  aria-expanded={isExpanded ? "true" : "false"}
                  onClick={() => { handleCollapse("multiCollapseExample6") }}
                  aria-controls="multiCollapseExample6"
                >
                  <div>
                    <Image loader={myLoader} className="exclusive_img object-fit-contain" src={HealthandFitness} alt="HealthandFitness" style={{ width: "100%" }} />
                  </div>
                  <p className="launchingmain_title">Health and Fitness</p>
                  <p className={`fw-600 text-white launchingsub_title ${isExpanded['multiCollapseExample6'] ? 'd-none' : ''}`}>A healthy driver is a happy driver.</p>
                  <div className="row">
                    <div className="col px-0 ">
                      <div className="collapse multi-collapse bg-transparent" id="multiCollapseExample6">
                        <div className="card px-0 card-body py-0 border-0 bg-transparent">
                          <p className="launching_description px-0 ">
                            A healthy driver is a happy driver. Benefit from
                            <br />
                            special health and fitness offerings designed
                            <br />
                            to keep you fit and active. Your well-being
                            <br />
                            matters to us as much as it does to you!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image loader={myLoader} className="object-fit-contain" src={ArrowDownYellow} alt="ArrowDownYellow" style={{ width: "4%", marginTop: "10px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Launching;
