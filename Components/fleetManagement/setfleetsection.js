"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Mokup from "../../public/Images/fleet_management/mokup-OzOve.png";
import One from "../../public/Images/apply_to_drive/one.png"
import Two from "../../public/Images/apply_to_drive/two.png"
import Three from "../../public/Images/apply_to_drive/three.png"
import Four from "../../public/Images/apply_to_drive/four.png"
import Five from "../../public/Images/apply_to_drive/five.png"
import Six from "../../public/Images/apply_to_drive/six.png"
import Seven from "../../public/Images/apply_to_drive/seven.png"
function Setfleetsection() {
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
    <div className="main_setfleetsection py-2 py-lg-5">
      <div className="container">
        <div className={`${isMobile ? "card" : ""}`} style={{ backgroundColor: isMobile ? "#faad1d40" : "" }}>
          <div className="row my-2 mb-lg-5">
            <div className="col-12 justify-content-center">
              <p className="set_fleet_title">How to set up your Fleet</p>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-md-center">
              <Image loader={myLoader} src={Mokup} alt="Mokup" className={`${isMobile ? "w-100" : "w-50"} object-fit-contain mokup`} />
            </div>
            <div className="col-lg-6 mainswiper_fleet_section d-flex justify-content-center flex-column">
              <div className="swiper_fleet_section d-flex align-items-center opacity-25">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={One} alt="One" style={{ width: isMobile ? "6%" : "4%" }} />
                <p className="ms-2 me-2 fleet_demo_title my-lg-3">
                  Register as a Fleet owner
                </p>
              </div>
              <div className="swiper_fleet_section d-flex align-items-center">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={Two} alt="Two" style={{ width: isMobile ? "6%" : "4%" }} />
                <p className="ms-2 me-2 fleet_demo_title my-lg-3">
                  Log in as a Fleet owner
                </p>
              </div>
              <div className="swiper_fleet_section d-flex align-items-center opacity-25">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={Three} alt="Three" style={{ width: isMobile ? "6%" : "4%" }} />
                <p className="ms-2 me-2 fleet_demo_title my-lg-3">
                  Register your vehicles
                </p>
              </div>
              <div className="swiper_fleet_section d-flex align-items-center opacity-25">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={Four} alt="Four" style={{ width: isMobile ? "6%" : "4%" }} />
                <p className="ms-2 me-2 fleet_demo_title my-lg-3">
                  Get your vehicles approved
                </p>
              </div>
              <div className="swiper_fleet_section d-flex align-items-center opacity-25">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={Five} alt="Five" style={{ width: isMobile ? "6%" : "4%" }} />
                <p className="ms-2 me-2 fleet_demo_title my-lg-3">
                  Register your drivers
                </p>
              </div>
              <div className="swiper_fleet_section d-flex align-items-center opacity-25">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={Six} alt="Six" style={{ width: isMobile ? "6%" : "4%" }} />
                <p className="ms-2 me-2 fleet_demo_title my-lg-3">
                  Get your drivers approved
                </p>
              </div>
              <div className="swiper_fleet_section d-flex align-items-center opacity-25">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={Seven} alt="Seven" style={{ width: isMobile ? "6%" : "4%" }} />
                <p className="ms-2 me-2 fleet_demo_title my-lg-3">
                  Pair your drivers and vehicles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setfleetsection;
