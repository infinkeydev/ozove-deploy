"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
function BannerSection() {
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
  return (
    <>
      <div className="businessbanner_section d-flex align-items-center">
        <div className="container">
          <div className="first_div px-lg-5">
            <div className="second_div px-3">
              <h1 className="ride_individual_title mb-3">
                Corporate travel, <br />
                simplified!
              </h1>
              <p className="ride_individual_subtitle my-3">
                The Smart Choice for <br />
                Business Rides
              </p>
              <button>
                <Link href={`/launch`} target="_blank" className="text-dark">
                  Register now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerSection;
