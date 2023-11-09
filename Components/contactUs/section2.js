"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Map from "../../public/Images/conatct_us/icn_map.svg.png"
import Call from "../../public/Images/conatct_us/icn_call.svg.png"
import Mail from "../../public/Images/conatct_us/icn_email.svg.png"

function SectionTwo() {
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
      <div className="py-5">
        <div className="container">
          <div className="row w-100 mx-0">
            <div className={`col-md-4 text-center order-2 order-lg-1 ${isMobile ? "contact_card rounded my-3 py-5" : ""}`}>
              <Image loader={myLoader} src={Call} alt="Call" className={`${isMobile ? "w-50" : "w-25"} object-fit-contain mokup`} />
              <div>
                <p className="contact_head">Service Center</p>
                <p className="contact_desc">
                  Please contact our customer care in
                  <br />
                  the In-app Chat section or Fanpage
                  <br />
                  with any questions or support
                  <br />
                  requests.
                </p>
              </div>
            </div>
            <div className={`col-md-4 text-center order-1 order-lg-2 ${isMobile ? "contact_card rounded my-3 py-5" : ""}`}>
              <Image loader={myLoader} src={Mail} alt="Mail" className={`${isMobile ? "w-50" : "w-25"} object-fit-contain mokup`} />
              <div>
                <h1 className="contact_head">Contact Us</h1>
                {isMobile ? (
                  <p className="contact_desc">info@ozove.com.au</p>
                ) : (
                  <p className="contact_desc">
                    Need help or want to leave feedback? Email
                    <br />
                    us at: <span className="fw-600">info@ozove.com.au</span>
                  </p>
                )}
              </div>
            </div>
            <div className={`col-md-4 text-center order-3 ${isMobile ? "contact_card rounded my-3 py-5" : ""}`}>
              <Image loader={myLoader} src={Map} alt="Map" className={`${isMobile ? "w-50" : "w-25"} object-fit-contain mokup`} />
              <div>
                <p className="contact_head">Our Office</p>
                <p className="contact_desc">Our office address Level 1 45 St Georges Terrace,
                  <br />
                  Perth, WA 6000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
