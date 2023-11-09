"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AnimateLogo from "../../public/Images/png/animate-logo.png";
import Affordable from "../../public/svg/Affordable.svg";
import Fast from "../../public/svg/Fast.svg";
import Smile from "../../public/svg/Smile.svg";
import Secure from "../../public/svg/Secure.svg";
import Time from "../../public/svg/Time.svg";
import Logo1 from "../../public/Images/png/logo1.png";

function SectionFour() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 576) {
        setIsPhone(!isPhone);
      }
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
      <div
        className={`home-section-4 ${isTablet ? "" : "bg-socialiconyellow"}`}
      >
        <div
          className={`container ${
            isTablet ? "rounded" : " py-2 bg-socialiconyellow"
          }`}
        >
          <div className="web-section-4 px-3">
            <div className="row w-100">
              <div className="d-flex justify-content-center align-items-center col-md-6 flex-column">
                {/* <div className="rotate-container"> */}
                <Image
                  loader={myLoader}
                  className="AnimateLogo"
                  src={Logo1}
                  alt="Animated Logo"
                  // objectFit="contain"
                  // objectPosition="center"
                />
                {/* </div> */}
                <p className="fw-bold text-center text-uppercase hyper_text">
                  Beyond Rides, Total Logistics
                </p>
              </div>
              <div className="col-md-6">
                <div>
                  <div>
                    <div className="why_oz_head text-black text-uppercase fw-bolder">
                      Why Choose Oz Ove?
                    </div>
                    <div className="text-dark fs-6">
                      Experience Unparalleled Service Your 24/7 Delivery Partner
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3">
                    <Affordable className="me-3 svg_affordable" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Affordable & Transparent
                      </div>
                      <div className="text-dark why_oz_desc">
                        Clear pricing with no hidden fees
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3">
                    <Fast className="me-3 svg_fast" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Integrated Mobility Solutions
                      </div>
                      <div className="text-dark why_oz_desc">
                        We blend ride-sharing and delivery services into one
                        platform, streamlining your travel and logistics needs.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3">
                    <Smile className="me-3 svg_smile" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Secure & Safe
                      </div>
                      <div className="text-dark why_oz_desc">
                        Highly trained and professional drivers catering to wide
                        range of customer needs
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3">
                    <Secure className="me-3 svg_secure" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Tailored to You
                      </div>
                      <div className="text-dark why_oz_desc">
                        From on-demand group rides to personalized delivery
                        schedules, our services adapt to your requirements and
                        timetable.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row my-3">
                    <Time className="me-3 svg_time" />
                    <div>
                      <div className="text-black fs-5 fw-bold">
                        Real-Time Tracking
                      </div>
                      <div className="text-dark why_oz_desc">
                        Stay informed with live in-app order tracking
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mob-section-4 p-2">
            <div className="row w-100 mx-0">
              <div className="d-flex justify-content-start align-items-start flex-column px-0">
                <div className="rotate-container">
                  {/* <Image loader={myLoader}
                    src={AnimateLogo}
                    alt="Animated Logo"
                    // objectFit="contain"
                    // objectPosition="center"
                    style={{
                      position: 'unset',
                      width: '75%',
                      height: '100%',
                      animation: 'rotateAnimation 10s linear infinite',
                      // objectFit: 'contain'
                    }}
                  /> */}
                </div>
                <p className="fs-20 text-nowrap fw-bold text-center text-capitalize">
                  Beyond Rides, Total Logistics
                </p>
              </div>
              <div className="px-0 d-flex flex-column justify-content-center">
                <div>
                  <div className="my-2">
                    <div className="text-dark text-capitalize fw-bolder my-1 fs-16">
                      Why Choose Oz Ove?
                    </div>
                    <div
                      className={`text-white fw-600 ${
                        isPhone ? "fs-12" : "fs-12"
                      }`}
                    >
                      Experience Unparalleled Service Your 24/7 Delivery Partner
                    </div>
                  </div>
                  <div className="d-flex overflow-auto">
                    <div className="d-flex flex-row bg-white rounded-3 py-2 me-2 ps-2 pe-3 align-items-center">
                      <Affordable className="mx-2" style={{ width: "50px" }} />
                      <div className="text-black fs-10 fw-600">
                        Affordable & Transparent
                      </div>
                    </div>
                    <div className="d-flex flex-row bg-white rounded-3 py-2 mx-2 ps-2 pe-3 align-items-center">
                      <Fast className="mx-2" style={{ width: "50px" }} />
                      <div className="text-black fs-10 fw-600">
                        Integrated Mobility Solutions
                      </div>
                    </div>
                    <div className="d-flex flex-row bg-white rounded-3 py-2 mx-2 ps-2 pe-3 align-items-center">
                      <Smile className="mx-2" style={{ width: "50px" }} />
                      <div className="text-black fs-10 fw-600">
                        Secure & Safe
                      </div>
                    </div>
                    <div className="d-flex flex-row bg-white rounded-3 py-2 mx-2 ps-2 pe-3 align-items-center">
                      <Secure className="mx-2" style={{ width: "50px" }} />
                      <div className="text-black fs-10 fw-600">
                        Tailored to You
                      </div>
                    </div>
                    <div className="d-flex flex-row bg-white rounded-3 py-2 mx-2 ps-2 pe-3 align-items-center">
                      <Time className="mx-2" style={{ width: "50px" }} />
                      <div className="text-black fs-10 fw-600">
                        Real-Time Tracking
                      </div>
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

export default SectionFour;
