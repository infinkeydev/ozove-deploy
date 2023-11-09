"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Points from "../../public/Images/ride_with_us/ride_business/points.png"
import TouristBus from "../../public/Images/ride_with_us/ride_business/tourist_bus.png"
import SmallArrow from "../../public/Images/delivery/smallArrow.png"
import Image1 from "../../public/Images/ride_with_us/ride_business/image1.png"
import Image2 from "../../public/Images/ride_with_us/ride_business/image2.png"
import Image3 from "../../public/Images/ride_with_us/ride_business/image3.png"
import Image4 from "../../public/Images/ride_with_us/ride_business/image4.png"
import Image5 from "../../public/Images/ride_with_us/ride_business/image5.png"
import OnDemand from "../../public/Images/ride_with_us/ride_business/OnDemand.png"
import OnDemandHover from "../../public/Images/ride_with_us/ride_business/OnDemandHover.png"

function DemandSection() {
  const [activeTab, setActiveTab] = useState('pills-box');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet);
      }
      if (window.innerWidth <= 1500) {
        setIsLaptop(!isLaptop);
      }
    }
  }, []);

  const handleTabClickToggle = (tabId) => {
    setActiveTab(tabId); // Update the active tab when a tab is clicked
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };

  return (
    <>
      <div className="On_Demand_Section section-spacer">
        <div className="container">
          <div className="row d-none d-lg-flex justify-content-center On_Demand_Section_Options">
            <ul className="nav nav-pills border-0 d-flex justify-content-evenly row" id="pills-tab" role="tablist">
              <li className="nav-item col-lg-3 my-3 main-li" role="presentation">
                <button
                  className="nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center pills-onDemand"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-onDemand"
                  aria-controls="pills-onDemand"
                  id="pills-onDemand-tab"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <Image loader={myLoader} className="w-100 object-fit-contain tab_icon" src={OnDemand} alt='OnDemandImage' />
                  <Image loader={myLoader} className="w-100 object-fit-contain tab_icon_hover" src={OnDemandHover} alt='OnDemandHover' />
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div className="tab-pane fade show" id="pills-onDemand" role="tabpanel" aria-labelledby="pills-onDemand-tab">
                <div className="row d-flex">
                  <ul className="nav nav-pills col-md-4 d-flex flex-column align-items-start" id="pills-tab" role="tablist">
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3 active"
                        id="pills-shuttleService-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-shuttleService"
                        type="button"
                        role="tab"
                        aria-controls="pills-shuttleService"
                        aria-selected="true"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Shuttle Service</div>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content col-md-8" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-shuttleService" role="tabpanel" aria-labelledby="pills-shuttleService-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>On-Demand Shuttle Service</h2>
                              <p className='text-dark my-2'>Experience flexibility like never before with our unique On-Demand Shuttle service. We empower you to establish a shuttle route of any size and duration, tailored perfectly to your specific needs. Whether you're looking for a compact loop or an expansive network, we've got you covered.</p>
                              <div className='my-3'>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Flexibility in size</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Efficient and conveneint</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Cost-effective</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={TouristBus} alt='TouristBus' />
                            </div>
                          </div>
                        </div>
                        <div className='card bg-white p-2 h-100'>
                          <div className='d-flex justify-content-start'>
                            <p className='text-dark text-uppercase fw-700 fs-5' style={{ marginRight: "12px", marginLeft: "12px" }}>Who is it for?</p>
                          </div>
                          <div className='my-4'>
                            <div className='row'>
                              <div className="col-lg-6 d-flex mb-3">
                                <div>
                                  <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                </div>
                                <div className="ms-2">
                                  <p className={`fw-700 ${isLaptop ? "fs-18" : "fs-20"}`}>University & Campus Shuttles</p>
                                  <p className="fs-15">Streamline The Commuting Process For Students And Faculty With Reliable, Efficient Shuttles. Design Routes That Encompass All Essential Locations On Your Campus.</p>
                                </div>
                              </div>
                              <div className="col-lg-6 d-flex mb-3">
                                <div>
                                  <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                </div>
                                <div className="ms-2">
                                  <p className={`fw-700 ${isLaptop ? "fs-18" : "fs-20"}`}>Corporate & Employee Shuttles</p>
                                  <p className="fs-15">Make Employee Transportation Stress-Free And Efficient. Boost Morale And Productivity By Offering An Easy, Comfortable Commute.</p>
                                </div>
                              </div>
                              <div className="col-lg-6 d-flex mb-3">
                                <div>
                                  <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                </div>
                                <div className="ms-2">
                                  <p className={`fw-700 ${isLaptop ? "fs-18" : "fs-20"}`}>Healthcare Worker Shuttle Services</p>
                                  <p className="fs-15">Provide Critical Transport Services For Healthcare Workers And Patients Alike. We Understand The Importance Of Timely Transportation In Healthcare Let Us Manage The Logistics For You.</p>
                                </div>
                              </div>
                              <div className="col-lg-6 d-flex mb-3">
                                <div>
                                  <Image loader={myLoader} className='h-auto object-fit-contain' src={Image4} alt='Image4' />
                                </div>
                                <div className="ms-2">
                                  <p className={`fw-700 ${isLaptop ? "fs-18" : "fs-20"}`}>Airport Shuttles</p>
                                  <p className="fs-15">Navigating Airport Transport Can Be Hectic. Whether You're An Airline Or An Airport, Set Up Smooth And Hassle-Free Shuttles For Travellers.</p>
                                </div>
                              </div>
                              <div className="col-lg-6 d-flex mb-3">
                                <div>
                                  <Image loader={myLoader} className='h-auto object-fit-contain' src={Image5} alt='Image5' />
                                </div>
                                <div className="ms-2">
                                  <p className={`fw-700 ${isLaptop ? "fs-18" : "fs-20"}`}>Private Shuttle Services</p>
                                  <p className="fs-15">Planning A Special Event, A Private Tour, Or Need Shuttles For Any Personal Requirement? We Cater To A Variety Of Private Shuttle Services, Customized To Your Preferences.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-block d-lg-none card my-2'>
            <div className='mob-section p-2'>
              <ul className="nav nav-pills border-0 d-flex justify-content-evenly row" id="pills-tab" role="tablist">
                <li className={`nav-item px-0 ${activeTab === 'pills-onDemand1' ? "" : "my-3"}`} role="presentation">
                  <button
                    className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${activeTab === 'pills-onDemand1' ? 'active' : ''}`}
                    id="pills-onDemand1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-onDemand1"
                    type="button"
                    role="tab"
                    aria-controls="pills-onDemand1"
                    aria-selected={activeTab === 'pills-onDemand1'}
                    onClick={() => handleTabClickToggle('pills-onDemand1')}
                  >
                    <Image loader={myLoader} className="object-fit-contain tab_icon" src={OnDemand} alt='OnDemandImage' style={{ width: "70%" }} />
                    {/* <Image loader={myLoader} className="w-100 object-fit-contain tab_icon_hover" src={OnDemandHover} alt='OnDemandHover' /> */}
                  </button>
                </li>
                <div
                  className={`tab-pane fade px-0 ${activeTab === 'pills-onDemand1' ? 'show active' : ''}`}
                  id="pills-onDemand1"
                  role="tabpanel"
                  aria-labelledby="pills-onDemand1-tab">
                  <div className="row d-flex px-0">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1 active"
                          id="pills-shuttleService-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-shuttleService"
                          type="button"
                          role="tab"
                          aria-controls="pills-shuttleService"
                          aria-selected="true"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Shuttle Service</div>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content col-md-8 px-0" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-shuttleService" role="tabpanel" aria-labelledby="pills-shuttleService-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={TouristBus} alt='TouristBus' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>On-Demand Shuttle Service</h2>
                                <p className='text-dark my-2 fs-10 fw-500'>Experience flexibility like never before with our unique On-Demand Shuttle service. We empower you to establish a shuttle route of any size and duration, tailored perfectly to your specific needs. Whether you're looking for a compact loop or an expansive network, we've got you covered.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Flexibility in size</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Efficient and conveneint</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Cost-effective</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='card p-3 h-100 card_1'>
                            <div className='d-flex justify-content-between'>
                              <div>
                                <p className='text-dark text-uppercase fw-700 fs-12'>Who is it for?</p>
                              </div>
                              <div>
                                <Image loader={myLoader} src={SmallArrow} alt='SmallArrow' />
                              </div>
                            </div>
                            <div className='my-4'>
                              <div className='overflow-x-auto d-flex'>
                                <div className="mx-2">
                                  <div>
                                    <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                  </div>
                                  <div className="ms-2">
                                    <p className='fw-700 fs-12'>University & Campus Shuttles</p>
                                    <p className="fs-10 fw-500">Streamline The Commuting Process For Students And Faculty With Reliable, Efficient Shuttles. Design Routes That Encompass All Essential Locations On Your Campus.</p>
                                  </div>
                                </div>
                                <div className="mx-2">
                                  <div>
                                    <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                  </div>
                                  <div className="ms-2">
                                    <p className='fw-700 fs-12'>Corporate & Employee Shuttles</p>
                                    <p className="fs-10 fw-500">Make Employee Transportation Stress-Free And Efficient. Boost Morale And Productivity By Offering An Easy, Comfortable Commute.</p>
                                  </div>
                                </div>
                                <div className="mx-2">
                                  <div>
                                    <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                  </div>
                                  <div className="ms-2">
                                    <p className='fw-700 fs-12'>Healthcare Worker Shuttle Services</p>
                                    <p className="fs-10 fw-500">Provide Critical Transport Services For Healthcare Workers And Patients Alike. We Understand The Importance Of Timely Transportation In Healthcare Let Us Manage The Logistics For You.</p>
                                  </div>
                                </div>
                                <div className="mx-2">
                                  <div>
                                    <Image loader={myLoader} className='h-auto object-fit-contain' src={Image4} alt='Image4' />
                                  </div>
                                  <div className="ms-2">
                                    <p className='fw-700 fs-12'>Airport Shuttles</p>
                                    <p className="fs-10 fw-500">Navigating Airport Transport Can Be Hectic. Whether You're An Airline Or An Airport, Set Up Smooth And Hassle-Free Shuttles For Travellers.</p>
                                  </div>
                                </div>
                                <div className="mx-2">
                                  <div>
                                    <Image loader={myLoader} className='h-auto object-fit-contain' src={Image5} alt='Image5' />
                                  </div>
                                  <div className="ms-2">
                                    <p className='fw-700 fs-12'>Private Shuttle Services</p>
                                    <p className="fs-10 fw-500">Planning A Special Event, A Private Tour, Or Need Shuttles For Any Personal Requirement? We Cater To A Variety Of Private Shuttle Services, Customized To Your Preferences.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DemandSection;
