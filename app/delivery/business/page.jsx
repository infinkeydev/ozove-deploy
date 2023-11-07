// "use client";
import React from "react";
import DeliveryBanner from "../../../Components/delivery/business/banner"
import Usage from "../../../Components/delivery/business/usage"
import SetUpDelivery from "../../../Components/delivery/set_up__delivery"
import Advantages from "../../../Components/ride-with-us/advantagesSection"
import OwnFleet from "../../../Components/ride-with-us/ownFleet"
import LocalDeliveryPartner from "../../../Components/delivery/business/any_vehicle";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";
import BrownFooter from "../../../Layout/Footer/brownFooter";

export const metadata = {
  title: "Set Up A Delivery In Just A Few Simple Steps with Oz Ove",
  description: "Use our app and effortlessly set up a delivery in a few simple steps. Unleash accelerated growth with smart logistics.",
}

function Business() {
  return (
    <>
      <div className="delivery_business">
        <DeliveryBanner />
        <Usage />
        <SetUpDelivery />
        <Advantages />
        <OwnFleet />
        <LocalDeliveryPartner />
        <FAQs faqsList={faqs.delivery_business} />
        <BrownFooter />
      </div>
    </>
  );
}

export default Business;
