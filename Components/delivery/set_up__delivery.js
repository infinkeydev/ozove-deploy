"use client";
import React from "react";
import Image from "next/image";
import DeliverySetUp from "../../public/Images/delivery/set_up_delivery.png"
import One from "../../public/Images/delivery/one.png"
import Two from "../../public/Images/delivery/two.png"
import Three from "../../public/Images/delivery/three.png"
import Four from "../../public/Images/delivery/four.png"
import Five from "../../public/Images/delivery/five.png"
import Link from "next/link";

function SetupDelivery() {
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="py-4 set_up_delivery">
        <div className="container">
          <div className="d-flex justify-content-center text-center">
            <p className="text-capitalize text-dark fw-bold fs-2">Set up a delivery in just a few simple steps</p>
          </div>
          <div className="row w-100 mx-0 py-2 pt-lg-4 pb-lg-5">
            <div className="col-md-5 d-flex justify-content-center justify-content-lg-end">
              <Image loader={myLoader} className="h-auto object-fit-contain" style={{ width: "40%" }} src={DeliverySetUp} alt="deliverySeyUp" />
            </div>
            <div className="col-md-7 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex flex-column justify-content-center my-3 my-lg-0">
                <div className="d-flex flex-row my-lg-2 align-items-center">
                  <Image loader={myLoader} className=" me-2 h-auto object-fit-contain" src={One} alt="One" style={{ width: "5.2%" }} />
                  <div className="set-up-text">
                    <div className="text-black fs-6">Add up to 10 delivery stop location</div>
                  </div>
                </div>
                <div className="d-flex flex-row my-lg-2 align-items-center">
                  <Image loader={myLoader} className=" me-2 h-auto object-fit-contain" src={Two} alt="Two" style={{ width: "5.2%" }} />
                  <div className="set-up-text">
                    <div className="text-black fs-6">Input your delivery pick-up and drop-off locations</div>
                  </div>
                </div>
                <div className="d-flex flex-row my-lg-2 align-items-center">
                  <Image loader={myLoader} className=" me-2 h-auto object-fit-contain" src={Three} alt="Three" style={{ width: "5.2%" }} />
                  <div className="set-up-text">
                    <div className="text-black fs-6">Choose the right vehicle for your need</div>
                  </div>
                </div>
                <div className="d-flex flex-row my-lg-2 align-items-center">
                  <Image loader={myLoader} className=" me-2 h-auto object-fit-contain" src={Four} alt="Four" style={{ width: "5.2%" }} />
                  <div className="set-up-text">
                    <div className="text-black fs-6">Get instant pricing information before you place your order</div>
                  </div>
                </div>
                <div className="d-flex flex-row my-lg-2 align-items-center">
                  <Image loader={myLoader} className=" me-2 h-auto object-fit-contain" src={Five} alt="Five" style={{ width: "5.2%" }} />
                  <div className="set-up-text">
                    <div className="text-black fs-6">Track your order in real time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button className="bg-yellow py-2 px-3 rounded text-white fw-600 fs-12">
              <Link href={`/home`} target="_blank" className="text-white">
                Download app now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetupDelivery;
