"use client";
import React, { useEffect, useState } from "react";
import FleetManagement from "../../Components/forms/fleet";
import BecomeDriver from "../../Components/forms/driver";
// import { Card, CardBody, Col, Row } from "reactstrap";

function Forms() {
  const [win, setWin] = useState(null);
  useEffect(() => {
    if (typeof window !== undefined) {
      setWin(window);
    }
  }, []);
  return (
    <div className="row">
      <div className="col-lg-10 px-0">
        {win !== null ? (
          win?.location?.pathname === "/drive-with-us/fleet-management" ? (
            <div className="fleetmnagementform card">
              <div className="card-body px-0 pb-0">
                <FleetManagement />
              </div>
            </div>
          ) : (
            <>
              <div className="main_apply_driver_form_section card">
                <div className="card-body px-0 pb-0 apply_driver_form">
                  <BecomeDriver />
                </div>
              </div>
            </>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Forms;
