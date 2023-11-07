// "use client";
import React from "react";
import Section1 from "../../../../Components/blogs/revolutionising-mobility/Section1"
import Section2 from "../../../../Components/blogs/revolutionising-mobility/Section2"
import Section3 from "../../../../Components/blogs/revolutionising-mobility/Section3"
import BrownFooter from "../../../../Layout/Footer/brownFooter"

export const metadata = {
  title: "Dynamic Platform Revolutionizing Mobility in Australia",
  description: "Discover how a dynamic platform Oz Ove is reshaping mobility in Australia and revolutionizing the way people travel. Read use cases Oz Ove follows.",
}

function RevolutionisingMobility() {
  return (
    <>
      <div className="revolutionizing-mobility">
        <Section1 />
        <Section2 contentDate="2023-09-17T16:30:00" />
        <Section3 />
        <BrownFooter />
      </div>
    </>
  );
}

export default RevolutionisingMobility;