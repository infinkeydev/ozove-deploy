"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Versatility from "../../public/Images/delivery/versatility.png";
import Reporting from "../../public/Images/delivery/controlandreporting.png";
import AddUser from "../../public/Images/delivery/addUsers.png";
import Nousagefee from "../../public/Images/delivery/noUsageFee.png";
import ClosingDoc from "../../public/Images/delivery/closing.png"
import FlexFleet from "../../public/Images/delivery/flexYourFleet.png";

function AdvantagesSection() {
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
    <>
      <div className="Advantages_Section section-spacer bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="corporate_title">
                Our corporate account advantages
              </p>
            </div>
          </div>
          <div className="row flex-wrap align-items-center">
            <div
              className={`col-lg-4 col-6 col-md-6 ${isMobile ? "px-1 my-1" : "my-4"
                }`}
            >
              <div
                className={`inner_advantage_section flex-column ${isMobile ? "px-1 py-2" : "py-5 px-4"
                  }`}
              >
                <Image loader={myLoader} style={{width: isMobile ? "20%" : "12%"}} className="h-auto object-fit-contain" src={Versatility} alt="Versatility" />
                <p className=" main_title">versatility</p>
                <p className="advantage_description">
                  Customized to your business needs.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-4 col-6 col-md-6 ${isMobile ? "px-1 my-1" : "my-4"
                }`}
            >
              <div
                className={`inner_advantage_section flex-column ${isMobile ? "px-1 py-2" : "py-5 px-4"
                  }`}
              >
                <Image loader={myLoader} style={{width: isMobile ? "15%" : "12%"}} className="h-auto object-fit-contain" src={Reporting} alt="Reporting" />
                <p className=" main_title">Control & reporting</p>
                <p className="advantage_description">
                  All documentation and all settings are in one personal
                  account.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-4 col-6 col-md-6 ${isMobile ? "px-1 my-1" : "my-4"
                }`}
            >
              <div
                className={`inner_advantage_section flex-column ${isMobile ? "px-1 py-2" : "py-5 px-4"
                  }`}
              >
                <Image loader={myLoader} style={{width: isMobile ? "15%" : "12%"}} className="h-auto object-fit-contain" src={AddUser} alt="AddUser" />
                <p className=" main_title">Add users</p>
                <p className="advantage_description">
                  Easily add or remove users.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-4 col-6 col-md-6 ${isMobile ? "px-1 my-1" : "my-4"
                }`}
            >
              <div
                className={`inner_advantage_section flex-column ${isMobile ? "px-1 py-2" : "py-5 px-4"
                  }`}
              >
                <Image loader={myLoader} style={{width: isMobile ? "20%" : "12%"}} className="h-auto object-fit-contain" src={Nousagefee} alt="Nousagefee" />
                <p className=" main_title">no usage fee</p>
                <p className="advantage_description">
                  No extra charges for usage
                </p>
              </div>
            </div>
            <div
              className={`col-lg-4 col-6 col-md-6 ${isMobile ? "px-1 my-1" : "my-4"
                }`}
            >
              <div
                className={`inner_advantage_section flex-column ${isMobile ? "px-1 py-2" : "py-5 px-4"
                  }`}
              >
                <Image loader={myLoader} style={{width: isMobile ? "15%" : "12%"}} className="h-auto object-fit-contain" src={ClosingDoc} alt="ClosingDoc" />
                <p className=" main_title">Closing documents </p>
                <p className="advantage_description">
                  Every month, the service, automatically sends closing
                  documents.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-4 col-6 col-md-6 ${isMobile ? "px-1 my-1" : "my-4"
                }`}
            >
              <div
                className={`inner_advantage_section flex-column ${isMobile ? "px-1 py-2" : "py-5 px-4"
                  }`}
              >
                <Image loader={myLoader} style={{width: isMobile ? "20%" : "12%"}} className="h-auto object-fit-contain" src={FlexFleet} alt="FlexFleet" />
                <p className=" main_title">Flex Your Fleet Up and Down</p>
                <p className="advantage_description">
                  Add or remove vehicles as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvantagesSection;
