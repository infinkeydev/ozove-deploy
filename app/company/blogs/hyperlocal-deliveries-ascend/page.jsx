// "use client";
import React from "react";
import Section1 from "../../../../Components/blogs/hyperlocal_deliveries_ascend/Section1"
import Section2 from "../../../../Components/blogs/hyperlocal_deliveries_ascend/Section2"
import Section3 from "../../../../Components/blogs/hyperlocal_deliveries_ascend/Section3"
import BrownFooter from "../../../../Layout/Footer/brownFooter"

export const metadata = {
  title: "Digitally Transforming Logistics with OZ Ove in Australia",
  description: "Read how Oz Ove is redefining efficiency, speed, and accessibility and ultimately enhancing the delivery experience across Australia",
}

function HyperlocalDeliveryAscend() {
  return (
    <>
      <div className="hyperlocal_deliveries_ascend">
        <Section1 />
        <Section2 contentDate="2023-09-17T16:30:00" />
        <Section3 />
        <BrownFooter />
      </div>
    </>
  );
}

export default HyperlocalDeliveryAscend;