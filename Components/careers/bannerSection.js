"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import Frame1 from "../../public/svg/whywork/Frame1.svg";
import Frame2 from "../../public/svg/whywork/Frame2.svg";
import Frame3 from "../../public/svg/whywork/Frame3.svg";
import Frame4 from "../../public/svg/whywork/Frame4.svg";
import Link from "next/link";

function SectionOne() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
    }
  }, []);
  return (
    <>
      <div className="careersbanner_banner">
        <div className="container">
          <div className="row w-100 banner_row mx-0 align-items-center py-lg-5">
            <div className="col-lg-7 py-lg-5 ">
              <h1 className="career_title">
                Join the
                <br />
                <span className={`${isMobile ? "text-white" : "text-socialiconyellow"}`}>OZ OVE </span>
                Team
              </h1>
              <p className="my-3 careers_desc">
                Shape the Future of Mobility <br />
                and Logistics
              </p>
              {/* <p className="Passionate_description pb-3 d-none d-lg-block">
                Passionate about innovation? Looking to make a
                <br />
                difference? OZ OVE is the place for you! We&apos;re a dynamic
                <br />
                group of entrepreneurs, innovators, and problem-solvers
                <br />
                dedicated to reshaping the landscape of logistics and
                <br />
                ride-sharing. We thrive on the potential of what&apos;s
                <br />
                possible and have fun turning ideas into reality.
              </p> */}
              <div>
                <button className="applybtn py-2 bg-socialiconyellow px-4 py-2">
                  <Link href={`/launch`} target="_blank" className="text-white">
                    apply Now
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-5 mx-0 px-0 right_side">
            {/* <BannerForm /> */}
          </div>
        </div>
      </div>
      <div className="whyworktitlesection">
        <div className="py-lg-5">
          <div className="container">
            {isMobile ? (
              <>
                <p className="whyworkttitle">
                  Why Choose Us
                </p>
                <p className="fs-14 fw-600 text-capitalize text-black mt-2">
                  Oz Ove Business Account Transform Your Corporate Travel
                </p>
              </>
            ) : (
              <p className="whyworkttitle">Why Work With Us?</p>
            )}
            <div className={`${isMobile ? "row" : "row my-4"}`}>
              <div className="col-lg-3 col-6 whycolumn ps-0 px-lg-2">
                <div className="why_work_section py-4 px-3">
                  <Frame1
                    style={{ height: "50%", width: "50%" }}
                    className="whyworksvg"
                  />
                  <p className="whyworktitle my-2">Innovation at the Core</p>
                  {isMobile ? (
                    <p className="whyworkdescription my-2">
                      At OZ OVE, we constantly
                      <br />
                      innovate, creating
                      <br />
                      transformative solutions
                      <br />
                      that push the boundaries
                      <br />
                      of mobility and logistics.
                    </p>
                  ) : (
                    <p className="whyworkdescription my-2">
                      At OZ OVE, we constantly innovate,
                      <br />
                      creating transformative solutions that
                      <br />
                      push the boundaries of mobility and
                      <br />
                      logistics.
                    </p>
                  )}
                </div>
              </div>
              <div className="col-lg-3 col-6 whycolumn pe-0 px-lg-2">
                <div className="why_work_section py-4 px-3">
                  <Frame2
                    style={{ height: "50%", width: "50%" }}
                    className="whyworksvg"
                  />
                  <p className="whyworktitle my-2">Empowering Culture</p>
                  {isMobile ? (
                    <p className="whyworkdescription my-2">
                      We foster an inclusive,
                      <br />
                      collaborative, and
                      <br />
                      empowering culture
                      <br />
                      where everyone&apos;s voice
                      <br />
                      matters
                    </p>
                  ) : (
                    <p className="whyworkdescription my-2">
                      We foster an inclusive,
                      <br />
                      collaborative, and empowering
                      <br />
                      culture where everyone&apos;s voice
                      <br />
                      matters
                    </p>
                  )}
                </div>
              </div>
              <div className="col-lg-3 col-6 whycolumn ps-0 px-lg-2">
                <div className="why_work_section py-4 px-3">
                  <Frame3
                    style={{ height: "50%", width: "50%" }}
                    className="whyworksvg"
                  />
                  <p className="whyworktitle my-2">Continuous Learning</p>
                  {isMobile ? (
                    <p className="whyworkdescription my-2">
                      We believe in constant
                      <br />
                      learning and provide
                      <br />
                      numerous opportunities
                      <br />
                      for professional growth
                    </p>
                  ) : (
                    <p className="whyworkdescription my-2">
                      We believe in constant learning
                      <br />
                      and provide numerous
                      <br />
                      opportunities for professional
                      <br />
                      growth
                    </p>
                  )}
                </div>
              </div>
              <div className="col-lg-3 col-6 whycolumn pe-0 px-lg-2">
                <div className="why_work_section py-4 px-3">
                  <Frame4
                    style={{ height: "50%", width: "50%" }}
                    className="whyworksvg"
                  />
                  <p className="whyworktitle my-2">Making a Difference</p>
                  <p className="whyworkdescription my-2">
                    Our work impacts millions,
                    <br />
                    making their lives easier and
                    <br />
                    their businesses more efficient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
