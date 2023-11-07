"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SetDeliveryRoute from "../../../public/Images/ride_with_us/ride_individual/setdeliveryRoute.png"
import ChooseService from "../../../public/Images/ride_with_us/ride_individual/chooseService.png"
import SelectVehicleType from "../../../public/Images/ride_with_us/ride_individual/selectVehicleType.png"
import PersonaliseAddOns from "../../../public/Images/ride_with_us/ride_individual/peronaliseAdd.png"
import Confirm from "../../../public/Images/ride_with_us/ride_individual/confirm.png"
import TrackDriverInRealTime from "../../../public/Images/ride_with_us/ride_individual/trackDriver.png"
import Frma1 from "../../../public/svg/ride_with_us/Ride_Indivisual/frame1.svg";
import Frma2 from "../../../public/svg/ride_with_us/Ride_Indivisual/frame2.svg";
import Frma3 from "../../../public/svg/ride_with_us/Ride_Indivisual/frame3.svg";
import Frma4 from "../../../public/svg/ride_with_us/Ride_Indivisual/frame4.svg";
import Frma5 from "../../../public/svg/ride_with_us/Ride_Indivisual/frame5.svg";
import Frma6 from "../../../public/svg/ride_with_us/Ride_Indivisual/frame6.svg";

function HowitsWork() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth >= 767 || window.innerWidth <= 1024) {
        setIsTablet(!isTablet);
      }
    }
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="bg-grey">
        <div className="howitsworkpage bg-grey container py-4">
          <div className="row">
            <div className="col-12">
              <p className="howitsworktitle">How it works</p>
              <p className="howitsworkdesc mt-2">
                Experience the Revolution of Oz Ove&apos;s Unparalleled On-Demand
                Group Transportation
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="howitworkcard px-1">
              <div className="howitsworksection d-flex justify-content-center flex-column align-items-center my-3 py-5">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={SetDeliveryRoute} alt="SetDeliveryRoute" style={{ width: "18%" }} />
                <p className="innerhowitsworkdesc mt-2">Set Delivery Route</p>
              </div>
            </div>
            <div className="howitworkcard px-1">
              <div className="howitsworksection d-flex justify-content-center flex-column align-items-center my-3 py-5">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={ChooseService} alt="ChooseService" style={{ width: "18%" }} />
                <p className="innerhowitsworkdesc mt-2">Choose service</p>
              </div>
            </div>
            <div className="howitworkcard px-1">
              <div className="howitsworksection d-flex justify-content-center flex-column align-items-center my-3 py-5">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={SelectVehicleType} alt="SelectVehicleType" style={{ width: "18%" }} />
                <p className="innerhowitsworkdesc mt-2">Select Vehicle Type</p>
              </div>
            </div>
            <div className="howitworkcard px-1">
              <div className="howitsworksection d-flex justify-content-center flex-column align-items-center my-3 py-5">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={PersonaliseAddOns} alt="PersonaliseAddOns" style={{ width: "18%" }} />
                <p className="innerhowitsworkdesc mt-2">Personalise Add-Ons</p>
              </div>
            </div>
            <div className="howitworkcard px-1">
              <div className="howitsworksection d-flex justify-content-center flex-column align-items-center my-3 py-5">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={Confirm} alt="Confirm" style={{ width: "18%" }} />
                <p className="innerhowitsworkdesc mt-2">Confirm</p>
              </div>
            </div>
            <div className="howitworkcard px-1">
              <div className="howitsworksection d-flex justify-content-center flex-column align-items-center my-3 py-5">
                <Image loader={myLoader} className="h-auto object-fit-contain" src={TrackDriverInRealTime} alt="TrackDriverInRealTime" style={{ width: "18%" }} />
                <p className="innerhowitsworkdesc mt-2">
                  Track Driver in Real Time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowitsWork;
