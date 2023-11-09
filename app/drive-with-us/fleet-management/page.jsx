// "use client";
import React from "react";
import Banner from "../../../Components/fleetManagement/Bnner";
import Microentrepreneurs from "../../../Components/fleetManagement/microentrepreneurs";
import Setfleetsection from "../../../Components/fleetManagement/setfleetsection";
import Managefleetsection from "../../../Components/fleetManagement/managefleetsection";
import PartnerGrow from "../../../Components/fleetManagement/partnergrow";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";
import BrownFooter from "../../../Layout/Footer/brownFooter";
import Forms from "../../../Components/drive-with-us/forms";
import Section2 from "../../../Components/drive-with-us/section2";
import HowWeHelp from "../../../Components/drive-with-us/how_we_help";
import HowSetupFleet from "../../../Components/drive-with-us/how_setup_fleet";
import Ready from "../../../Components/drive-with-us/ready";

export const metadata = {
  title: "Fleet Management Services Company - Oz Ove",
  description: "Oz Ove is the best fleet management services provider company that helps manage drivers and vehicles more efficiently. Elevate your fleet management now! ",
}

function fleetManagement() {
  return (
    <>
      <Banner />
      <Microentrepreneurs />
      <PartnerGrow />
      <Setfleetsection />
      <Managefleetsection />
      <FAQs faqsList={faqs.fleet_management} />
      <BrownFooter />
      {/* <Forms /> */}
      {/* <Section2 />
      <HowWeHelp />
      <HowSetupFleet />
      <Ready /> */}
    </>
  );
}

export default fleetManagement;
