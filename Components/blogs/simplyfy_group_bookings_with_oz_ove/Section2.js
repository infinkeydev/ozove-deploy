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
            Navigating the landscape of <span className="text-socialiconyellow fw-600"> Group Travel</span> often feels like a daunting task. From coordinating schedules to managing costs, the challenges can sometimes overshadow the joy of travel itself. With the introduction of <span className="text-socialiconyellow fw-600"> OZ OVE</span>, Australia&apos;s newest pioneer in mobility solutions, the tides are changing.
          </p>
        </div>
        <p className="blog_detail_text_desc my-2">Discover the <span className="text-socialiconyellow fw-600"> OZ OVE</span> Advantage</p>
        <div className="my-3">
          <span className="blog_detail_text_head"><span className="text-socialiconyellow fw-600"> OZ OVE</span>&apos;s cutting-edge platform offers an innovative approach to group transportation, blending technology and convenience to provide a seamless <span className="text-socialiconyellow fw-600"> Group Travel</span> experience catered to the unique needs of each customer.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2"><span className="text-socialiconyellow fw-600">On-Demand Booking</span></p>
        <div className="my-3">
          <span className="blog_detail_text_head">Bid goodbye to rigid schedules and time-consuming advanced bookings. With <span className="text-socialiconyellow fw-600"> OZ OVE</span>, group rides are just a few taps away, offering unparalleled flexibility to accommodate last-minute changes. Be it a family outing, corporate event, or a school trip, our services are designed to adapt to your requirements.</span>
        </div>
        <p className="blog_detail_text_desc my-2">Broad Spectrum of Vehicles</p>
        <div className="my-3">
          <span className="blog_detail_text_head">To suit varying group sizes and preferences, we offer a diverse selection of vehicle options. Choose from small, medium, and large vans, premium vehicles, and buses to best meet your travel needs.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Innovative Customization</p>
        <div className="my-3">
          <span className="blog_detail_text_head">At <span className="text-socialiconyellow fw-600"> OZ OVE</span>, we understand that every journey is unique. Hence, we provide an unmatched level of customization. You can select your pick-up and drop-off points, vehicle type, and set your own schedule - offering you complete control over your <span className="text-socialiconyellow fw-600"> Group Travel</span> experience.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2"><span className="text-socialiconyellow fw-600"> UPC Split Payment</span> Feature</p>
        <div className="my-3">
          <span className="blog_detail_text_head">One of the unique features we offer is the <span className="text-socialiconyellow fw-600"> UPC Split Payment</span> feature. With this, you can conveniently divide the ride&apos;s cost among your group members, making it easy to manage payments and avoid the post-trip hassle of splitting the fare.</span>
        </div>
        <p className="blog_detail_text_desc my-2"><span className="text-socialiconyellow fw-600"> Business Account Features</span></p>
        <div className="my-3">
          <span className="blog_detail_text_head">For businesses, <span className="text-socialiconyellow fw-600"> OZ OVE</span> presents an array of features tailored to your needs. From creating on-demand shuttle routes of any size and duration to gaining insights into travel patterns, we&apos;ve got you covered.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Competitive Pricing</p>
        <div className="my-3">
          <span className="blog_detail_text_head">We believe in offering value. Our transparent pricing structure ensures that <span className="text-socialiconyellow fw-600"> Group Travel</span> is economical, reducing the need for multiple taxis or personal vehicles, and making travel more sustainable and pocket-friendly.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Safety is Paramount</p>
        <div className="my-3">
          <span className="blog_detail_text_head">At <span className="text-socialiconyellow fw-600"> OZ OVE</span>, we give top priority to the safety of our users. With real-time tracking, emergency contact sharing, and rigorous background checks for our drivers, you can travel with peace of mind.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2"><span className="text-socialiconyellow fw-600"> Pilot Launch</span> - Join the Movement</p>
        <div className="my-3">
          <span className="blog_detail_text_head">As we commence our journey with our <span className="text-socialiconyellow fw-600"> Pilot Launch</span>, we extend an invitation for you to join us in this thrilling evolution of <span className="text-socialiconyellow fw-600"> Group Travel</span>. With exclusive discounts and the opportunity to influence the future of group transportation in Australia, it&apos;s an experience you won&apos;t want to miss.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">Embrace the future of <span className="text-socialiconyellow fw-600"> Group Travel</span> with <span className="text-socialiconyellow fw-600"> OZ OVE</span>. Experience the simplicity, efficiency, and affordability that our platform brings to <span className="text-socialiconyellow fw-600">Group Bookings</span>.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;