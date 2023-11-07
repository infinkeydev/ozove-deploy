// "use client";
import React from "react";
import Section1 from "../../../../Components/blogs/revolutionising_local_delivery_services/Section1"
import Section2 from "../../../../Components/blogs/revolutionising_local_delivery_services/Section2"
import Section3 from "../../../../Components/blogs/revolutionising_local_delivery_services/Section3"
import BrownFooter from "../../../../Layout/Footer/brownFooter"

export const metadata = {
  title: "Advantages of Oz Ove's Local Delivery Services",
  description: "Read how Oz Ove's Local Delivery Services offer numerous benefits to businesses. From instant delivery to operational advantages explore details in this blog.",
}

function RevolutionisingLocalDeliveryServices() {
  return (
    <>
      <div className="revolutionising_local_delivery_services">
        <Section1 />
        <Section2 contentDate="2023-09-17T16:30:00" />
        <Section3 />
        <BrownFooter />
      </div>
    </>
  );
}

export default RevolutionisingLocalDeliveryServices;