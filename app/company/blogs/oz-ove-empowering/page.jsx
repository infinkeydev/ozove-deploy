// "use client";
import React from "react";
import Section1 from "../../../../Components/blogs/oz_ove_empowering/Section1"
import Section2 from "../../../../Components/blogs/oz_ove_empowering/Section2"
import Section3 from "../../../../Components/blogs/oz_ove_empowering/Section3"
import BrownFooter from "../../../../Layout/Footer/brownFooter"

export const metadata = {
  title: "",
  description: "",
}

function OzOvePioneeringNextGeneration() {
  return (
    <>
      <div className="oz_ove_empowering">
        <Section1 />
        <Section2 contentDate="2023-09-17T16:30:00" />
        <Section3 />
        <BrownFooter />
      </div>
    </>
  );
}

export default OzOvePioneeringNextGeneration;