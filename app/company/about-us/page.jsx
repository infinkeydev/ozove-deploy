// "use client";
import React from "react";
import Section1 from "../../../Components/aboutUs/section1";
import Section2 from "../../../Components/aboutUs/section2";
import Section3 from "../../../Components/aboutUs/section3";
import Section4 from "../../../Components/aboutUs/section4";
import Section5 from "../../../Components/aboutUs/section5";
import Section6 from "../../../Components/aboutUs/section6";
import Section7 from "../../../Components/aboutUs/section7";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";
import Image3Footer from "../../../Layout/Footer/image3Footer";

export const metadata = {
  title: "Redefining Mobility And Logistics In Australia with Oz Ove",
  description: "Oz Ove is a pioneering in Australia's mobility and logistics sector. Get technology-driven mobility services according to your needs.",
}

function aboutUs() {
  return (
    <>
      <div className="about-us">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <FAQs faqsList={faqs.about_us} />
        <Image3Footer />
      </div>
    </>
  );
}

export default aboutUs;
