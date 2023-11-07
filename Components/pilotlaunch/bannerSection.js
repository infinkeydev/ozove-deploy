"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SubInner from "../../public/Images/pilot_launch/SubBanner.png";
import Logo2 from "../../public/Images/png/logo2.png";

function bannerSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 768) {
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
      <div className="pilotbannersection">
        <div className="container">
          <div className="blogBannerdesc mx-2">
            <h1 className="pilotlaunchtitle">
              Welcome to<span className="text-socialiconyellow"> OZ Ove</span>
              <br />
              Your<span className="text-socialiconyellow"> Ride</span>, Your
              Way!
            </h1>
            <p className="bannerdescription mt-2 d-none d-lg-block">
              Witness the dawn of a transformative travel era. OZ Ove&apos;s
              pilotlaunch isn&apos;t just a test, it&apos;s a promise.
            </p>
            <button
              className={`launchingnowbtn bg-yellow text-white text-capitalize fw-600 py-2 ${
                isTablet ? "px-1 my-2" : "px-4 my-3"
              } `}
              style={{ width: isTablet ? "60%" : "" }}
            >
              launching soon
            </button>
          </div>
        </div>
      </div>
      <div className="pilotdescriptionmainsection">
        <div className="container">
          <div className="row subinner align-items-center my-5">
            <div className="col-md-5 px-0">
              <div className="d-flex justify-content-start justify-content-md-center">
                <Image
                  loader={myLoader}
                  className="d-none d-lg-block"
                  src={Logo2}
                  alt="SubInner"
                  // objectFit="contain"
                  // objectPosition="center"
                  style={{
                    position: "unset",
                    width: "75%",
                    height: "100%",
                    // animation: 'rotateAnimation 10s linear infinite',
                    // objectFit: 'contain'
                  }}
                />
                <Image
                  loader={myLoader}
                  className="d-block d-lg-none"
                  src={Logo2}
                  alt="SubInner"
                  // objectFit="contain"
                  // objectPosition="center"
                  style={{
                    position: "unset",
                    width: "50%",
                    height: "100%",
                    // animation: 'rotateAnimation 10s linear infinite',
                    // objectFit: 'contain'
                  }}
                />
              </div>
              <div>
                <p className="text-dark text-uppercase fw-700 text-nowrap hyper_text">
                  Beyond Rides, Total Logistics
                </p>
              </div>
            </div>
            <div className="col-md-7 px-0">
              <p className="subdescription">
                G&rsquo;day, Perth! OZ Ove is rolling into town, and we&rsquo;re
                absolutely stoked to kickstart our pilot launch right here in
                WA&rsquo;s sun-kissed capital. Whether you&rsquo;re zipping
                between the CBD and Fremantle, or just sending something across
                the Swan River, we&rsquo;ve got you covered. Dive into a
                customised ride experience or pick the perfect delivery vehicle,
                all with a true-blue Perth flavor. So, come on, Perthies! Jump
                aboard and be among the first to embrace the new era of mobility
                and logistics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default bannerSection;
