// "use client";
import React from "react";
import Section1 from "../../../Components/blogs/blogs_list_section1";
import Section2 from "../../../Components/blogs/blogs_list_section2";
import BrownFooter from "../../../Layout/Footer/brownFooter";

export const metadata = {
  title: 'Read Latest Blogs about On-Demand Delivery Services | Ozove',
  description: 'Discover the latest trends and insights in on-demand delivery services. Read information on current developments in the world of on-demand logistics services.',
}

function blogsList() {
  return (
    <>
      <Section1 />
      <Section2 />
      <BrownFooter />
    </>
  );
}

export default blogsList;
