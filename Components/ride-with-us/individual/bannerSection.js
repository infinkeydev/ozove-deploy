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
      <div className="individualbanner_section d-flex align-items-center">
        <div className="container">
          <div className="first_div px-lg-5">
            <div className="second_div px-3">
              <h1 className="ride_individual_title mb-3">
                Travel united,
                <br />
                with tailored ease
              </h1>
              <p className="ride_individual_subtitle my-3">
                Customized group rides for
                <br />
                every occasion.
              </p>
              <button>
                <Link href={`/launch`} target="_blank" className="text-dark">
                  Book now
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
