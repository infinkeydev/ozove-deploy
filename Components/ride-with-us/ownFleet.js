"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LeftArrow from "../../public/Images/pilot_launch/leftArrow.png"
import RightArrow from "../../public/Images/pilot_launch/rightArrow.png"

function OwnFleet() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
    }
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="ownFleet_section section-spacer container">
        <div className="row w-100">
          <div className="col-12">
            <h2 className="ownFeet_title">
              More efficient than owning your own fleet
            </h2>
          </div>
        </div>
        {isMobile ? (
          <>
            <div className="d-flex arrowSection row">
              <div className="col-12 flex-nowrap d-flex">
                <Image loader={myLoader} className="w-100 object-fit-contain me-2" src={LeftArrow} alt="LeftArrow" />
                <Image loader={myLoader} className="w-100 object-fit-contain" src={RightArrow} alt="RightArrow" />
              </div>
            </div>
          </>
        ) : (<></>)}
        <div className="mx-0 row w-100 flex-nowrap my-2 my-lg-5 ownfleet_inner_section justify-content-lg-evenly">
          <div className="ownFleetCard">
            <div className="inner_ownfleet p-5">
              <p className="ownFleet_head text-grey text-capitalize">
                You are not limited
                <br /> by your vehicle
              </p>
              <p className="text-grey fw-500 text-capitalize ownFleet_desc">
                As soon as the need arises,
                <br />
                your employees can order
                <br />
                a ride or delivery
              </p>
            </div>
          </div>
          <div className="ownFleetCard">
            <div className="inner_ownfleet p-5">
              <p className="ownFleet_head text-grey text-capitalize">
                Intended use only
              </p>
              <p className="text-grey fw-500 text-capitalize ownFleet_desc">
                You pay only for the
                <br />
                services actually rendered
                <br />
                and only within the limits
              </p>
            </div>
          </div>
          <div className="ownFleetCard">
            <div className="inner_ownfleet p-5">
              <p className="ownFleet_head text-grey text-capitalize">
                Favourite Driver
              </p>
              <p className="text-grey fw-500 text-capitalize ownFleet_desc">
                Create your own fleet using OZ Ove
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnFleet;
