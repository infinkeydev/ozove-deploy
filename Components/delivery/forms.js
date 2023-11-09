"use client";
import React, { useEffect, useState } from "react";
import IndividualForm from "../../Components/forms/individual";
import BusinessForm from "../../Components/forms/business";

function Forms() {
  const [win, setWin] = useState(null);
  useEffect(() => {
    if (typeof window !== undefined) {
      setWin(window);
    }
  }, []);
  return (
    // <div className="pb-pt-5 mb-mt-5 my-5">
    <div className="row">
      <div className="col-12 px-0">
        <div className="business_card card">
          <div className="card-body px-0 pb-0">
            {win !== null &&
              win.location.pathname === "/delivery/individual" ? (
              <IndividualForm subject="Delivery" />
            ) : (
              <BusinessForm subject="Delivery" />
            )}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Forms;

