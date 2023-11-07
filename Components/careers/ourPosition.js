"use client";
import React, { useState, useEffect } from "react";
import { our_position_section } from "../careers/our_position_section";

function OurPosition() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
    }
  }, []);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <div className="section-spacer our_position_section">
        <div className="container">
          <div className="row mx-0 w-100">
            <div className="col-12">
              {/* {isMobile ? (
                <p className="our_position_title">Coming Soon</p>
              ) : ( */}
                <p className="our_position_title">Coming Soon</p>
              {/* )} */}
            </div>
          </div>
          {/* <div className="mainourpositionresponsive">
            {our_position_section.map((item, index) => (
              <div
                className="row accordion cursor-pointer my-2 scrolldownslownaccordion-body accordion-flush"
                key={index}
                onClick={() => toggleAccordion(index)}
              >
                <div className="col-12 accordion-item px-0 border-0">
                  <div
                    className={`main_section py-3 px-2 accordion-header accordion-button ${index === openIndex ? "" : "collapsed"
                      }`}
                    id={`flush-heading${index}`}
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${index}`}
                    aria-controls={`flush-collapse${index}`}
                    aria-expanded={index === openIndex ? "true" : "false"} // Set aria-expanded based on openIndex
                  >
                    <div className="row justify-content-between">
                      <div className="col-md-12 ">
                        <div className="inner_main_section d-flex justify-content-between mb-2">
                          <div className="position_title d-flex align-items-start justify-content-between">
                            {item.position_title}
                          </div>
                          <div className="inner_btn_section d-flex align-items-start justify-content-between">
                            <button className="details_btn py-2 px-4">
                              {item.details_btn_text}
                            </button>
                            <button className="details_btn ms-2 py-2 px-4 text-capitalize bg-socialiconyellow text-black">
                              {item.apply_btn_text}
                            </button>
                          </div>
                        </div>
                        <div className="inner_border my-4"></div>
                        <p className="positiondescription">
                          {item.postion_description}
                        </p>
                        <div
                          // id={`flush-collapse${index}`}
                          className={`accordion-collapse collapse ${index === openIndex ? "show" : ""
                            }`}
                          // aria-labelledby={`flush-heading${index}`}
                          data-bs-parent="#accordionFlushExample"
                        >
                          <p className="accordion-body scrolldownslownaccordion-body  positiondescription px-0">
                            {item.postion_description_inner}
                          </p>
                        </div>
                        {index === openIndex ? (
                          <p className="seemoretitle my-2 cursor-pointer">
                            {item.see_less_text}
                          </p>
                        ) : (
                          <p className="seemoretitle my-2 cursor-pointer">
                            {item.see_more_text}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default OurPosition;
