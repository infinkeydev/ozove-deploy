"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import projectBackgroundImg from "../../public/Images/pilot_launch/Rectangle776.png";

function Acknowledgement() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 768) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet);
      }
    }
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="acknowledgement_section">
        {!isMobile ? (
          <>
            <div className="row acknowledge_section align-items-center justify-content-start">
              <div className="container section-spacer">
                <div className="row mx-0 w-100">
                  <div className="col-lg-6">
                    <div className={`left_side mt-5 `}>
                      <p className="acknowledge_title">
                        Acknowledgement of country
                      </p>
                      <p className="acdescrption mt-2">
                        Oz Ove recognizes the First Nations people of this country
                        and pays respect to their Elders, past, present, and future.
                        We deeply value their cultural, spiritual, and educational
                        practices and strive to learn from their ways of working. We
                        are honored and grateful for the privilege to maintain our
                        presence on this land.
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    {/* <Image loader={myLoader} src={projectBackgroundImg} alt="" /> */}

                    {/* <Image loader={myLoader} src={Rectangle} alt="Rectangle" /> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container section-spacer px-3">
              <div className="row acknowledge_sections w-100 align-items-center justify-content-start card mx-0 py-3">
                <div className={`project_bg_section`}>
                  <Image loader={myLoader} src={projectBackgroundImg} alt="projectBackgroundImg" className="w-100 object-fit-contain h-100" />
                </div>
                <div className="col-lg-6">
                  <div className={`left_side`}>
                    <p className="acknowledge_title">
                      Acknowledgement of country
                    </p>
                    <p className="acdescrption mt-2">
                      Oz Ove recognizes the First Nations people of this country
                      and pays respect to their Elders, past, present, and future.
                      We deeply value their cultural, spiritual, and educational
                      practices and strive to learn from their ways of working. We
                      are honored and grateful for the privilege to maintain our
                      presence on this land.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Acknowledgement;
