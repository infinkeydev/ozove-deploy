"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SignUpForPilot from "../../public/Images/about_us/signUpForPilot.png"
import Link from "next/link";

function SectionSeven() {
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
      <div className="py-3 py-lg-5 about_section_7">
        <div className={`container`}>
          <div className={`${isMobile ? "card" : "py-2"}`}>
            <div className="row w-100 mx-0 align-items-center px-lg-5">
              <div className="px-0" style={{ width: isMobile ? "100%" : "47%" }}>
                <div>
                  <Image loader={myLoader} className="h-100" src={SignUpForPilot} alt="SignUpForPilot" style={{ width: isMobile ? "100%" : "95.5%", objectFit: isMobile ? "" : "contain" }} />
                </div>
              </div>
              <div className="px-0" style={{ width: isMobile ? "100%" : "53%" }}>
                <div>
                  {isMobile ? (
                    <p className="about_7_desc my-2">
                      Join us on our journey as we continue to shape the future of
                      <br />
                      mobility and logistics in Australia. With OZ OVE, you are not just
                      <br />
                      choosing a service, you're choosing a partner that puts your needs
                      <br />
                      first.
                    </p>
                  ) : (
                    <p className="about_7_desc my-2">
                      Join us on our journey as we continue to shape the
                      <br />
                      future of mobility and logistics in Australia. With OZ
                      <br />
                      OVE, you are not just choosing a service, you're
                      <br />
                      choosing a partner that puts your needs first.
                    </p>
                  )}
                  <p className="about_7_head my-2">Sign up for pilot launch</p>
                </div>
                <div>
                  <button className="bg-socialiconyellow text-white fw-600 rounded-1 px-5 px-lg-4 py-2 py-lg-2 my-2">
                    <Link href={`/home`} target="_blank" className="text-white">
                      Sign up
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionSeven;
