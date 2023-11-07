"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SectionSix() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
    }
  }, []);
  return (
    <>
      <div className={`${isMobile ? "container" : ""}`}>
        <div className={`corporate-bg py-5 d-flex align-items-center justify-content-center`}>
          <div className={`${isMobile ? "" : "container"}`}>
            <div className="sub_container">
              <div className="text-center">
                {isMobile ? (
                  <>
                    <p className="corporate_heading">Unleash Your
                      <br />
                      <span className="text-yellow"> Corporate</span> Potential
                    </p>
                  </>
                ) : (
                  <>
                    <p className="corporate_heading">Unleash Your<span className="text-yellow"> Corporate</span> Potential</p>
                  </>
                )}
              </div>
              <div className="text-center text-white corporate_desc my-4 d-none d-lg-block">
                Embrace the Oz Ove Business Account advantage and transform
                <br />
                the way your company handles transportation and logistics.
                <br />
                Soar to new levels of success and leave the competition behind with Oz Ove
                <br />
                your corporate partner for a brighter future!
              </div>
              <div className="d-flex justify-content-evenly corporet_section">
                <button className={`bg-yellow d-flex justify-content-start align-items-start text-dark fw-bold text-uppercase text-center rounded order-lg-1 order-2 ${isMobile ? "mx-1 my-2 text-nowrap px-3 py-1" : "px-4 py-2"}`} style={{ marginLeft: isMobile ? "" : "5.5rem" }}>
                  <Link href={`/ride-with-us/business`}>RIDE Business</Link>
                </button>
                <button className={`d-flex justify-content-start align-items-start text-dark fw-bold text-uppercase text-center rounded order-lg-2  order-1 ${isMobile ? "mx-1 my-2 text-nowrap px-2 py-1" : "px-4 py-2"}`} style={{ marginRight: isMobile ? "" : "5.5rem" }}>
                  <Link href={`/delivery/business`}>Delivery Business</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionSix;
