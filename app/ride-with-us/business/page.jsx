// "use client";
import React from "react";
import BannerSection from "../../../Components/ride-with-us/bannerSection";
import DemandSection from "../../../Components/ride-with-us/demandSection";
import AdvantagesSection from "../../../Components/ride-with-us/advantagesSection";
import VehicleDeliverySection from "../../../Components/ride-with-us/vehicleDeliverySection";
import OwnFleetSection from "../../../Components/ride-with-us/ownFleet";
import WhyChooseFormSection from "../../../Components/ride-with-us/whyChooseFormSection";
import BrownFooter from "../../../Layout/Footer/brownFooter"

// import Forms from "../../../Components/ride-with-us/forms";
// import OurCorporateAccAdvtg from "../../../Components/ride-with-us/our_corporate_account_advantages";
// import MoreEfficient from "../../../Components/ride-with-us/more_efficient";
// import AnyVehicle from "../../../Components/ride-with-us/any_vehicle";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";

export const metadata = {
  title: "Why Choose Oz Ove for Business Rides?",
  description: "Get in touch with Oz Ove and transform your corporate travel experience. Contact us today and elevate your business rides with us.",
}

function Business() {
  return (
    <>
      {/* Section 1 :- Banner Section */}
      <BannerSection />
      {/* <WhyChooseFormSection /> */}
      <WhyChooseFormSection />
      {/* <Forms /> */}
      {/* Section 3 :- Demand Section */}
      <DemandSection />
      {/* Section 4 :- Advantages Section */}
      <AdvantagesSection />
      {/* Section 6 :- Vehicle Delivery */}
      <OwnFleetSection />
      <VehicleDeliverySection />

      {/* <Stastics /> */}
      {/* <OurCorporateAccAdvtg /> */}
      {/* <MoreEfficient /> */}
      {/* <AnyVehicle /> */}
      <FAQs faqsList={faqs.ride_business} />
      <BrownFooter />
    </>
  );
}

export default Business;
