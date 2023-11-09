"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Versatility from "../../public/svg/ride_with_us/Ride_Business/versatility.svg";
import ArrowDownYellow from "../../public/Images/pilot_launch/arrowDown.png";
import OnDemandGroupRides from "../../public/Images/pilot_launch/On-DemandGroupRides.png";
import OnDemandLogistics from "../../public/Images/pilot_launch/On-DemandLogistics.png";
import BusinessLogistics from "../../public/Images/pilot_launch/BusinessLogistics.png";
import FleetOwnersWheel from "../../public/Images/pilot_launch/FleetOwnersTaketheWheel.png";
import ShoutOutDrivers from "../../public/Images/pilot_launch/ShoutOuttoPerthsDrivers.png";

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
      <div className={`launching_section ${isMobile ? "pt-3" : "pt-5 pb-4"}`}>
        <div className="row w-100">
          <div className="col-12">
            <h2 className="Launching_title px-2">Launching Exclusively in Perth</h2>
          </div>
        </div>
        <div className="container my-3">
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
                <Image loader={myLoader} className={`object-fit-contain launching_img`} src={OnDemandGroupRides} alt="OnDemandGroupRides" />
                <p className="launchingmain_title">Group Rides</p>
                <p className="fw-600 text-white launchingsub_title">
                  {" "}
                  Gather Your Mates, We Drive
                </p>
                <div className="row">
                  <div className="col px-0 ">
                    <div
                      className="collapse multi-collapse bg-transparent"
                      id="multiCollapseExample1"
                    >
                      <div className="card px-0 card-body py-0 border-0 bg-transparent">
                        <p className="launching_description px-0 ">
                          Perth outings, from the city buzz to wine tours, we{`'`}ve
                          got the perfect ride. Grab your mates, pick your spot,
                          and we{`'`}ll handle the journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Image loader={myLoader} className="object-fit-contain h-auto arrow_width" src={ArrowDownYellow} alt="ArrowDownYellow" />
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
                <Image loader={myLoader} className={`object-fit-contain launching_img`} src={OnDemandLogistics} alt="OnDemandLogistics" />
                <p className="launchingmain_title">Delivery</p>
                <p className="fw-600 text-white launchingsub_title">No Fuss Deliveries</p>
                <div className="row">
                  <div className="col px-0 ">
                    <div
                      className="collapse multi-collapse bg-transparent"
                      id="multiCollapseExample2"
                    >
                      <div className="card px-0 card-body py-0 border-0 bg-transparent">
                        <p className="launching_description px-0 ">
                          Whether it{`'`}s a package from Perth to Padbury or a big
                          move from Midland to Mandurah, we{`'`}re on it. Instant
                          quotes, rapid deliveries, and hands-on-deck to help
                          you out.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Image loader={myLoader} className="object-fit-contain h-auto arrow_width" src={ArrowDownYellow} alt="ArrowDownYellow" />
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
                <Image loader={myLoader} className={`object-fit-contain launching_img`} src={BusinessLogistics} alt="BusinessLogistics" />
                <p className="launchingmain_title">Business </p>
                <p className="fw-600 text-white launchingsub_title">
                  Ride the Wave, Perth Businesses
                </p>
                <div className="row">
                  <div className="col px-0 ">
                    <div
                      className="collapse multi-collapse bg-transparent"
                      id="multiCollapseExample3"
                    >
                      <div className="card px-0 card-body py-0 border-0 bg-transparent">
                        <p className="launching_description px-0 ">
                          The daily grind of hyperlocal runs and equipment
                          shipments just got simpler. OZ Ove is like having a
                          logistics team at your fingertips.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Image loader={myLoader} className="object-fit-contain h-auto arrow_width" src={ArrowDownYellow} alt="ArrowDownYellow" />
              </div>
            </div>
            <div className={`launching_card_2 ${isMobile ? "px-1 my-2" : "my-3"}`}>
              <div
                className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample4'] ? 'expanded' : ''}`}
                data-bs-toggle="collapse"
                href="#multiCollapseExample4"
                role="button"
                aria-expanded={isExpanded ? "true" : "false"}
                onClick={() => { handleCollapse("multiCollapseExample4") }}
                aria-controls="multiCollapseExample4"
              >
                <Image loader={myLoader} className={`object-fit-contain launching_img_4`} src={FleetOwnersWheel} alt="FleetOwnersWheel" />
                <p className="launchingmain_title">Fleet Owners</p>
                <p className="fw-600 text-white launchingsub_title">Take the Wheel</p>
                <div className="row">
                  <div className="col px-0 ">
                    <div
                      className="collapse multi-collapse bg-transparent"
                      id="multiCollapseExample4"
                    >
                      <div className="card px-0 card-body py-0 border-0 bg-transparent">
                        <p className="launching_description px-0 ">
                          Manage, train, track. Unearth your fleet{`'`}s full
                          potential. Enhance service, boost visibility, and
                          maximize idle time. A tool for the keen-eyed captain
                          steering a ship, or in this case, a fleet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Image loader={myLoader} className="object-fit-contain h-auto arrow_width1" src={ArrowDownYellow} alt="ArrowDownYellow" />
              </div>
            </div>
            <div className={`launching_card_3 ${isMobile ? "px-1 mt-2" : "mt-3"}`}>
              <div
                className={`border-0 inner_launching_section flex-column ${isMobile ? "p-2" : "py-2 px-4"} ${isExpanded['multiCollapseExample5'] ? 'expanded' : ''}`}
                data-bs-toggle="collapse"
                href="#multiCollapseExample5"
                role="button"
                aria-expanded={isExpanded ? "true" : "false"}
                onClick={() => { handleCollapse("multiCollapseExample5") }}
                aria-controls="multiCollapseExample5"
              >
                <Image loader={myLoader} className={`object-fit-contain launching_img_5`} src={ShoutOutDrivers} alt="ShoutOutDrivers" />
                <p className="launchingmain_title">Driver Partner</p>
                <p className="fw-600 text-white launchingsub_title">
                  Drive, Earn, Repeat
                </p>
                <div className="row">
                  <div className="col px-0 ">
                    <div
                      className="collapse multi-collapse bg-transparent"
                      id="multiCollapseExample5"
                    >
                      <div className="card px-0 card-body py-0 border-0 bg-transparent">
                        <p className="launching_description px-0 ">
                          Perth{`'`}s open roads await. Join our crew, get more rides, and enjoy a wallet that{`'`}s always on the up!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Image loader={myLoader} className="object-fit-contain h-auto arrow_width2" src={ArrowDownYellow} alt="ArrowDownYellow" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-evenly d-block d-lg-none py-2">
            <div className="d-flex justify-content-between px-0 row w-100 mx-0">
              <div className="mob-section-2-img future-mini d-flex justify-content-center align-items-center rounded px-1">
                <div className="d-flex flex-column align-items-center text-center">
                  <span className="text-uppercase fw-bolder fs-12 text-yellow">Oz Ove</span>
                  <span className="text-uppercase fw-600 fs-12 text-white">The Future of Transportation</span>
                </div>
              </div>
              <div className="mob-section-2-img lead-mini d-flex justify-content-center align-items-center rounded px-1">
                <div className="d-flex flex-column align-items-center text-center">
                  <span className="text-white text-capitalize" style={{ fontSize: '10px' }}>Lead the pack and ride</span>
                  <span className="text-uppercase fw-bolder fs-12 text-yellow">Oz Ove</span>
                  <span className="text-white text-capitalize" style={{ fontSize: '10px' }}>Book for your group today</span>
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
