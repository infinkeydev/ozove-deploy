"use client";
import React, { useEffect, useState } from "react";

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
      <div className="blogbannersection">
        <div className="container my-3">
          <div className="blogBannerdesc mx-2">
            {isMobile ? (
              <h1 className="mainblogtitle">
                Revolutionising On-Demand
                <br />
                Delivery: <span className="text-socialiconyellow">
                  The Tech Behind Ozove&apos;s Success
                </span>
              </h1>
            ) : (
              <h1 className="mainblogtitle">
                Revolutionising On-Demand Delivery: <br />
                <span className="text-socialiconyellow">
                  The Tech Behind Ozove&apos;s Success
                </span>
              </h1>
            )}
            {isMobile ? (
              <p className="mainblogdesc mt-2">
                Discover the cutting-edge technological advancements
                <br />
                that have propelled Ozove to the forefront of on-demand
                <br />
                group ride and delivery services.
              </p>
            ) : (
              <p className="mainblogdesc mt-2">
                Discover the cutting-edge technological advancements that have propelled Ozove to the
                <br />
                forefront of on-demand group ride and delivery services. Learn how their innovative 
                <br />
                platform integrates real-time tracking, smart routing algorithms, and seamless user 
                <br />
                interfaces to redefine convenience for customers and businesses alike.
              </p>
            )}
            <div className="d-flex mb-3">
              <div className="blogskey bg-darkgrey mt-2 px-2 py-1 me-2">
                Technology
              </div>
              <div className="blogskey bg-darkgrey mt-2 px-2 py-1 me-2">
                Innovation
              </div>
              <div className="blogskey bg-darkgrey mt-2 px-2 py-1 me-2">
                Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
