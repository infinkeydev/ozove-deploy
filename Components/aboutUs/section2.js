"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Introduction from "../../public/Images/about_us/introduction.png"

function SectionTwo() {
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
      <div className="py-lg-5 about_us_introduction">
        <div className={`container`}>
          <div className={`${isMobile ? "card pt-2 pb-3 px-2 my-3" : "py-5"}`}>
            <div className="row w-100 mx-0 align-items-center">
              <div className="col-lg-5 d-flex justify-content-center px-0">
                <Image loader={myLoader} className="object-fit-contain h-100" style={{ width: isMobile ? "100%" : "95%" }} src={Introduction} alt="Introduction" />
              </div>
              <div className="col-lg-7 px-0">
                <div className="my-3">
                  <h2 className="intro_head">Introduction</h2>
                </div>
                <div className="intro_width">
                  <p className="intro_desc">OZ OVE is a trailblazing force in Australia&apos;s mobility and logistics sector.</p>
                  <p className="intro_desc">We&apos;re a technology-driven marketplace that serves as the bridge between traditional mobility service providers and the needs of the modern customer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
