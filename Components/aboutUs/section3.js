"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OurStory from "../../public/Images/about_us/our_story.png"

function SectionThree() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false)

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 1400) {
        setIsLaptop(!isLaptop);
      }
    }
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className={`about-us-our-story ${isMobile ? "" : "bg-grey"}`}>
        <div className={`container`}>
          <div className={`${isMobile ? "card bg-grey" : ""}`}>
            <div className="row w-100 mx-0 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1 px-0">
                <div className="my-3">
                  <h2 className="about_our_story_head">our story</h2>
                </div>
                <div>
                  <p className="about_our_story_desc">Founded in 2023, we observed the gaps in traditional delivery and ride services. We saw an opportunity to innovate, to combine the best of both worlds and create a seamless, hyperlocal experience that caters to the specific needs of our customers.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 px-0">
                <div>
                  <Image loader={myLoader} className="w-100 h-100 object-fit-contain" src={OurStory} alt="OurStory" style={{ marginBottom: isLaptop ? "0" : "-6.5px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionThree;
