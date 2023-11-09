"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Related1 from "../../../public/Images/blogs/related1.png";
import Related2 from "../../../public/Images/blogs/related2.png";
import Related3 from "../../../public/Images/blogs/related3.png";
import Link from "next/link";

function SectionThree() {
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
      <div className="section_3_bg">
        <div className="container">
          <h1 className="related_posts">Related Posts</h1>
          <div className="row w-100 mx-0 my-3">
            <div className="col-md-4 my-3">
              <div className="card px-3 py-3 h-100">
                <div style={{ height: "60%" }}>
                  <Image loader={myLoader} className="w-100 h-100" src={Related1} alt="related1" />
                </div>
                <div style={{ height: "33%" }}>
                  <p className="related_head mt-2">
                    Entrepreneurial Insights: Lessons Learned from Ozove&apos;s Founders
                  </p>
                  <p className="text-black mt-2 related_post_desc">
                    Gain valuable insights from the minds behind Ozove as they share their entrepreneurial experiences, triumphs, and setbacks.
                  </p>
                </div>
                <p className="blogDate text-darkgrey mt-1">
                  {formattedDate}
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="card px-3 py-3 h-100">
                <div style={{ height: "60%" }}>
                  <Image loader={myLoader} className="w-100 h-100" src={Related2} alt="related2" />
                </div>
                <div style={{ height: "33%" }}>
                  <p className="related_head mt-2">
                    The Role of AI and Machine Learning in Ozove&apos;s On-Demand Services
                  </p>
                  <p className="text-black mt-2 related_post_desc">
                    Unravel the role of artificial intelligence and machine learning in optimizing Ozove&apos;s on-demand services. Learn how AI-driven algorithms analyze vast amounts of data to predict demand.
                  </p>
                </div>
                <p className="blogDate text-darkgrey mt-1">
                  {formattedDate}
                </p>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="card px-3 py-3 h-100">
                <div style={{ height: "60%" }}>
                  <Image loader={myLoader} className="w-100 h-100" src={Related3} alt="related3" />
                </div>
                <div style={{ height: "33%" }}>
                  <p className="related_head mt-2">
                    Transforming the Last Mile: How Ozove Redefines Delivery Logistics
                  </p>
                  <p className="text-black mt-2 related_post_desc">
                    Discover how Ozove&apos;s innovative approach to last-mile logistics is revolutionizing the final stage of delivery. Explore their adaptive delivery strategies, real-time route optimization.
                  </p>
                </div>
                <p className="blogDate text-darkgrey mt-1">
                  {formattedDate}
                </p>
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
                <Link href={`/launch`} target="_blank" className="text-dark">
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

export default SectionThree;
