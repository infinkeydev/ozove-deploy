"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomerFocus from "../../public/Images/about_us/customerFocus.png";
import Innovation from "../../public/Images/about_us/innovation.png";
import Empowerment from "../../public/Images/about_us/empowerment.png";
import Inclusion from "../../public/Images/about_us/inclusion.png";
function ourValuesSection() {
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
      <div className={`our_core_values_section ${isMobile ? "" : "py-5 bg-grey"}`}>
        <div className={`container`}>
          <div className={`${isMobile ? "card bg-grey" : ""}`}>
            <div className="m-3 my-lg-3">
              <p className="our_core_values_title">
                our core <span className="text-socialiconyellow">values</span>
              </p>
            </div>
            <div
              className={`${isMobile ? "row mb-4 our_core_values_section flex-nowrap" : "row mb-4 our_core_values_section flex-wrap mt-3"}`}
            >
              <div className="col-lg-3 col-md-6 col-8">
                <div className="our_core_valuesSection py-3 px-3">
                  <div>
                    <p className="our_core_head">Customer Focus</p>
                    <p className="our_core_desc my-3">
                      Our customers are at the
                      <br />
                      heart of everything we do.
                      <br />
                      Their satisfaction is our
                      <br />
                      success."
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Image loader={myLoader} className="h-100 object-fit-contain" src={CustomerFocus} alt="CustomerFocus" style={{width: isMobile ? "75%" : "100%"}}/>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-8">
                <div className="our_core_valuesSection py-3 px-3">
                  <div>
                    <p className="our_core_head">Innovation</p>
                    <p className="our_core_desc my-3">
                      We never stop innovating to
                      <br />
                      create transformative solutions
                      <br />
                      that reshape the landscape of
                      <br />
                      logistics and ride-sharing."
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Image loader={myLoader} className="h-100 object-fit-contain" src={Innovation} alt="Innovation" style={{width: isMobile ? "75%" : "100%"}}/>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-8">
                <div className="our_core_valuesSection py-3 px-3">
                  <div>
                    <p className="our_core_head">Empowerment</p>
                    <p className="our_core_desc my-3">
                      We empower our driver partners
                      <br />
                      and service providers, giving
                      <br />
                      them control over their earnings
                      <br />
                      and opportunities for growth."
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Image loader={myLoader} className="h-100 object-fit-contain" src={Empowerment} alt="Empowerment" style={{width: isMobile ? "75%" : "100%"}}/>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-8">
                <div className="our_core_valuesSection py-3 px-3">
                  <div>
                    <p className="our_core_head">Inclusion</p>
                    <p className="our_core_desc my-3">
                      We're committed to
                      <br />
                      inclusivity, ensuring our
                      <br />
                      platform caters to all users'
                      <br />
                      needs.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Image loader={myLoader} className="h-100 object-fit-contain" src={Inclusion} alt="Inclusion" style={{width: isMobile ? "75%" : "100%"}}/>
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

export default ourValuesSection;

