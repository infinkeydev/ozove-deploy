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
            In the ever-evolving landscape of modern transportation, ride-sharing and delivery services have emerged as integral components of our daily lives. Yet, a need for faster, more efficient, and customer-centric services persists. Bridging this gap is Australia&apos;s latest player in this domain,<span className="text-socialiconyellow fw-600"> OZ OVE</span>.
          </p>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head"> At <span className="text-socialiconyellow fw-600"> OZ OVE </span>, our mission is to transform the way Australia moves. We are leveraging the power of the <span className="text-socialiconyellow fw-600"> Sharing Economy </span> and <span className="text-socialiconyellow fw-600"> Innovative Technology </span> to create a hyperlocal experience that combines ride-sharing and delivery services, all under one platform.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Redefining Ride-Sharing</p>
        <div className="my-3">
          <span className="blog_detail_text_head">Gone are the days of traditional ride-hailing. With<span className="text-socialiconyellow fw-600"> OZ OVE </span>, we bring a new dimension to group travel. Our platform offers an array of options, from small, medium, and large vans to premium vehicles. Whether you&apos;re planning a group outing or arranging transportation for an event, <span className="text-socialiconyellow fw-600"> OZ OVE </span>provides on-demand booking and unmatched convenience.</span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head"> Delivery Services, Simplified Our delivery services cover a broad spectrum of needs. Whether you&apos;re a small business owner needing regular courier services or an individual sending a parcel across town,<span className="text-socialiconyellow fw-600"> OZ OVE </span>has you covered. We offer multiple vehicle options - from courier cars, SUVs and Utes, to small, medium, and large vans and trucks - ensuring we can cater to a wide variety of delivery needs.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Embracing the Sharing Economy</p>
        <div className="my-3">
          <span className="text-socialiconyellow fw-600"> OZ OVE </span><span className="blog_detail_text_head"> is more than just a service provider it&apos;s a community. We empower our driver partners with flexible earning opportunities, creating a platform that fosters entrepreneurship and inclusivity.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">A Boon for Fleet Owners</p>
        <div className="my-3">
          <span className="blog_detail_text_head"> With our<span className="text-socialiconyellow fw-600"> Fleet Management </span> services, fleet owners have a unique opportunity to maximize their operations. We offer a competitive commission on deliveries, zero usage fees, and extensive business support.</span>
        </div>
        <p className="blog_detail_text_desc my-2">Pilot Launch - The Beginning of a Revolution</p>
        <div className="my-3">
          <span className="blog_detail_text_head"> As we set forth on our journey with our <span className="text-socialiconyellow fw-600"> Pilot Launch </span>, we invite you to experience the unparalleled convenience and cost-effectiveness of our platform. With exclusive discounts for our early adopters and an exciting roadmap ahead, we are all set to revolutionize mobility solutions in Australia
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head"> Join us on this journey and experience the future of mobility with<span className="text-socialiconyellow fw-600"> OZ OVE </span>. We are more than a logistics and ride-sharing platform. We are a comprehensive mobility solution that puts our customers and partners at the heart of our operations.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;