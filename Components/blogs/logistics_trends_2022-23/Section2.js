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
            The logistics industry is currently undergoing an unprecedented transformation. Buoyed by the rapid development of technology and changes in consumer behaviour, the industry has seen several noteworthy trends emerge. One of the most prominent trends is the shift towards the <span className="text-socialiconyellow fw-600"> On-Demand Economy</span>.
          </p>
        </div>
        <p className="blog_detail_text_desc my-2">On-Demand Logistics: The New Normal</p>
        <div className="my-3">
          <span className="blog_detail_text_head">On-demand logistics refers to the provision of goods and services instantly, at the request of the customer. It has become a crucial element in <span className="text-socialiconyellow fw-600"> Australia</span>&apos;s logistics sector, reshaping how we perceive the movement of goods and individuals.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Integration of Technology</p>
        <div className="my-3">
          <span className="blog_detail_text_head">One of the driving factors behind the rise of on-demand logistics is the integration of advanced technologies such as AI, Machine Learning, and IoT. These technologies help in optimizing logistics operations, enhancing route planning, streamlining inventory management, and improving delivery times.</span>
        </div>
        <p className="blog_detail_text_desc my-2">Rise of <span className="text-socialiconyellow fw-600"> Hyperlocal Deliveries</span></p>
        <div className="my-3">
          <span className="blog_detail_text_head">A key trend within the <span className="text-socialiconyellow fw-600"> On-Demand Economy</span> is the rise of <span className="text-socialiconyellow fw-600"> Hyperlocal Deliveries</span>. As more businesses seek to provide instant gratification to their customers, hyperlocal delivery has become crucial. This entails using local networks to ensure quick delivery of goods and services within a specific geographical radius.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Shift Towards <span className="text-socialiconyellow fw-600"> Green Logistics</span></p>
        <div className="my-3">
          <span className="blog_detail_text_head">Sustainability is no longer an option it&apos;s a necessity. With increasing awareness about environmental issues, there&apos;s a push towards <span className="text-socialiconyellow fw-600"> Green Logistics</span>. Companies are seeking ways to reduce their carbon footprint through electric vehicles, optimized route planning, and packaging reduction.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2"><span className="text-socialiconyellow fw-600"> OZ OVE</span>: Shaping the Future of On-Demand Logistics in <span className="text-socialiconyellow fw-600"> Australia</span></p>
        <div className="my-3">
          <span className="blog_detail_text_head">Enter <span className="text-socialiconyellow fw-600"> OZ OVE</span>, a pioneering force in <span className="text-socialiconyellow fw-600"> Australia</span>&apos;s mobility solutions, contributing to the reshaping of the logistics and ride-sharing industry. By leveraging the sharing economy, <span className="text-socialiconyellow fw-600"> OZ OVE</span> is bridging the gap left by traditional logistics and transportation providers.</span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">With a hyperlocal focus, <span className="text-socialiconyellow fw-600"> OZ OVE</span> offers a range of services that includes <span className="text-socialiconyellow fw-600"> Delivery Services</span> and <span className="text-socialiconyellow fw-600"> Group Rides</span>, catering to the convenience, speed, and personal touch that today&apos;s customers seek. A distinct feature is the option to choose from various vehicle options for delivery needs, including couriers, UTEs, vans, and trucks, along with different vehicle sizes for group ride services.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">Embracing <span className="text-socialiconyellow fw-600"> Green Logistics</span>, <span className="text-socialiconyellow fw-600"> OZ OVE</span> is committed to sustainable operations. The platform is inclusive and provides flexible earning opportunities for driver partners and mobility service providers.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">As we venture into 2023, the <span className="text-socialiconyellow fw-600"> On-Demand Economy</span>&apos;s rise in the logistics sector promises continued evolution and exciting developments. <span className="text-socialiconyellow fw-600"> OZ OVE</span> is proud to be a part of this journey, offering comprehensive mobility solutions that put customers and partners at the heart of its operations.
          </span>
        </div>
      </div>
    </div>
  );  
}

export default SectionTwo;