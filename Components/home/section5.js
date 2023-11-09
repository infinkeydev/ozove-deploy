"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bus from "../../public/Images/png/bus.png";
import Delivery from "../../public/Images/png/delivery.png";
import Truck from "../../public/Images/png/truck.png";
import APIImage from "../../public/Images/png/api.png";
import Business from "../../public/Images/png/business.png";
import Boxes from "../../public/Images/png/boxes.png";

function SectionFive() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet);
      }
      if (window.innerWidth <= 1500) {
        setIsLaptop(!isLaptop);
      }
    }
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className={`home-section-5 ${isTablet ? "py-2" : "py-5"}`}>
        <div className="container">
          <div className="sub_container">
            <div className="text-black fs-1 fw-bold d-flex justify-content-start justify-content-lg-center align-items-center text-capitalize">
              Our services
            </div>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="card my-2 my-lg-3 px-0">
                <div className="card-body">
                  <div>
                    <div className="our_service_head">Rides</div>
                    <div className="text-dark our_services_desc">
                      On-Demand group rideshare.
                    </div>
                  </div>
                  <div className="section-5-img mt-1">
                    <Image
                      loader={myLoader}
                      className={`object-fit-contain h-auto `}
                      src={Bus}
                      alt="Bus"
                    />
                  </div>
                </div>
              </div>
              <div className="card my-2 my-lg-3 px-0">
                <div className="card-body">
                  <div>
                    <div className="our_service_head">Delivery</div>
                    <div className="text-dark our_services_desc">
                      Deliver goods on-demand.
                    </div>
                  </div>
                  <div className="section-5-img mt-1">
                    <Image
                      loader={myLoader}
                      className={`object-fit-contain h-auto `}
                      src={Delivery}
                      alt="Delivery"
                    />
                  </div>
                </div>
              </div>
              <div className="card my-2 my-lg-3 px-0">
                <div className="card-body">
                  <div>
                    <div className="our_service_head">Business</div>
                    <div className="text-dark our_services_desc">
                      Your corporate control centre.
                    </div>
                  </div>
                  <div className="section-5-img mt-1">
                    <Image
                      loader={myLoader}
                      className={`object-fit-contain h-auto business-img`}
                      src={Business}
                      alt="Business"
                    />
                  </div>
                </div>
              </div>
              <div className="card my-2 my-lg-3 px-0">
                <div className="card-body">
                  <div>
                    <div className="our_service_head">E-Commerce</div>
                    <div className="text-dark our_services_desc">
                      Integrated hyperlocal forward and reverse logistics.
                    </div>
                  </div>
                  <div className="section-5-img mt-1">
                    <Image
                      loader={myLoader}
                      className={`object-fit-contain h-auto boxes-img`}
                      src={Boxes}
                      alt="Boxes"
                    />
                  </div>
                </div>
              </div>
              <div className="card my-2 my-lg-3 px-0">
                <div className="card-body">
                  <div>
                    <div className="our_service_head">Fleet Management</div>
                    <div className="text-dark our_services_desc">
                      Built for fleet owners, to manage drivers and vehicles
                      more efficiently.
                    </div>
                  </div>
                  <div className="section-5-img mt-1">
                    <Image
                      loader={myLoader}
                      className={`object-fit-contain h-auto truck-img`}
                      src={Truck}
                      alt="Truck"
                    />
                  </div>
                </div>
              </div>
              <div className="card my-2 my-lg-3 px-0">
                <div className="card-body">
                  <div>
                    <div className="our_service_head">API</div>
                    <div className="text-dark our_services_desc">
                      Free API integration services for seamless order
                      placement.
                    </div>
                  </div>
                  <div className="section-5-img mt-1">
                    <Image
                      loader={myLoader}
                      className={`object-fit-contain h-auto api-image`}
                      src={APIImage}
                      alt="APIImage"
                    />
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

export default SectionFive;
