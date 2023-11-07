// "use client";
import React from "react";
import Section1 from "../../../Components/contactUs/section1";
import Section2 from "../../../Components/contactUs/section2";
import WhiteFooter from "../../../Layout/Footer/whiteFooter";

export const metadata = {
  title: "Contact us and Know About Pilot Launch | Oz Ove",
  description: "For more detailed information email us at info@ozove.com.au, or visit our location at Level 1 45 St Georges Terrace, Perth, WA 6000",
}

function contactUs() {
  return (
    <>
      <div className="contact_us">
        <Section1 />
        <Section2 />
        <WhiteFooter />
      </div>
    </>
  );
}

export default contactUs;
