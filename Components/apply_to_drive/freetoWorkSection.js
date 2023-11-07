"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "../../public/Images/apply_to_drive/freedomtoworkbanner.png";
import Frame from "../../public/svg/apply_to_drive/Financing1.svg";
import Frame1 from "../../public/svg/apply_to_drive/Financing2.svg";
import Frame2 from "../../public/svg/apply_to_drive/Financing3.svg";
import Frame3 from "../../public/svg/apply_to_drive/Financing4.svg";
function FreetoWorkSection() {
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
      <div className="main_free_to_work_section py-2 py-lg-5 bg-white">
        <div className="container d-flex justify-content-center">
          <div className="innermain_free_to_work_section row mx-0 py-5 align-items-center" style={{ width: isMobile ? " 100%" : "85%" }}>
            <div className="col-md-6 freetoworkbanner">
              <Image loader={myLoader} src={Banner} alt="banner" className="h-auto object-fit-contain" style={{ width: isMobile ? "60%" : "90%" }} />
            </div>
            <div className="col-md-6">
              <div className="w-100 mt-1 mt-lg-4">
                <p className="why_partner_title">
                  Why Partner with
                  <span className="text-socialiconyellow"> Oz</span>ove?
                </p>
                <p className="freedotexttitle">
                  The freedom to work and earn in your own time
                </p>
                <div
                  className={
                    isMobile
                      ? "d-none"
                      : "row mb-4 keysection_inner_section flex-wrap"
                  }
                >
                  <div className="col-12">
                    <div className="row align-items-start inner_freedom_section mb-4 mt-3 flex-nowrap">
                      <div className="col-lg-1 col-3 inner_freedom_svg">
                        <Frame />
                      </div>
                      <div className="col-lg-11 col-9">
                        <p className="inner_freedom_main_title">
                          Maximize Your Earnings
                        </p>
                        <p className="inner_freedom_main_description">
                          Your efforts count at OZ Ove earn more with every ride
                          or delivery you provide.
                        </p>
                      </div>
                    </div>
                    <div className="row align-items-start inner_freedom_section mb-4 flex-nowrap">
                      <div className="col-lg-1 col-3 inner_freedom_svg">
                        <Frame1 />
                      </div>
                      <div className="col-lg-11 col-9">
                        <p className="inner_freedom_main_title">
                          Embrace Entrepreneurship
                        </p>
                        <p className="inner_freedom_main_description">
                          Seize control of your career journey. Pick the ride or
                          delivery orders that align with your preferences
                        </p>
                      </div>
                    </div>
                    <div className="row align-items-start inner_freedom_section mb-4 flex-nowrap">
                      <div className="col-lg-1 col-3 inner_freedom_svg">
                        <Frame2 />
                      </div>
                      <div className="col-lg-11 col-9">
                        <p className="inner_freedom_main_title">
                          Enjoy Unparalleled Flexibility
                        </p>
                        <p className="inner_freedom_main_description">
                          Maintain command over your schedule. Work on your
                          terms, provide services as per your convenience.
                        </p>
                      </div>
                    </div>
                    <div className="row align-items-start inner_freedom_section mb-4 flex-nowrap">
                      <div className="col-lg-1 col-3 inner_freedom_svg">
                        <Frame3 />
                      </div>
                      <div className="col-lg-11 col-9">
                        <p className="inner_freedom_main_title">
                          Experience Swift Payouts
                        </p>
                        <p className="inner_freedom_main_description">
                          Maintain a steady cash flow with our immediate payout
                          system. Your earnings deposited straight to your bank.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    isMobile
                      ? "row freetoworkction_inner_section flex-nowrap mt-4"
                      : "d-none"
                  }
                >
                  <div className="col-7 px-0 me-2">
                    <div className="row align-items-start inner_freedom_section mb-4 py-2 px-2 flex-nowrap">
                      <div className="col-3 inner_freedom_svg">
                        <Frame />
                      </div>
                      <div className="col-9">
                        <p className="inner_freedom_main_title">
                          Maximize
                          <br />
                          Your Earnings
                        </p>
                        <p className="inner_freedom_main_description">
                          Your efforts count at OZ Ove earn more with every ride
                          or delivery you provide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-7 px-0 mx-2">
                    <div className="row align-items-start inner_freedom_section mb-4 py-2 px-2 flex-nowrap">
                      <div className="col-3 inner_freedom_svg">
                        <Frame1 />
                      </div>
                      <div className="col-9">
                        <p className="inner_freedom_main_title">
                          Embrace
                          <br />
                          Entrepreneurship
                        </p>
                        <p className="inner_freedom_main_description">
                          Seize control of your career journey. Pick the ride or
                          delivery orders that align with your preferences
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-7 px-0 mx-2">
                    <div className="row align-items-start inner_freedom_section mb-4 py-2 px-2 flex-nowrap">
                      <div className="col-3 inner_freedom_svg">
                        <Frame2 />
                      </div>
                      <div className="col-9">
                        <p className="inner_freedom_main_title">
                          Enjoy Unparalleled
                          <br />
                          Flexibility
                        </p>
                        <p className="inner_freedom_main_description">
                          Maintain command over your schedule. Work on your
                          terms, provide services as per your convenience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-7 px-0 mx-2">
                    <div className="row align-items-start inner_freedom_section mb-4 py-2 px-2 flex-nowrap">
                      <div className="col-3 inner_freedom_svg">
                        <Frame3 />
                      </div>
                      <div className="col-9">
                        <p className="inner_freedom_main_title">
                          Experience Swift
                          <br />
                          Payouts
                        </p>
                        <p className="inner_freedom_main_description">
                          Maintain a steady cash flow with our immediate payout
                          system. Your earnings deposited straight to your bank.
                        </p>
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

export default FreetoWorkSection;
