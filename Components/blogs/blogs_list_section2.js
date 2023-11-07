"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import Search from "../../public/svg/search.svg";
import Blog1 from "../../public/Images/blogs/new/first.jpg";
import Blog2 from "../../public/Images/blogs/new/Second.jpg";
import Blog3 from "../../public/Images/blogs/new/Third.jpg";
import Blog4 from "../../public/Images/blogs/new/Forth.jpg";
import Blog5 from "../../public/Images/blogs/new/Five.jpg";
import Blog6 from "../../public/Images/blogs/new/six.jpg";
import Blog7 from "../../public/Images/blogs/new/Seven.jpg";
import Image from "next/image";
import Link from "next/link";

function SectionTwo() {
  const [isMobile, setIsMobile] = useState(false);
  const currentDate = new Date(); // Assuming today is January 7, 2023
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

  const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}-${months[currentDate.getMonth()]
    }-${currentDate.getFullYear()}`;

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
    }
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="mt-2">
        <div className="container">
          <div className="main_blog_list_section">
            <div className="row w-100 align-items-center mt-1 mb-2">
              <div className="col-12">
                <div className="d-flex align-items-center">
                  <p className="allposttitle">All Posts</p>
                  <div className="search-container ps-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <Search className="search-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className={`justify-content-lg-center ${isMobile ? "row mb-1 keysection_inner_section flex-lg-nowrap" : "row mb-4 keysection_inner_section flex-wrap"}`}>
              <div className="col-12 d-flex">
                <p className="blogskey bg-socialiconyellow mt-2 px-2 py-1 me-3 my-2">
                  Technology
                </p>
                <p className="blogskey bg-darkgrey mt-2 px-2 py-1 me-3 my-2">
                  Innovation
                </p>
                <p className="blogskey bg-darkgrey mt-2 px-2 py-1 me-3 my-2">
                  Delivery
                </p>
                <p className="blogskey bg-darkgrey mt-2 px-2 py-1 me-3 my-2">
                  Entrepreneurship
                </p>
                <p className="blogskey bg-darkgrey mt-2 px-2 py-1 me-3 my-2">
                  Driver Stories
                </p>
                <p className="blogskey bg-darkgrey mt-2 px-2 py-1 me-3 my-2">
                  Group Rides
                </p>
              </div>
              <div className="d-flex jusatify-content-center">
                <hr style={{ color: "black", width: "100%", marginTop: isMobile ? "0.4rem" : "1rem", marginBottom: isMobile ? "0.4rem" : "1rem" }} />
              </div>
            </div>
            <div className="row mx-0 w-100 px-0 px-lg-2">
              <div className="col-lg-4 col-md-6">
                <Link href="/company/blogs/revolutionising-local-delivery-services" target="_blank">
                  <div className="blog_list_section px-1 px-lg-3 py-3 my-1 my-lg-4">
                    <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog1} alt="blog1" /></div>
                    <div style={{ height: "38%" }}>
                      <p className="blogtitle mt-2">
                        Revolutionising Local Delivery Services: The Unrevealed
                        Advantages of OZ OVE
                      </p>
                      <p className="blogdesc mt-2">
                        In today&apos;s competitive market, the importance of local
                        delivery services cannot be overstated. As businesses strive
                        to gain an edge over their competitors, the need for speed,
                        simplicity, and customer-centric experiences in delivery
                        services has become paramount. This is where OZ OVE, a
                        game-changer in the industry, comes into play. In this blog,
                        we will delve into the benefits and features of OZ OVE&apos;s
                        local delivery services that set it apart from the rest.
                      </p>
                    </div>
                    <p className="blogDate text-darkgrey mt-1">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="/company/blogs/unlocking-the-power-of-logistics" target="_blank">
                  <div className="blog_list_section px-1 px-lg-3 py-3 my-1 my-lg-4">
                    <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog2} alt="blog1" /></div>
                    <div style={{ height: "38%" }}>
                      <p className="blogtitle mt-2">
                        Unlocking the Power of Logistics: Boosting Retail Success
                        with OZ OVE&apos;s Efficient Delivery Services in Australia
                      </p>
                      <p className="blogdesc mt-2">
                        The retail business is growing at a rapid rate today. In
                        this age of e-commerce businesses, retail stores are highly
                        dependent upon logistics for streamlined and hassle-free
                        delivery of goods. Retail logistics proves to be an
                        excellent combination to ensure a speedy delivery with the
                        use of the latest technology and complete customer
                        satisfaction. This is where OZ OVE, a game-changer in the
                        industry, comes into play.
                      </p>
                    </div>
                    <p className="blogDate text-darkgrey mt-1">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="/company/blogs/oz-ove-empowering" target="_blank">
                  <div className="blog_list_section px-1 px-lg-3 py-3 my-1 my-lg-4">
                    <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog3} alt="blog1" /></div>
                    <div style={{ height: "38%" }}>
                      <p className="blogtitle mt-2">
                        OZ OVE: Pioneering Next-Generation Mobility Solutions in
                        Australia
                      </p>
                      <p className="blogdesc mt-2">
                        In the ever-evolving landscape of modern transportation,
                        ride-sharing and delivery services have emerged as integral
                        components of our daily lives. Yet, a need for faster, more
                        efficient, and customer-centric services persists. Bridging
                        this gap is Australia&apos;s latest player in this domain, OZ
                        OVE.
                      </p>
                    </div>
                    <p className="blogDate text-darkgrey mt-1">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="/company/blogs/simplyfy-group-bookings-with-oz-ove" target="_blank">
                  <div className="blog_list_section px-1 px-lg-3 py-3 my-1 my-lg-4">
                    <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog4} alt="blog1" /></div>
                    <div style={{ height: "38%" }}>
                      <p className="blogtitle mt-2">
                        Simplify Group Bookings with OZ OVE: Uncover Flexibility,
                        Savings and Innovative Features
                      </p>
                      <p className="blogdesc mt-2">
                        Navigating the landscape of group travel often feels like a
                        daunting task. From coordinating schedules to managing
                        costs, the challenges can sometimes overshadow the joy of
                        travel itself. With the introduction of OZ OVE, Australia&apos;s
                        newest pioneer in mobility solutions, the tides are
                        changing.
                      </p>
                    </div>
                    <p className="blogDate text-darkgrey mt-1">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="/company/blogs/logistics-trends-2022-23 " target="_blank">
                  <div className="blog_list_section px-1 px-lg-3 py-3 my-1 my-lg-4">
                    <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog5} alt="blog1" /></div>
                    <div style={{ height: "38%" }}>
                      <p className="blogtitle mt-2">
                        Logistics Trends 2022-23: Embracing the On-Demand Economy in
                        Australia
                      </p>
                      <p className="blogdesc mt-2">
                        The logistics industry is currently undergoing an
                        unprecedented transformation. Buoyed by the rapid
                        development of technology and changes in consumer behaviour,
                        the industry has seen several noteworthy trends emerge. One
                        of the most prominent trends is the shift towards the
                        on-demand economy.
                      </p>
                    </div>
                    <p className="blogDate text-darkgrey mt-1">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="/company/blogs/revolutionising-mobility" target="_blank">
                  <div className="blog_list_section px-1 px-lg-3 py-3 my-1 my-lg-4">
                    <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog6} alt="blog1" /></div>
                    <div style={{ height: "38%" }}>
                      <p className="blogtitle mt-2">
                        Revolutionising Mobility: Exploring OZ OVE Use Cases
                      </p>
                      <p className="blogdesc mt-2">
                        In the era of digitization and instant gratification, the
                        concept of mobility has taken on a new meaning. It’s no
                        longer about simply getting from point A to point B. It’s
                        about convenience, efficiency, personalization, and
                        sustainability. Enter OZ OVE, a dynamic platform
                        revolutionising mobility in Australia.
                      </p>
                    </div>
                    <p className="blogDate text-darkgrey mt-1">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href="/company/blogs/hyperlocal-deliveries-ascend" target="_blank">
                  <div className="blog_list_section px-1 px-lg-3 py-3 my-1 my-lg-4">
                    <div style={{ height: "55%" }}><Image loader={myLoader} src={Blog7} alt="blog1" /></div>
                    <div style={{ height: "38%" }}>
                      <p className="blogtitle mt-2">
                        Hyperlocal Deliveries Ascend: Digitally Transforming
                        Logistics with OZ Ove in Australia
                      </p>
                      <p className="blogdesc mt-2">
                        The e-commerce landscape has seen a significant pivot
                        towards hyperlocal deliveries, a trend accelerated by
                        consumer&apos;s increasing demand for instant and same-day
                        deliveries. OZ Ove, a front-runner in the Australian
                        logistics industry, has embraced this shift, leveraging it
                        to redefine logistics in the country.
                      </p>
                    </div>
                    <p className="blogDate text-darkgrey mt-1">
                      {formattedDate}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey sign_upSection">
        <div className="container">
          <div className="row  w-100 justify-content-center align-items-center mt-4 mb-2">
            <div className="col-lg-12 d-flex justify-content-center align-items-center flex-column flex-lg-row">
              <p className="sign_uptitle text-center">
                sign up for our Newsletter
              </p>
              <button className="ms-4 bg-white text-grey fw-700 text-capitalize text-center rounded px-4 py-1">
                <Link href={`/home`} target="_blank" className="text-dark">
                  sign up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
