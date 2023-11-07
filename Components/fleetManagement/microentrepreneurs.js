"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BannerDesc from "../../public/Images/fleet_management/banner-desc.png";

function microentrepreneurs() {
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
      <div className="microentrepreneurs_section py-3 py-lg-5">
        <div className="microentrepreneurs_sub_section">
          <div className="container d-flex justify-content-center">
            <div className="row py-4 mx-0" style={{ width: isMobile ? "100%" : "85%" }}>
              <div className="col-md-7 microentrepreneurs_title_section">
                <div className="microentrepreneurs_title">
                  Oz Ove
                  <span className="text-socialiconyellow"> Fleet Management</span>
                  <br />
                  Powering
                  <span className="text-socialiconyellow"> Microentrepreneurs </span>
                </div>
                <p className="microentrepreneurs_desc w-75">
                  Venture into the new era of fleet management with Oz Ove. Designed for the bold, forward-thinking microentrepreneurs, our platform serves as your comprehensive solution for overseeing all your fleet activities. Manage delivery orders with precision, assign vehicles to drivers efficiently, plot optimal routes, and ensure customer satisfaction with every dispatch - all in one place.
                </p>
              </div>
              <div className="col-md-5 microentrepreneursimg_section">

                <Image loader={myLoader} src={BannerDesc} alt="BannerDesc" className="microentrepreneursimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default microentrepreneurs;
