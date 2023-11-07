"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeliveryPartner from "../../public/Images/delivery/delivery-partner.png"
import Ready from "../../public/Images/delivery/icon-rewards.svg.png"
import Professional from "../../public/Images/delivery/icn_driver.png.png"
import Save from "../../public/Images/delivery/icon-fast-flexible.svg.png"
import Everything from "../../public/Images/delivery/icn_convenience.png.png"

function stastics() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet);
      }
    }
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="py-5 stastics_section">
        <div className="container">
          <div className="row w-100 mx-0 justify-content-evenly">
            <div className="col-lg-6 d-flex justify-content-start justify-content-lg-center align-items-center">
              <Image loader={myLoader} className={`object-fit-contain ${isMobile ? "h-100 w-75" : ""} ${isTablet ? "h-100 w-50" : " h-auto w-75"}`} src={DeliveryPartner} alt="DeliveryPartner" />
            </div>
            <div className="col-lg-5 d-none d-lg-block h-100">
              <p className="text-black why_choose_head">Why choose <span className="text-socialiconyellow">Oz</span>ove?</p>
              <p className="text-grey why_choose_sub fw-600 my-2">Your local delivery partner</p>
              <div className="d-flex flex-row my-2 row">
                <div className="col-md-1 px-0">
                  <Image loader={myLoader} className="me-3 object-fit-contain icon_1_width" src={Ready} alt="Ready" />
                </div>
                <div className="col-md-11">
                  <div className="text-black stastics_desc fw-bold">
                    Ready when you are
                  </div>
                  <div className="text-dark stastics_desc">
                    Connect with a delivery driver in just a few seconds, they&apos;ll arrive at your chosen pick up spot in no time at all.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row my-2 row">
                <div className="col-md-1 px-0">
                  <Image loader={myLoader} className="me-3 object-fit-contain icon_2_width" src={Professional} alt="Professional" />
                </div>
                <div className="col-md-11">
                  <div className="text-black stastics_desc fw-bold">
                    Professional drivers
                  </div>
                  <div className="text-dark stastics_desc">
                    Have peace of mind with our trained and fully vetted delivery drivers
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row my-2 row">
                <div className="col-md-1 px-0">
                  <Image loader={myLoader} className="me-3 object-fit-contain icon_3_width" src={Save} alt="Save" />
                </div>
                <div className="col-md-11">
                  <div className="text-black stastics_desc fw-bold">
                    Save time
                  </div>
                  <div className="text-dark stastics_desc">
                    Let us do the hard work for you. We&apos;ll get your goods across town and even do the heavy lifting if you need help.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row my-2 row">
                <div className="col-md-1 px-0">
                  <Image loader={myLoader} className="me-4 object-fit-contain icon_4_width" src={Everything} alt="Everything" />
                </div>
                <div className="col-md-11">
                  <div className="text-black stastics_desc fw-bold">
                    Everything in one app
                  </div>
                  <div className="text-dark stastics_desc">
                    Schedule a delivery, make a payment and track your goods all in one app. It&apos;s the only complete on-demand delivery solution you&apos;ll need.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-block d-lg-none mob-stastics">
              <p className="text-grey why_choose_head">Why choose Ozove?</p>
              <p className="text-grey why_choose_sub fw-600 my-2 text-capitalize">Your local delivery partner</p>
              <div className="d-flex overflow-auto">
                <div className="d-flex flex-row rounded-3 p-2 mx-2 align-items-center">
                  <div>
                    <Image loader={myLoader} className="h-auto me-5" src={Ready} alt="Ready" style={{ width: "80%" }} />
                  </div>
                  <div>
                    <div className="text-black fs-12 fw-bold text-nowrap">
                      Ready when
                      <br />
                      you are
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row rounded-3 p-2 mx-2 align-items-center">
                  <div>
                    <Image loader={myLoader} className="h-auto me-5" src={Professional} alt="Professional" style={{ width: "80%" }} />
                  </div>
                  <div>
                    <div className="text-black fs-12 fw-bold text-nowrap">
                      Professional
                      <br />
                      drivers
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row rounded-3 p-2 mx-2 align-items-center">
                  <div>
                    <Image loader={myLoader} className="h-auto me-5" src={Save} alt="Save" style={{ width: "80%" }} />
                  </div>
                  <div>
                    <div className="text-black fs-12 fw-bold text-nowrap">
                      Save time
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row rounded-3 p-2 mx-2 align-items-center">
                  <div>
                    <Image loader={myLoader} className="h-auto me-5" src={Everything} alt="Everything" style={{ width: "80%" }} />
                  </div>
                  <div>
                    <div className="text-black fs-12 fw-bold text-nowrap">
                      Everything in
                      <br />
                      one app
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default stastics;
