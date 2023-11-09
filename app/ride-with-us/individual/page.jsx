// "use client";
import React from "react";
import BannerSection from "../../../Components/ride-with-us/individual/bannerSection";
import WhyChooseFormSection from "../../../Components/ride-with-us/individual/whyChooseFormSection";
import DemandSection from "../../../Components/ride-with-us/individual/demandSection";
import HowitsWork from "../../../Components/ride-with-us/individual/howitsWork";
import NearByEvent from "../../../Components/ride-with-us/individual/nearByEvent";
import AddOnsSection from "../../../Components/ride-with-us/individual/addOnsSection";
import BrownFooter from "../../../Layout/Footer/brownFooter"

// import Forms from "../../../Components/ride-with-us/forms";
// import Stastics from "../../../Components/ride-with-us/stastics";
// import AddOns from "../../../Components/ride-with-us/add_ons";
// import HowItWorks from "../../../Components/ride-with-us/how_it_works";
// import NearByEvents from "../../../Components/ride-with-us/nearby_events";
import FAQs from "../../../Components/ride-with-us/faqs";
import { faqs } from "../../../constants";

export const metadata = {
  title: "Why Choose Oz Ove Group Rides?",
  description: "Are you looking for a seamless transportation experience? Oz Ove offers a service that ensures smooth and efficient travel. Book now!",
}

function Individual() {
  return (
    <>
      {/* Section 1 :- Banner Section */}
      <BannerSection />
      <WhyChooseFormSection />
      {/* Section 3 :- Demand Section */}
      <DemandSection />
      <AddOnsSection />
      {/* Section 4 :- How Its Work Section */}
      <HowitsWork />
      <NearByEvent />


      {/* <Forms faqs={faqs.ride_individual} /> */}
      {/* <Stastics /> */}
      {/* <AddOns />
      <HowItWorks />
      <NearByEvents /> */}
      <FAQs faqsList={faqs.ride_individual} />
      <BrownFooter />
    </>
  );
}

export default Individual;
