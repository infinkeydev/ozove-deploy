"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BusSection from "../../public/svg/ride_with_us/Ride_Business/Bus1.png";
import VanSection from "../../public/svg/ride_with_us/Ride_Business/Van1.png";

function VehicleDeliverySection() {
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
      <div className="vehicle_delivery_section section-spacer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="title_column col-10">
              {isMobile ? (

                <p className="main_title text-capitalize">
                  Any vehicle to match your
                  <br />
                  delivery needs
                </p>
              ) : (
                <p className="main_title text-capitalize">
                  Any vehicle to match your delivery
                  <br />
                  needs
                </p>
              )}
            </div>
          </div>
          <div className="row justify-content-center w-100">
            <div className="col-6">
              {/* <Image loader={myLoader} src={BusSection} alt="BusSection" height={100} width={100}/> */}
              <div className="svg-container">
                <Image loader={myLoader}
                  src={BusSection}
                  alt="svg-container"
                  className="h-auto w-75"
                // height="100%"
                // width="75%"
                />
              </div>
              <Link href={`/ride-with-us/individual`}>
                <p className="fs-6 font-montserrat fw-700 text-center text-black">
                  Bus
                </p>
              </Link>
            </div>
            <div className="col-6">
              <div className="svg-container">
                <Image loader={myLoader}
                  src={VanSection}
                  alt="svg-container"
                  className="h-auto w-75"
                // height="100%"
                // width="75%"
                />
              </div>
              <p className="fs-6 font-montserrat fw-700 text-center text-black">
                Van
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VehicleDeliverySection;
