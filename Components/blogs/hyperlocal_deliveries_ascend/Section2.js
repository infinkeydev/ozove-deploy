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
            The e-commerce landscape has seen a significant pivot towards hyperlocal deliveries, a trend accelerated by consumer&apos;s increasing demand for instant and same-day deliveries. OZ Ove, a front-runner in the Australian logistics industry, has embraced this shift, leveraging it to redefine logistics in the country.
          </p>
        </div>
        <p className="blog_detail_text_desc my-2">E-commerce Boom and Hyperlocal Deliveries</p>
        <div className="my-3">
          <span className="blog_detail_text_head">The recent surge in e-commerce activity across various sectors, including food, pharmaceuticals, groceries, and staples, has bolstered the growth of hyperlocal deliveries. The consumer expectation for immediate deliveries has become a standard, leading to innovative changes within the supply chain.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Hyperlocal Delivery Startups: A Rising Phenomenon</p>
        <div className="my-3">
          <span className="blog_detail_text_head">The hyperlocal and on-demand marketplace has seen significant action in recent years. Despite initial challenges, the investment outlook for hyperlocal deliveries remains optimistic. The gig economy has been instrumental in supporting this sector, creating ample opportunities for individuals to earn and sustain.</span>
        </div>
        <p className="blog_detail_text_desc my-2">Last-Mile Delivery Infrastructure: A Technological Leap</p>
        <div className="my-3">
          <span className="blog_detail_text_head">A key trend within the on-demand economy is the rise of hyperlocal deliveries. The e-commerce industry&apos;s turning point has been the consumer expectation for instant deliveries. Meeting this demand requires efficient and accessible solutions, facilitated by technological advancements. AI and ML tools have evolved to optimize routing, batching, demand prediction, and rider allocation, making hyperlocal deliveries more sustainable than ever.
          </span>
        </div>
        <p className="blog_detail_text_desc my-2">Hyperlocal Deliveries: The Road Ahead</p>
        <div className="my-3">
          <span className="blog_detail_text_head">As we navigate the post-pandemic world, e-commerce and hyperlocal businesses are poised for continued growth. The trend of instant and same-day deliveries, now a standard consumer expectation, coupled with the safety and convenience of home deliveries, is set to attract a broader customer base.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">In this dynamic landscape, logistics players like OZ Ove play a pivotal role. We are committed to meeting customer expectations on delivery speed and experience across Australia. Our focus on technological innovation and efficient supply chain management aims to make hyperlocal deliveries more sustainable and efficient.</span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head">At OZ Ove, we are enthusiastic about the future of hyperlocal deliveries and are prepared to embrace the challenges and opportunities it presents. Join us on this journey and experience the future of logistics with OZ Ove.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;