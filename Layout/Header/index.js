"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo1 from "../../public/Images/Header/Oz_logo.png";
import Link from "next/link";

function Header(props) {
  const [isTablet, setIsTablet] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <header className="sticky-top header_section">
        <div className="container">
          <nav className="header_container navbar navbar-expand-lg navbar-sticky navbar-fixed-top">
            <div className="w-100 d-flex">
              <Link
                className="navbar-brand"
                href={`/home`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={closeMenu}
              >
                <Image loader={myLoader} src={Logo1} alt="Logo1" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
                data-bs-toggle="offcanvas"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`offcanvas offcanvas-end text-bg-dark d-lg-flex align-items-lg-center flex-lg-row ${
                  !isMenuOpen ? "" : "show"
                } ${isTablet ? "h-100 overflow-auto" : ""}`}
                id="navbarSupportedContent"
              >
                <div className="offcanvas-header w-100">
                  <a className="navbar-brand">
                    <Image
                      loader={myLoader}
                      className="w-100 h-auto object-fit-contain"
                      src={Logo1}
                      alt="Logo1"
                    />
                  </a>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={toggleMenu}
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <ul
                  className={`navbar-nav justify-content-lg-end ${
                    isTablet ? "p-2" : ""
                  }`}
                >
                  <li className="nav-item fw-600">
                    <Link
                      className="nav-link text-white active"
                      href="/home"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                  </li>
                  {isTablet ? <hr className="my-1" /> : <></>}
                  <li className="nav-item dropdown fw-600">
                    <a
                      className="nav-link text-white dropdown-toggle"
                      id="rideWithUsDropdownMenuButton"
                      aria-haspopup="true"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Ride with Us
                    </a>
                    <div
                      className={`dropdown-menu ${isTablet ? "show" : ""}`}
                      aria-labelledby="rideWithUsDropdownMenuButton"
                    >
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/ride-with-us/individual`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        Individual
                      </Link>
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/ride-with-us/business`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        Business
                      </Link>
                    </div>
                  </li>
                  {isTablet ? <hr className="my-1" /> : <></>}
                  <li className="nav-item dropdown fw-600">
                    <a
                      className="nav-link text-white dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="deliveryDropdownMenuButton"
                    >
                      Delivery
                    </a>
                    <div
                      className={`dropdown-menu ${isTablet ? "show" : ""}`}
                      aria-labelledby="deliveryDropdownMenuButton"
                    >
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/delivery/individual`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        Individual
                      </Link>
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/delivery/business`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        Business
                      </Link>
                    </div>
                  </li>
                  {isTablet ? <hr className="my-1" /> : <></>}
                  <li className="nav-item dropdown fw-600">
                    <a
                      className="nav-link text-white dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="driveWithUsDropdownMenuButton"
                    >
                      Drive with Us
                    </a>
                    <div
                      className={`dropdown-menu ${isTablet ? "show" : ""}`}
                      aria-labelledby="driveWithUsDropdownMenuButton"
                    >
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/drive-with-us/apply-to-drive`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        Apply to Drive
                      </Link>
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/drive-with-us/fleet-management`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        Fleet Management
                      </Link>
                    </div>
                  </li>
                  {isTablet ? <hr className="my-1" /> : <></>}
                  <li className="nav-item dropdown fw-600">
                    <a
                      className="nav-link text-white dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="companyDropdownMenuButton"
                    >
                      Company
                    </a>
                    <div
                      className={`dropdown-menu ${isTablet ? "show" : ""}`}
                      aria-labelledby="companyDropdownMenuButton"
                    >
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/company/about-us`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        About Us
                      </Link>
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/company/contact-us`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        Contact Us
                      </Link>
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/company/careers`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        Career
                      </Link>
                      <Link
                        className={`dropdown-item fw-600 fs-15 ${
                          isTablet ? "px-0" : ""
                        }`}
                        href={`/company/blogs`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={closeMenu}
                      >
                        Blogs
                      </Link>
                    </div>
                  </li>
                </ul>
                {isTablet ? <hr className="my-1" /> : <></>}
                <div
                  className={`d-flex flex-row ${isTablet ? "my-3" : "my-2"}`}
                >
                  <div
                    className="mx-2"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={closeMenu}
                  >
                    <button className="btn btn-dark border border-white text-uppercase fw-700 text-nowrap bg-grey py-1 text-white px-3">
                      <Link
                        href={`/launch`}
                        target="_blank"
                        className="text-white"
                      >
                        Login in
                      </Link>
                    </button>
                  </div>
                  <div
                    className="mx-2"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={closeMenu}
                  >
                    <button className="btn bg-socialiconyellow text-uppercase fw-700 text-nowrap py-1 text-grey px-3">
                      <Link
                        href={`/launch`}
                        target="_blank"
                        className="text-grey"
                      >
                        Sign Up
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
