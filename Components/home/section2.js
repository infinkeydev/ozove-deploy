"use client";
import React from "react";

function SectionTwo() {
  return (
    <>
      <div className="home_section_2">
        <div className="py-5 future-bg d-none d-lg-flex align-items-center">
          <div className="container py-5">
            <div className="py-5">
              <div className="d-flex flex-column align-items-center text-center">
                <span className="text-uppercase fw-bolder oz_ove text-yellow">Oz Ove</span>
                <h1 className="text-uppercase fw-700 oz_ove_sub text-white">The Future of Transportation</h1>
              </div>
              <div className="oz_ove_desc mt-3 text-center">
                <span className="text-white">Welcome to </span>
                <span className="text-yellow">Oz Ove</span>
                <span className="text-white">, your one-stop solution for smart urban mobility and hyperlocal last-mile delivery in </span>
                <span className="text-yellow">Australia.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-block d-lg-none">
          <div className="d-flex justify-content-evenly py-3">
            <div className="d-flex justify-content-between row w-100 mx-0">
              <div className="mob-section-2-img future-mini d-flex justify-content-center align-items-center rounded px-1">
                <div className="d-flex flex-column align-items-center text-center">
                  <span className="text-uppercase fw-bolder fs-12 text-yellow">Oz Ove</span>
                  <span className="text-uppercase fw-600 fs-12 text-white">The Future of Transportation</span>
                </div>
              </div>
              <div className="mob-section-2-img lead-mini d-flex justify-content-center align-items-center rounded px-1">
                <div className="d-flex flex-column align-items-center text-center">
                  <span className="text-white text-capitalize" style={{ fontSize: '11px' }}>Lead the pack and ride</span>
                  <span className="text-uppercase fw-bolder fs-12 text-yellow">Oz Ove</span>
                  <span className="text-white text-capitalize" style={{ fontSize: '11px' }}>Book for your group today</span>
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
