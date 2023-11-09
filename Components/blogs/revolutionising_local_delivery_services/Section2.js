import React from "react";

function SectionTwo({ contentDate }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentDate = new Date();
  3;
  const contentDateTime = new Date(contentDate);
  const timeDifference = currentDate - contentDateTime;
  let formattedTime;
  if (timeDifference < 60 * 1000) {
    formattedTime = "a few seconds ago";
  } else if (timeDifference < 60 * 60 * 1000) {
    const minutesAgo = Math.floor(timeDifference / (60 * 1000));
    formattedTime = `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    const hoursAgo = Math.floor(timeDifference / (60 * 60 * 1000));
    formattedTime = `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else if (timeDifference < 2 * 24 * 60 * 60 * 1000) {
    formattedTime = "yesterday";
  } else {
    const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    formattedTime = `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  }

  const formattedDate = `${contentDateTime
    .getDate()
    .toString()
    .padStart(2, "0")}-${
    months[contentDateTime.getMonth()]
  }-${contentDateTime.getFullYear()}`;

  return (
    <div className="container">
      <span className="blog_text_Date mt-4">
        {formattedDate}<hr />{formattedTime}
      </span>
      <div className="blog_text_margin">
        <div className="my-3">
          <p className="blog_detail_text_head">
            In today&apos;s competitive market, the importance of
            <span className="text-socialiconyellow fw-600">
              {" "}
              Local Delivery Services{" "}
            </span>
            cannot be overstated. As businesses strive to gain an edge over
            their competitors, the need for speed, simplicity, and
            customer-centric experiences in delivery services has become
            paramount. This is where{" "}
            <span className="text-socialiconyellow fw-600"> OZ OVE </span>, a
            game-changer in the industry, comes into play. In this blog, we will
            delve into the benefits and features of{" "}
            <span className="text-socialiconyellow fw-600">
              {" "}
              OZ OVE&apos;s{" "}
            </span>
            <span className="text-socialiconyellow fw-600">
              {" "}
              Local Delivery Services{" "}
            </span>
            that set it apart from the rest.
          </p>
        </div>
        <p className="text-socialiconyellow fw-700 fs-5 my-3">
          {`"`}The Unrevealed Advantages of OZ OVE&apos;s Local Delivery
          Services{`"`}
        </p>
        <div className="my-3">
          <span className="text-socialiconyellow fw-600 fs-5">
            Instant Delivery:{" "}
          </span>
          <span className="text-socialiconyellow fw-600"> OZ OVE </span>
          <span className="blog_detail_text_head">
            {" "}
            is built on the premise of providing convenience and speed in local
            deliveries. Our platform allows businesses to offer{" "}
            <span className="text-socialiconyellow fw-600">
              {" "}
              Instant Delivery{" "}
            </span>{" "}
            services to their customers, thereby enhancing customer satisfaction
            and loyalty.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head fw-600 fs-5">
            Differentiation from Bigger Players:
          </span>
          <span className="blog_detail_text_head">
            {" "}
            At <span className="text-socialiconyellow fw-600"> OZ OVE </span>,
            we understand the importance of building trust and relationships
            with our local partners. Our flexibility to accommodate the specific
            needs of each partner sets us apart from larger logistics companies.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head fw-600 fs-5">
            Simplicity in Ordering:
          </span>
          <span className="blog_detail_text_head">
            {" "}
            Our mobile and web app make it easy for customers to access an
            on-demand fleet. With an easy order process, businesses can scale
            their operations using our technology.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head fw-600 fs-5">
            Operational Advantages:
          </span>
          <span className="blog_detail_text_head">
            {" "}
            <span className="text-socialiconyellow fw-600"> OZ OVE </span>{" "}
            operates on a pay-per-use pricing model, which offers several
            operational advantages to businesses. This model keeps costs
            manageable and allows businesses to scale their delivery services as
            per their needs.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head fw-600 fs-5">
            Customer Service Excellence:
          </span>
          <span className="blog_detail_text_head">
            {" "}
            Our customer service team is friendly, prompt, and always ready to
            assist. We go the extra mile to meet our customer&apos;s
            expectations and ensure a seamless delivery experience.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head fw-600 fs-5">
            Continuous Product Improvements:
          </span>
          <span className="blog_detail_text_head">
            {" "}
            At <span className="text-socialiconyellow fw-600"> OZ OVE </span>,
            we value feedback and continuously fine-tune our offerings based on
            it. This commitment to improvement ensures that we stay ahead of the
            curve and provide the best possible service to our customers.
          </span>
        </div>
        <div className="my-3">
          <span className="blog_detail_text_head fw-600 fs-5">Quality in Delivery:</span>
          <span className="blog_detail_text_head">
            {" "}
            Our drivers are thoroughly trained and evaluated by the customers
            they serve. They are committed to providing quality service at every
            step of the delivery process, ensuring customer satisfaction.
          </span>
        </div>
        <p className="blog_detail_text_head fw-700 fs-5 my-2">Conclusion</p>
        <div className="my-3">
          <p className="blog_detail_text_head">
            <span className="text-socialiconyellow fw-600">
              {" "}
              OZ OVE&apos;s{" "}
            </span>
            <span className="text-socialiconyellow fw-600">
              Local Delivery Services
            </span>{" "}
            offer numerous benefits to businesses, from{" "}
            <span className="text-socialiconyellow fw-600">
              {" "}
              Instant Delivery{" "}
            </span>{" "}
            and operational advantages to excellent customer service and quality
            in delivery. By choosing{" "}
            <span className="text-socialiconyellow fw-600"> OZ OVE </span> as
            your delivery partner, you can enhance your customer experience and
            gain a competitive edge in the market. Explore{" "}
            <span className="text-socialiconyellow fw-600">
              {" "}
              OZ OVE&apos;s{" "}
            </span>
            services today and experience the advantages yourself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
