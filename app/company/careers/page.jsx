// "use client";
import React from "react";
import BannerSection from "../../../Components/careers/bannerSection";
import OurValuesSection from "../../../Components/careers/ourValuesSection";
import OurPosition from "../../../Components/careers/ourPosition";
import Image1Footer from "../../../Layout/Footer/image1Footer"
// import Section2 from "../../../Components/careers/section2";
// import Section3 from "../../../Components/careers/section3";
// import AboutUsSection6 from "../../../Components/aboutUs/section6";

export const metadata = {
  title: "Join The Oz Ove Team",
  description: "Join our team and explore the transformative trends shaping the future of mobility and logistics. Apply and grow your career at Oz Ove.",
}

function careers() {
  return (
    <>
      <BannerSection />
      <OurValuesSection />
      <OurPosition />
      <Image1Footer />
      {/* <Section2 />
      <AboutUsSection6 />
      <Section3 /> */}
    </>
  );
}

export default careers;
