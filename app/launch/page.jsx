import BannerSection from "../../Components/pilotlaunch/bannerSection";
import PilotSlider from "../../Components/home/section3";
import BenifitSection from "../../Components/pilotlaunch/benifitsSection";
import Launching from "../../Components/pilotlaunch/launching";
import VehicleSection from "../../Components/pilotlaunch/vehicleSection";
import Acknowledgement from "../../Components/pilotlaunch/acknowledgement";
import JourneySection from "../../Components/pilotlaunch/journeySection";
import FAQs from "../../Components/ride-with-us/faqs";
import { faqs } from "../../constants";
import BrownFooter from "../../Layout/Footer/brownFooter"

export default function Home() {
  return (
    <>
      <BannerSection />
      <Launching />
      <div className="home pilotslider">
        <PilotSlider />
      </div>
      <BenifitSection />
      <VehicleSection />
      <JourneySection />
      <Acknowledgement />
      <FAQs faqsList={faqs.pilot_launch} />
      <BrownFooter />
    </>
  );
}
