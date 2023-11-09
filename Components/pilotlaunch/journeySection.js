"use client";
import React, { useState, useEffect } from "react";
import BlackArrow from "../../public/Images/pilot_launch/blackArrow.png"
import PilotForm from "../../Components/forms/pilot";
import PilotLogo from "../../public/svg/pilotlogo.svg";
import Journey from "../../public/Images/pilot_launch/journey.png"
import Image from "next/image";
import PilotFormI from "../../public/Images/pilot_launch/bannerFrame.png";

function JourneySection() {
  const [ispilotForm, setIspilotForm] = useState(false);
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

  const toggleDropdown = () => {
    setIspilotForm(!isOpen);
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div className={`${isTablet ? "" : "bg-socialiconyellow"}`}>
        <div className="outer_journey_section">
          <div className="main_journey_section">
            <div className="container section-spacer">
              <div className="row">
                <div className="col-7">
                  <p className="journey_title mb-3">
                    Your Ticket to Tomorrow&apos;s Transport Today! Let&apos;s redefine
                    commuting
                  </p>
                  <div className="row mx-0 w-100">
                    <div className="col-5 px-0">
                      <p className="dropdown_title_name">
                        Start Your Journey As
                      </p>
                    </div>
                    <div className="col-6 px-0">
                      <div className={`${ispilotForm ? "d-none" : "d-block"}`}>
                        <div
                          className="driver_tab d-flex align-items-center justify-content-center"
                          data-bs-toggle="collapse"
                          href="#pilotformtransition"
                          role="button"
                          aria-expanded="false"
                          // aria-expanded={!ispilotForm}
                          aria-controls="pilotformtransition"
                        >
                          <p className="abc py-1 text-nowrap">Driver Partner</p>
                          <Image loader={myLoader} className="object-fit-contain h-auto ms-3" style={{ width: "8%" }} src={BlackArrow} alt="BlackArrow" />
                        </div>
                        <div
                          className="collapse driver_tab collapse"
                          id="pilotformtransition"
                        >
                          <p
                            className="abc py-2"
                            data-bs-toggle="collapse"
                            href="#pilotformtransition"
                            role="button"
                            aria-expanded="false"
                            // aria-expanded={!ispilotForm}
                            aria-controls="pilotformtransition"
                            onClick={() => {
                              setIspilotForm(true);
                            }}
                          >
                            Individual
                          </p>
                          <p
                            className="abc py-2"
                            data-bs-toggle="collapse"
                            href="#pilotformtransition"
                            role="button"
                            aria-expanded="false"
                            // aria-expanded={!ispilotForm}
                            aria-controls="pilotformtransition"
                            onClick={() => {
                              setIspilotForm(true);
                            }}
                          >
                            Business
                          </p>
                          <p
                            className="abc py-2"
                            data-bs-toggle="collapse"
                            href="#pilotformtransition"
                            role="button"
                            aria-expanded="false"
                            // aria-expanded={!ispilotForm}
                            aria-controls="pilotformtransition"
                            onClick={() => {
                              setIspilotForm(true);
                            }}
                          >
                            Fleet Management
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${!ispilotForm
                          ? "d-none"
                          : "d-block pilotformtransition pilotformtransition collapse"
                          }`}
                      // id="pilotformtransition"
                      >
                        <div
                          className="pilotformSection"
                        // id="pilotformtransition"
                        >
                          <div
                            className="d-flex justify-content-center my-3 cursor-pointer"
                            onClick={() => {
                              setIspilotForm(false); // Close the form
                            }}
                          >
                            <PilotLogo
                              style={{
                                height: "40%",
                                width: "50%",
                                textAlign: "center",
                              }}
                            />
                          </div>
                          <div className="px-3">
                            <p className="fw-700 text-black">Register</p>
                            <p className="border-yellow w-50"></p>
                          </div>
                          <PilotForm />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-5">
                  <Image src={Journey} />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="mobilejourneysection bg-socialiconyellow card border-0">
            <div className="main_journey_section">
              <div className="row mx-0 justify-content-center w-100">
                <div className="col-12 px-0 d-flex justify-content-center">
                  <Image loader={myLoader} className="w-100 journey_img" src={Journey} alt="pilotform" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="journey_title text-capitalize text-white">
                    Your Ticket to Tomorrow&apos;s Transport Today! Let&apos;s redefine
                    commuting
                  </p>
                  <div className="mx-0 row">
                    <div className="col-12 px-0">
                      <p className="dropdown_title_name text-white fs-30 fw-600">Start Your Journey As</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <div className="pilotformSection bg-white card border-0">
                    <div>
                      <p className="text-black text-capitalize fs-30 fw-600 px-3">sign up</p>
                    </div>
                    <div className="px-3">
                      <p className="fw-600 text-black">Register As</p>
                    </div>
                    <PilotForm />
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

export default JourneySection;
