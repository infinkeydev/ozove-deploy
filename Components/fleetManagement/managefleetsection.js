import Link from "next/link";
import React from "react";

function managefleetsection() {
  return (
    <>
      <div className="manage_fleet_upper_section_signup">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-12 d-flex justify-content-center flex-column align-items-center py-5">
              <p className="my-3  touch_title">Ready to manage your Fleet?</p>
              <button className="contactusbtn py-2 bg-socialiconyellow px-4 py-2">
                <Link href={`/launch`} target="_blank" className="text-white">
                  Sign Up Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default managefleetsection;
