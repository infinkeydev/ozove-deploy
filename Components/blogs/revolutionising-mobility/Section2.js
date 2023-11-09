"use client";
import React from "react";

function SectionTwo({ contentDate }) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const currentDate = new Date(); 3
  const contentDateTime = new Date(contentDate);
  const timeDifference = currentDate - contentDateTime;
  let formattedTime;
  if (timeDifference < 60 * 1000) {
    formattedTime = "a few seconds ago";
  } else if (timeDifference < 60 * 60 * 1000) {
    const minutesAgo = Math.floor(timeDifference / (60 * 1000));
    formattedTime = `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
    formattedTime = `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < 2 * 24 * 60 * 60 * 1000) {
    formattedTime = "yesterday";
  } else {
    const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    formattedTime = `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
  }

  const formattedDate = `${contentDateTime.getDate()}.${contentDateTime.getMonth() + 1}.${contentDateTime.getFullYear()}`;


  return (
    <div className="container">
      <span className="blog_text_Date mt-4">
        {formattedDate}<hr />{formattedTime}
      </span>
      <div className="blog_text_margin">
        <div className="my-3">
          <p className="blog_detail_text_head">
            In the era of digitization and instant gratification, the concept of mobility has taken on a new meaning. It&apos;s no longer about simply getting from point A to point B. It&apos;s about convenience, efficiency, personalization, and sustainability. Enter <span className="text-socialiconyellow fw-600"> OZ OVE</span>, a dynamic platform revolutionizing mobility in Australia.
          </p>
        </div>
        <p className="blog_detail_text_desc my-2">Case 1: <span className="text-socialiconyellow fw-600"> Group Rides</span> Made Easy</p>
        <div className="my-2">
          <span className="blog_detail_text_head">Scenario:<span className="text-black"> A group of friends planning a weekend getaway.</span></span>
        </div>
        <div className="my-2">
          <span className="blog_detail_text_head">Solution:<span className="text-black"> <span className="text-socialiconyellow fw-600"> OZ OVE</span>&apos;s group ride feature.</span></span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">With our group ride feature, planning and coordinating transportation for a group of friends is a breeze. Book a small, medium, or large van or bus tailored to your needs. With the flexibility to schedule rides on demand, you have complete control over your travel plans. Plus, our UPC split payment feature allows for easy cost-sharing among friends.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Case 2: <span className="text-socialiconyellow fw-600"> Business Transportation</span> Solutions</p>
        <div className="my-2">
          <span className="blog_detail_text_head">Scenario:<span className="text-black"> A corporate firm organizing a team-building event across town.</span></span>
        </div>
        <div className="my-2">
          <span className="blog_detail_text_head">Solution:<span className="text-black"> <span className="text-socialiconyellow fw-600"> OZ OVE</span>&apos;s business account features.</span></span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">Companies can simplify their group transportation logistics by creating on-demand shuttle routes of any size and duration. <span className="text-socialiconyellow fw-600"> OZ OVE</span> ensures efficient and cost-effective transportation solutions that allow businesses to focus on their core operations rather than logistics.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Case 3: Customizable <span className="text-socialiconyellow fw-600"> Delivery Services</span></p>
        <div className="my-2">
          <span className="blog_detail_text_head">Scenario:<span className="text-black"> A local business needs to deliver products to its customers.</span></span>
        </div>
        <div className="my-2">
          <span className="blog_detail_text_head">Solution:<span className="text-black"> <span className="text-socialiconyellow fw-600"> OZ OVE</span>&apos;s <span className="text-socialiconyellow fw-600"> Delivery Services</span>.</span></span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">With <span className="text-socialiconyellow fw-600"> OZ OVE</span>&apos;s <span className="text-socialiconyellow fw-600"> Delivery Services</span>, businesses can enjoy fast, reliable, and customizable logistics solutions. Choose from courier, UTE, van, or truck services depending on the size and requirements of your goods. Plus, you can choose between various vehicle sizes, further customizing the delivery process.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Case 4: <span className="text-socialiconyellow fw-600"> Fleet Management</span></p>
        <div className="my-2">
          <span className="blog_detail_text_head">Scenario:<span className="text-black"> A fleet owner seeking to maximize fleet utilization and revenue.</span></span>
        </div>
        <div className="my-2">
          <span className="blog_detail_text_head">Solution:<span className="text-black"> <span className="text-socialiconyellow fw-600"> OZ OVE</span>&apos;s <span className="text-socialiconyellow fw-600"> Fleet Management</span> services.</span></span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">Our platform provides fleet owners with a lucrative opportunity to increase their fleet&apos;s potential. By partnering with <span className="text-socialiconyellow fw-600"> OZ OVE</span>, fleet owners can earn more with competitive commissions and extensive business support.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head"><span className="text-socialiconyellow fw-600"> OZ OVE</span>&apos;s comprehensive suite of <span className="text-socialiconyellow fw-600"> Mobility Solutions</span> cater to various needs, offering a more efficient, cost-effective, and sustainable alternative to traditional logistics and transportation methods. We are redefining the norms of logistics and <span className="text-socialiconyellow fw-600"> Group Rides</span>, one journey at a time.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;