"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Frame from "../../public/Images/fleet_management/Frame.png";
import Frame1 from "../../public/Images/fleet_management/Frame1.png";
import Frame2 from "../../public/Images/fleet_management/Frame2.png";
import Frame3 from "../../public/Images/fleet_management/Frame3.png";
function Partnergrow() {
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
      <div className="bg-grey section-spacer partnerGrow_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <p className="partnergrow_title">
                How we{" "}
                <span className="text-socialiconyellow text-capitalize pe-2">
                  help
                </span>
                our <br />
                <span className="text-socialiconyellow text-capitalize">
                  partners grow
                </span>
              </p>
              {isMobile ? (
                <p className="partnergrow_desc">
                  Embrace the power of Oz Ove Fleet Management
                  <br />
                  and transform these challenges into opportunities
                  <br />
                  for growth.
                </p>
              ) : (
                <p className="partnergrow_desc">
                  Embrace the power of Oz Ove Fleet Management and transform
                  <br />
                  these challenges into opportunities for growth.
                </p>
              )}
            </div>
          </div>

          <div
            className={
              isMobile
                ? "row mb-4 keysection_inner_section flex-nowrap mt-2"
                : "row mb-4 keysection_inner_section flex-wrap mt-4"
            }
          >
            <div className="col-lg-3 col-md-6 col-8">
              <div className="grow_section py-3 px-3">
                <Image loader={myLoader} src={Frame} alt="Frame" />
                <p className="grow_description">
                  Boost revenue opportunities for Your fleet leverage additional
                  orders tailored to your fleet's schedule, reducing downtime
                  and maximizing productivity.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-8">
              <div className="grow_section py-3 px-3">
                <Image loader={myLoader} src={Frame1} alt="Frame1" />
                <p className="grow_description">
                  Optimize Productivity by Efficiently Assigning Drivers to
                  Vehicles Maximize vehicle utilization and minimize operational
                  disruptions by promptly responding to driver emergencies and
                  reducing unexpected issues.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-8">
              <div className="grow_section py-3 px-3">
                <Image loader={myLoader} src={Frame3} alt="Frame2" />
                <p className="grow_description">
                  Enhance Transparency in Your Fleet Management Operations
                  Maintain complete oversight from beginning to end, ensuring no
                  detail in the fleet
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-8">
              <div className="grow_section py-3 px-3">
                <Image loader={myLoader} src={Frame3} alt="Frame3" />
                <p className="grow_description">
                  Expand Your Fleet by Adding More Vehicles Broaden your fleet
                  by adding more vehicles to the roster, allowing drivers to
                  pool resources and be ready for any unforeseen circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partnergrow;
