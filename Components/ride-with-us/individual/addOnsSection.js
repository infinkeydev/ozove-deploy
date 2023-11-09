"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AddMoreVehicles from "../../../public/Images/ride_with_us/ride_individual/addMore.png"
import UPCSplitFare from "../../../public/Images/ride_with_us/ride_individual/upc.png"
import DisabilitySupportDriver from "../../../public/Images/ride_with_us/ride_individual/disability.png"
import PartyVan from "../../../public/Images/ride_with_us/ride_individual/party.png"
import LuggageTrailer from "../../../public/Images/ride_with_us/ride_individual/luggage.png"
import BookbyHour from "../../../public/Images/ride_with_us/ride_individual/bookBy.png"
import AddOns1 from "../../../public/svg/ride_with_us/Ride_Indivisual/Add_Ons.svg";
import AddOns2 from "../../../public/svg/ride_with_us/Ride_Indivisual/Add_Ons1.svg";
import AddOns3 from "../../../public/svg/ride_with_us/Ride_Indivisual/Add_Ons2.svg";
import AddOns4 from "../../../public/svg/ride_with_us/Ride_Indivisual/Add_Ons3.svg";
import AddOns5 from "../../../public/svg/ride_with_us/Ride_Indivisual/Add_Ons4.svg";
import AddOns6 from "../../../public/svg/ride_with_us/Ride_Indivisual/Add_Ons5.svg";
function AddOnsSection() {
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
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <div className="mainaddonssection bg-extralightwhite">
      <div className="container">
        <div className="addonssection section-spacer px-4">
          <div className="row">
            <div className="col-12">
              <p className="addonstitle">Add-Ons</p>
              {isMobile ? (
                <p className="adons_description1">
                  Choose Oz Ove for a transportation experience that goes above and beyond. Expect the extraordinary.
                </p>
              ) : (
                <p className="adons_description1">
                  Choose Oz Ove for a transportation experience that goes above
                  and beyond. <br />
                  Expect the extraordinary.
                </p>
              )}
            </div>
          </div>
          <div className={isMobile ? "row my-4 addons_inner_section flex-nowrap" : "row my-4 addons_inner_section flex-wrap"}>
            <div className="col-lg-4 col-md-6 col-11 m-3 m-lg-0 py-3" style={{backgroundColor: isMobile ? "#fff" : ""}}>
              <div className="adons_description">
                <div className="row mx-0 align-items-center">
                  <div className="col-md-3 d-flex justify-content-lg-center px-0">
                    <Image loader={myLoader} className="h-auto object-fit-contain" src={AddMoreVehicles} alt="AddMoreVehicles" style={{ width: isMobile ? "15%" : "80%" }} />
                  </div>
                  <div className="col-md-9 px-0">
                    <p className="addonstitles text-capitalize">
                      Add More Vehicles
                    </p>
                    <p className="addonsdesc text-capitalize">
                      More the Merrier - Need more space?
                      <br />
                      Book multiple vehicles in a single booking
                      <br />
                      to accommodate everyone in your group
                      <br />
                      comfortably.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-11 m-3 m-lg-0 py-3" style={{backgroundColor: isMobile ? "#fff" : ""}}>
              <div className="adons_description">
                <div className="row mx-0 align-items-center">
                  <div className="col-md-3 d-flex justify-content-lg-center px-0">
                    <Image loader={myLoader} className="h-auto object-fit-contain" src={UPCSplitFare} alt="UPCSplitFare" style={{ width: isMobile ? "15%" : "80%" }} />
                  </div>
                  <div className="col-md-9 px-0">
                    <p className="addonstitles text-capitalize">
                      UPC Split Fare
                    </p>
                    <p className="addonsdesc text-capitalize">
                      Share the Fare - No need to handle
                      <br />
                      messy IOUs after your group ride. With
                      <br />
                      our UPC Split Fare add-on, share the
                      <br />
                      cost evenly among your group easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-11 m-3 m-lg-0 py-3" style={{backgroundColor: isMobile ? "#fff" : ""}}>
              <div className="adons_description">
                <div className="row mx-0 align-items-center">
                  <div className="col-md-3 d-flex justify-content-lg-center px-0">
                    <Image loader={myLoader} className="h-auto object-fit-contain" src={DisabilitySupportDriver} alt="DisabilitySupportDriver" style={{ width: isMobile ? "15%" : "80%" }} />
                  </div>
                  <div className="col-md-9 px-0">
                    <p className="addonstitles text-capitalize">
                      Disability Support Driver
                    </p>
                    <p className="addonsdesc text-capitalize">
                      Supportive Journey - Travel without barriers. Our
                      <br />
                      Disability Support Driver add-on provides special
                      <br />
                      assistance for passengers with disabilities,
                      <br />
                      ensuring a smooth and comfortable ride.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-11 m-3 m-lg-0 py-3" style={{backgroundColor: isMobile ? "#fff" : ""}}>
              <div className="adons_description">
                <div className="row mx-0 align-items-center">
                  <div className="col-md-3 d-flex justify-content-lg-center px-0">
                    <Image loader={myLoader} className="h-auto object-fit-contain" src={PartyVan} alt="PartyVan" style={{ width: isMobile ? "15%" : "80%" }} />
                  </div>
                  <div className="col-md-9 px-0">
                    <p className="addonstitles text-capitalize">Party Van</p>
                    <p className="addonsdesc text-capitalize">
                      On-The-Go Party - Take the celebration on
                      <br />
                      the road with our Party Van add-on. Enjoy
                      <br />
                      high-quality sound and fun party lights
                      <br />
                      while you travel to your destination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-11 m-3 m-lg-0 py-3" style={{backgroundColor: isMobile ? "#fff" : ""}}>
              <div className="adons_description">
                <div className="row mx-0 align-items-center">
                  <div className="col-md-3 d-flex justify-content-lg-center px-0">
                    <Image loader={myLoader} className="h-auto object-fit-contain" src={LuggageTrailer} alt="LuggageTrailer" style={{ width: isMobile ? "15%" : "80%" }} />
                  </div>
                  <div className="col-md-9 px-0">
                    <p className="addonstitles text-capitalize">
                      Luggage Trailer
                    </p>
                    <p className="addonsdesc text-capitalize">
                      Travel hassle-free with our Luggage Trailer
                      <br />
                      add-on! Ample space for all your essentials,
                      <br />
                      so you can enjoy the journey worry-free.
                      <br />
                      Your items will be safely stowed away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-11 m-3 m-lg-0 py-3" style={{backgroundColor: isMobile ? "#fff" : ""}}>
              <div className="adons_description">
                <div className="row mx-0 align-items-center">
                  <div className="col-md-3 d-flex justify-content-lg-center px-0">
                    <Image loader={myLoader} className="h-auto object-fit-contain" src={BookbyHour} alt="BookbyHour" style={{ width: isMobile ? "15%" : "80%" }} />
                  </div>
                  <div className="col-md-9 px-0">
                    <p className="addonstitles text-capitalize">Book by Hour</p>
                    <p className="addonsdesc text-capitalize">
                      You can book a vehicle for a set period of
                      <br />
                      time, so you don&apos;t have to worry about
                      <br />
                      waiting for public transportation or hailing
                      <br />
                      taxis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOnsSection;
