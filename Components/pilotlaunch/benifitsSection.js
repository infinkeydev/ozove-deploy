"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LeftArrow from "../../public/Images/pilot_launch/leftArrow.png"
import RightArrow from "../../public/Images/pilot_launch/rightArrow.png"
function BenifitsSection() {
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
    <div className="ownFleet_section py-4 container">
      <div className="row w-100">
        <div className="col-12">
          <h2 className="ownFeet_title">Benefits of the Pilot Launch</h2>
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
      <div className={`mx-0 row w-100 ownfleet_inner_section justify-content-lg-evenly ${isMobile ? "flex-nowrap my-1" : "flex-wrap my-3 px-4"}`}>
        <div className="my-2 pilotlaunch">
          <div className="inner_ownfleet py-5 px-5">
            <p className="text-grey text-capitalize card_heading">
              First to Experience
            </p>
            <p className="text-grey fw-500 card_text">
              Be among the inaugural patrons. Witness innovation firsthand in
              Perth.
            </p>
          </div>
        </div>
        <div className="my-2 pilotlaunch">
          <div className="inner_ownfleet py-5 px-5">
            <p className="text-grey text-capitalize card_heading">
              Special Rates
            </p>
            <p className="text-grey fw-500 card_text">
              Early bird? Enjoy tailored discounts just for our pilot users.
            </p>
          </div>
        </div>
        <div className="my-2 pilotlaunch">
          <div className="inner_ownfleet py-5 px-5">
            <p className="text-grey text-capitalize card_heading">
              Direct Feedback Loop
            </p>
            <p className="text-grey fw-500 card_text">
              Your voice amplifies. Help shape our services for the broader
              rollout.
            </p>
          </div>
        </div>
        <div className="my-2 pilotlaunch">
          <div className="inner_ownfleet py-5 px-5">
            <p className="text-grey text-capitalize card_heading">
              Exclusive Features
            </p>
            <p className="text-grey fw-500 card_text">
              Test features tailored just for Perth before they hit the global
              stage.
            </p>
          </div>
        </div>
        <div className="my-2 pilotlaunch">
          <div className="inner_ownfleet py-5 px-5">
            <p className="text-grey text-capitalize card_heading">
              On-Call in Oz
            </p>
            <p className="text-grey fw-500 card_text">
              Direct line to our team. We&apos;re all ears, always.
            </p>
          </div>
        </div>
        <div className="my-2 pilotlaunch">
          <div className="inner_ownfleet py-5 px-5">
            <p className="text-grey text-capitalize card_heading">
              Hyperlocal Charm
            </p>
            <p className="text-grey fw-500 card_text">
              Services tailored with a Perth touch, for Perth folks. Pure and
              personal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenifitsSection;
