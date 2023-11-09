"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Images/Footer/Logo.png";
import FaceebokkIcon from "../../public/Images/Footer/Social_Media/Facebook_icon.png";
import InstagramIcon from "../../public/Images/Footer/Social_Media/Instagram_icon.png";
import TwiterIcon from "../../public/Images/Footer/Social_Media/Twiiter_icon.png";
import LinkedInIcon from "../../public/Images/Footer/Social_Media/LinkedIn_icon.png";

function Footer(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet);
      }
    }
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className={`footer_section pt-3`}>
        <div className="container">
          <div className="inner_upper_section">
            <div className="row align-items-end">
              <div className="col-lg-9 col-md-6 px-0">
                <div className="Logo cursor-pointer navbar-brand">
                  <Link href={`/home`}>
                    <Image
                      loader={myLoader}
                      className={`${isTablet ? "w-50" : "w-25"}`}
                      src={Logo}
                      alt="logo"
                      height={100}
                    />
                  </Link>
                </div>
              </div>

              <div className="top-border-footer-top my-2"></div>
              <div className="col-lg-3 col-md-6">
                <div className="social_media_section">
                  <div className="row">
                    <div className="col-12">
                      <p className="follow_title bold-text small-paragraph fw-700 my-3 w-50">
                        Follow
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <Link href="/launch" target="_blank">
                        <Image
                          loader={myLoader}
                          src={FaceebokkIcon}
                          alt="logo"
                          height={100}
                          width={100}
                        />
                      </Link>
                    </div>
                    <div className="col-3">
                      <Link href="/launch" target="_blank">
                        <Image
                          loader={myLoader}
                          src={InstagramIcon}
                          alt="logo"
                          height={100}
                          width={100}
                        />
                      </Link>
                    </div>
                    <div className="col-3">
                      <Link href="/launch" target="_blank">
                        <Image
                          loader={myLoader}
                          src={TwiterIcon}
                          alt="logo"
                          height={100}
                          width={100}
                        />
                      </Link>
                    </div>
                    <div className="col-3">
                      <Link href="/launch" target="_blank">
                        <Image
                          loader={myLoader}
                          src={LinkedInIcon}
                          alt="logo"
                          height={100}
                          width={100}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Lower Section */}
          <div className="inner_lower_section pt-4">
            <div className="row align-items-start">
              <div className="col-lg-2 col-md-4">
                <h3 className="footer_page_title small-paragraph">
                  Individual
                </h3>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/delivery/individual">Ship with Us</Link>
                </p>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/ride-with-us/individual">Ride with Us</Link>
                </p>
              </div>
              <div className="col-lg-2 col-md-4">
                <h3 className="footer_page_title small-paragraph">
                  Businesses
                </h3>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/ride-with-us/business">Rides</Link>
                </p>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/delivery/business">Delivery</Link>
                </p>
              </div>
              <div className="col-lg-4 col-md-4">
                {/* <div className="col-lg-4 col-md-3 d-flex flex-column align-items-md-center align-items-sm-start"> */}
                <h3 className="footer_page_title small-paragraph">
                  Drive with Us
                </h3>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/drive-with-us/apply-to-drive">
                    Apply to Drive
                  </Link>
                </p>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/drive-with-us/fleet-management">
                    Become a Fleet Operator
                  </Link>
                </p>
              </div>
              <div className="col-lg-2 col-md-4">
                <h3 className="footer_page_title small-paragraph">Company</h3>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/company/about-us">About Us</Link>
                </p>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/company/contact-us">Contact Us</Link>
                </p>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/company/careers">Careers</Link>
                </p>
              </div>
              <div className="col-lg-2 col-md-4 px-lg-0">
                <h3 className="footer_page_title small-paragraph">Legal</h3>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/launch" target="_self">
                    Privacy Policy
                  </Link>
                </p>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/launch" target="_self">
                    Cookie Policy
                  </Link>
                </p>
                <p className="my-2 footer_inner_pages_subtitle fs-6">
                  <Link href="/launch" target="_self">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>

            {/* START Mobile in Used Social Media Section */}
            <div className="row">
              <div className="mobile_social_media_section">
                <div className="row d-none d-md-block">
                  <div className="col-12">
                    <p className="follow_title bold-text small-paragraph fw-700 my-3 w-50">
                      Follow
                    </p>
                  </div>
                </div>
                <div className="row my-3 my-md-0">
                  <div className="col-3 px-0">
                    <Link href="/launch" target="_blank">
                      <Image
                        loader={myLoader}
                        src={FaceebokkIcon}
                        alt="logo"
                        height={100}
                        width={100}
                      />
                    </Link>
                  </div>
                  <div className="col-3 px-0">
                    <Link href="/launch" target="_blank">
                      <Image
                        loader={myLoader}
                        src={InstagramIcon}
                        alt="logo"
                        height={100}
                        width={100}
                      />
                    </Link>
                  </div>
                  <div className="col-3 px-0">
                    <Link href="/launch" target="_blank">
                      <Image
                        loader={myLoader}
                        src={TwiterIcon}
                        alt="logo"
                        height={100}
                        width={100}
                      />
                    </Link>
                  </div>
                  <div className="col-3 px-0">
                    <Link href="/launch" target="_blank">
                      <Image
                        loader={myLoader}
                        src={LinkedInIcon}
                        alt="logo"
                        height={100}
                        width={100}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* END Mobile in Used Social Media Section */}

            <div className="row justify-content-center d-none d-md-flex">
              <div className="col-lg-6">
                <div className="border-footer-top my-2"></div>
              </div>
            </div>
            <div className="row justify-content-center d-none d-md-block">
              <div className="col-12">
                <p className="comapny_rights text-center my-3 small-paragraph">
                  OZ Ove © 2023 | Journeying Forward, Together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
