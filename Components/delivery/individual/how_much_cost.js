"use client";
import React from "react";
import Image from "next/image";
import SmartPhone from "../../../public/Images/delivery/smartphone.png"
import Link from "next/link";

function HowMuchCost() {
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="cost_section pt-5 pb-2 py-lg-5">
        <div className="container">
          <div className="row w-100 mx-0 d-flex align-items-center">
            <div className="col-md-6 order-2 order-lg-1">
              <p className="fs-1 text-capitalize fw-700 my-2">How much does it cost?</p>
              <p className="my-2 how_much_desc">Open the Oz Ove app to get instant pricing details before you place an order.</p>
              <button className="bg-socialiconyellow px-4 py-2 my-3 rounded text-white fw-600 fs-5">
                <Link href={`/home`} target="_blank" className="text-white">
                  Get a quote now
                </Link>
              </button>
            </div>
            <div className="col-md-6 order-1 order-lg-2">
              <Image loader={myLoader} className="w-100 h-100" src={SmartPhone} alt="SmartPhone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowMuchCost;
