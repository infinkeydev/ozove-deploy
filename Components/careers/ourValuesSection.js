"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OurFirstValue from "../../public/Images/careers/OurValues1.png";
import OurSecondValue from "../../public/Images/careers/OurValues2.png";
import OurThirdValue from "../../public/Images/careers/OurValues3.png";
import OurForthValue from "../../public/Images/careers/OurValues4.png";
function ourValuesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile);
      }
    }
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="bg-grey section-spacer our_values_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="our_values_title">
                our <span className="text-socialiconyellow">values</span>
              </p>
            </div>
          </div>
          <div
            className={
              isMobile
                ? "row mb-4 our_values_section flex-nowrap"
                : "row mb-4 our_values_section flex-wrap mt-3"
            }
          >
            <div className="col-lg-3 col-md-6 col-8">
              <div className="our_valuesSection py-3 px-3">
                <div>
                  <p className="sub_our_values_title">Innovation</p>
                  <p className="our_values_desc my-2 my-lg-5">
                    We challenge the status quo to find new and better ways to
                    move forward.
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <Image loader={myLoader} className="object-fit-contain" src={OurFirstValue} alt="OurFirstValue" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-8">
              <div className="our_valuesSection py-3 px-3">
                <p className="sub_our_values_title">Collaboration</p>
                <p className="our_values_desc my-2 my-lg-5">
                  We believe the best results come from working together.
                </p>
                <div className="d-flex justify-content-center">
                  <Image loader={myLoader} className="object-fit-contain" src={OurSecondValue} alt="OurSecondValue" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-8">
              <div className="our_valuesSection py-3 px-3">
                <p className="sub_our_values_title">Integrity</p>
                <p className="our_values_desc my-2 my-lg-5">
                  We uphold the highest standards of integrity in all of our
                  actions.
                </p>
                <div className="d-flex justify-content-center">
                  <Image loader={myLoader} className="object-fit-contain" src={OurThirdValue} alt="OurThirdValue" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-8">
              <div className="our_valuesSection py-3 px-3">
                <p className="sub_our_values_title">Customer Focus</p>
                <p className="our_values_desc my-2 my-lg-5">
                  Our customers are at the heart of everything we do.
                </p>
                <div className="d-flex justify-content-center">
                  <Image loader={myLoader} className="object-fit-contain" src={OurForthValue} alt="OurForthValue" />
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
