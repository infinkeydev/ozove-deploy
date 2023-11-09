"use client";
import React, { useEffect, useState } from "react";
import BannerForm from "../../Components/delivery/individual/bannerForm";
import Forms from "../../Components/drive-with-us/forms";
import Link from "next/link";

function Bnner() {
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
      <div className="fleet_managemet d-flex align-items-center py-4">
        <div className="container h-100">
          <div className={`h-100 ${isMobile ? "" : "row w-100 mx-0 align-items-center"}`}>
            <div
              className={`d-flex py-4 py-md-5 align-items-center ${isMobile ? "" : "col-md-8"
                }`}
            >
              <div className="d-flex justify-content-center flex-column">
                <h1 className="fw-700 text-capitalize">
                  MAXIMISE YOUR <br />
                  FLEET'S POTENTIAL
                </h1>
                {isMobile ? (
                  <p className="my-3 build_text">
                    Built for Fleet owners, Oz Ove Fleet Management
                    <br />
                    empowers you to manage drivers and vehicles
                    <br />
                    more efficiently.
                  </p>
                ) : (
                  <p className="my-3 text-capitalize build_text">
                    Built for Fleet owners, Oz Ove Fleet Management empowers you
                    <br />
                    to manage drivers and vehicles more efficiently.
                  </p>
                )}
                <div>
                  <button className="bg-socialiconyellow text-white fw-600 px-3 py-2 fs-4 rounded">
                    <Link href={`/launch`} target="_blank" className="text-white">
                      Deliver now
                    </Link>
                  </button>
                </div>
                <p className="my-3 get_text">
                  Get started right away and
                  <br />
                  schedule a delivery
                </p>
              </div>
            </div>
            {isMobile ? (
              <></>
            ) : (
              <div className="col-md-4 mx-0 px-0 right_side">
                <Forms />
              </div>
            )}
          </div>
        </div>
      </div>
      {isMobile ? (
        <div className="container delivery_no_banner py-3">
          <Forms />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Bnner;
