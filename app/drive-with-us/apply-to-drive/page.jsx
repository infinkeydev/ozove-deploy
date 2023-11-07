// "use client";
import React from "react";
import DriverBanner from "../../../Components/apply_to_drive/drivermainBanner";
import FreetoWorkSection from "../../../Components/apply_to_drive/freetoWorkSection";
import LaunchingSection from "../../../Components/apply_to_drive/launching";
import Howdoeswork from "../../../Components/apply_to_drive/howdoeswork";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";
import Image2Footer from "../../../Layout/Footer/image2Footer";
import Forms from "../../../Components/drive-with-us/forms";
import Section2 from "../../../Components/drive-with-us/section2";
import ExclusiveBenifits from "../../../Components/drive-with-us/exclusive_benefits";
import HowItsWorks from "../../../Components/drive-with-us/how_its_work";
import Ready from "../../../Components/drive-with-us/ready";

export const metadata = {
  title: "Drive When You Want with Our Mobility Service",
  description: "Join Oz Ove to drive when you want, earn what you need, and be a part of flexible mobility services. Empower your journey with us today.",
}

function applyToDriver() {
  return (
    <>
      <DriverBanner />
      <FreetoWorkSection />
      <LaunchingSection />
      <Howdoeswork />
      <FAQs faqsList={faqs.apply_to_drive} />
      <Image2Footer />
      {/* <Forms /> */}
      {/* 
      <Section2 />
      <ExclusiveBenifits />
      <HowItsWorks /> */}
      {/* <Ready /> */}
    </>
  );
}

export default applyToDriver;
