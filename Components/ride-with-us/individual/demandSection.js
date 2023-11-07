"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Points from "../../../public/Images/ride_with_us/ride_individual/points.png"
import Right from "../../../public/Images/ride_with_us/ride_individual/rightArrow.png"
import Left from "../../../public/Images/ride_with_us/ride_individual/leftArrow.png"
import TouristBus from "../../../public/Images/ride_with_us/ride_individual/tourist_bus.png"
import SmallArrow from "../../../public/Images/delivery/smallArrow.png"
import Image1 from "../../../public/Images/ride_with_us/ride_individual/new/image6.png"
import Image2 from "../../../public/Images/ride_with_us/ride_individual/new/image7.png"
import Image3 from "../../../public/Images/ride_with_us/ride_individual/new/image8.png"
import Image4 from "../../../public/Images/ride_with_us/ride_individual/new/Image9.png"
import Image5 from "../../../public/Images/ride_with_us/ride_individual/new/Image10.png"
import Image6 from "../../../public/Images/ride_with_us/ride_individual/new/Image11.png"
import Tab1 from "../../../public/Images/ride_with_us/ride_individual/new/tab1.png"
import OzVan from "../../../public/Images/ride_with_us/ride_individual/ozVan.png"
import OzVanHover from "../../../public/Images/ride_with_us/ride_individual/ozVanHover.png"
import OzBus from "../../../public/Images/ride_with_us/ride_individual/OzBus.png"
import OzBusHover from "../../../public/Images/ride_with_us/ride_individual/OzBusHover.png"
import OzPremium from "../../../public/Images/ride_with_us/ride_individual/OzPremium.png"
import OzPremiumHover from "../../../public/Images/ride_with_us/ride_individual/OzPremiumHover.png"
import Tab1_1 from "../../../public/Images/ride_with_us/ride_individual/new/tab1_1.png"
import Tab1_2 from "../../../public/Images/ride_with_us/ride_individual/new/tab1_2.png"
import Tab1_3 from "../../../public/Images/ride_with_us/ride_individual/new/tab1_3.png"
import Premium_Van from "../../../public/Images/ride_with_us/ride_individual/new/van.png"

function DemandSection() {
  const [activeTab, setActiveTab] = useState('pills-box');
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
                  className="nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center pills-ozVan"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ozVan"
                  aria-controls="pills-ozVan"
                  id="pills-ozVan-tab"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <Image loader={myLoader} className="w-100 object-fit-contain tab_icon_hover" src={OzVanHover} alt='OzVanHover' />
                  <Image loader={myLoader} className="w-100 object-fit-contain tab_icon" src={OzVan} alt='OzVanImage' />
                </button>
              </li>
              <li className="nav-item col-lg-3 my-3 main-li dropdown" role="presentation">
                <button
                  className="nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center"
                  id="pills-ozBus-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ozBus"
                  type="button"
                  role="tab"
                  aria-controls="pills-ozBus"
                  aria-selected="false"
                >
                  <Image loader={myLoader} className="w-100 object-fit-contain tab_icon_hover" src={OzBusHover} alt='OzBusHover' />
                  <Image loader={myLoader} className="w-100 object-fit-contain tab_icon" src={OzBus} alt='OzBusImage' />
                </button>
              </li>
              <li className="nav-item col-lg-3 my-3 main-li" role="presentation">
                <button
                  className="nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center"
                  id="pills-ozPremium-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ozPremium"
                  type="button"
                  role="tab"
                  aria-controls="pills-ozPremium"
                  aria-selected="false"
                >
                  <Image loader={myLoader} className="w-100 object-fit-contain tab_icon_hover" src={OzPremiumHover} alt='OzPremiumHover' />
                  <Image loader={myLoader} className="w-100 object-fit-contain tab_icon" src={OzPremium} alt='OzPremiumImage' />
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div className="tab-pane fade show" id="pills-ozVan" role="tabpanel" aria-labelledby="pills-ozVan-tab">
                <div className="row d-flex">
                  <ul className="nav nav-pills col-md-4 d-flex flex-column align-items-start" id="pills-tab" role="tablist">
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3 active"
                        id="pills-standardVan-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-standardVan"
                        type="button"
                        role="tab"
                        aria-controls="pills-standardVan"
                        aria-selected="true"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Standard Van</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-accessibleVan-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-accessibleVan"
                        type="button"
                        role="tab"
                        aria-controls="pills-accessibleVan"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Wheelchair-Accessible Van</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-partyVan-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-partyVan"
                        type="button"
                        role="tab"
                        aria-controls="pills-partyVan"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Party Van</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-premiumVan-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-premiumVan"
                        type="button"
                        role="tab"
                        aria-controls="pills-premiumVan"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Premium Van</div>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content col-md-8" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-standardVan" role="tabpanel" aria-labelledby="pills-standardVan-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Oz Standard Van</h2>
                              <p className='text-dark my-2'>Roomy and comfortable, our standard vans offer seating for up to 10 passengers</p>
                              <div className='my-3'>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Comfortable</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Spacious</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> up to 10 passengers</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-100 h-100 object-fit-contain' src={Tab1} alt='Tab1' />.0
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-8'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} className="me-1" src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image1} alt='Image1' />
                                      <p className='fw-600 fs-12'>Group Outings</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image2} alt='Image2' />
                                      <p className='fw-600 fs-12'>Team Meetings</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image3} alt='Image3' />
                                      <p className='fw-600 fs-12'>Family Getaways</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-accessibleVan" role="tabpanel" aria-labelledby="pills-accessibleVan-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Oz Access Van</h2>
                              <p className='text-dark my-2'>Designed with inclusivity in mind, our Access Vans provide ample space for wheelchair users and easy accessibility for a smooth ride.</p>
                              <div className='my-3'>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Accessibility</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Smooth Ride</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Ample space </p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-100 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-8'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} className="me-1" src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image1} alt='Image1' />
                                      <p className='fw-600 fs-12'>Individuals With Mobility Impairments</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image2} alt='Image2' />
                                      <p className='fw-600 fs-12'>Senior Citizens</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image3} alt='Image3' />
                                      <p className='fw-600 fs-12'>Individuals With Temporary Injuries</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-partyVan" role="tabpanel" aria-labelledby="pills-partyVan-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Oz Party Van</h2>
                              <p className='text-dark my-2'>Add a touch of fun to your ride! Our party vans come equipped with a premium sound system and vibrant lighting, perfect for starting the celebration on the road."</p>
                              <div className='my-3'>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Premium Sound System</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Vibrant Lighting</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Fun Rides</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-100 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-8'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} className="me-1" src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image1} alt='Image1' />
                                      <p className='fw-600 fs-12'>Fun Transportation.</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image2} alt='Image2' />
                                      <p className='fw-600 fs-12'>Premium Sound & Lighting.</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image3} alt='Image3' />
                                      <p className='fw-600 fs-12'>Mobile Party Experience.</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-premiumVan" role="tabpanel" aria-labelledby="pills-premiumVan-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Oz Elite Van</h2>
                              <p className='text-dark my-2'>Experience a touch of luxury with our Elite Vans. With spacious interiors, comfortable seating, and top-notch amenities, your journey is bound to be memorable."</p>
                              <div className='my-3'>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Spacious Interiors</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Comfortable Seating</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Top-Notch Amenities</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-100 h-100 object-fit-contain' src={Premium_Van} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-8'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} className="me-1" src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab1_1} alt='Image1' />
                                      <p className='fw-600 fs-12'>Celebrity Or VIP Guests</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab1_2} alt='Image2' />
                                      <p className='fw-600 fs-12'>High-End Travelers</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab1_3} alt='Image3' />
                                      <p className='fw-600 fs-12'>Comfort-Seeking Travelers</p>
                                    </li>
                                  </ul>
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
              <div className="tab-pane fade" id="pills-ozBus" role="tabpanel" aria-labelledby="pills-ozBus-tab">
                <div className="row d-flex">
                  <ul className="nav nav-pills col-md-4 d-flex flex-column align-items-start" id="pills-tab" role="tablist">
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3 active"
                        id="pills-smallBus-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-smallBus"
                        type="button"
                        role="tab"
                        aria-controls="pills-smallBus"
                        aria-selected="true"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Small Bus</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-mediumBus-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-mediumBus"
                        type="button"
                        role="tab"
                        aria-controls="pills-mediumBus"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Medium Bus</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-largeBus-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-largeBus"
                        type="button"
                        role="tab"
                        aria-controls="pills-largeBus"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Large Bus</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-partyBus-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-partyBus"
                        type="button"
                        role="tab"
                        aria-controls="pills-partyBus"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Party Bus</div>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content col-md-8" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-smallBus" role="tabpanel" aria-labelledby="pills-smallBus-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Oz Mini Bus</h2>
                              <p className='text-dark my-2'>Compact yet comfortable, our Mini Buses are perfect for smaller groups. Enjoy a relaxed journey with us, no matter your destination.</p>
                              <div className='my-3'>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Comfortable</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Relaxed Journey</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Best for Small Groups</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-100 h-100 object-fit-contain' src={TouristBus} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-8'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} className="me-1" src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image4} alt='Image1' />
                                      <p className='fw-600 fs-12'>Small Groups</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image5} alt='Image2' />
                                      <p className='fw-600 fs-12'>Tourists And Sightseers</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image6} alt='Image3' />
                                      <p className='fw-600 fs-12'>Business Groups</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-mediumBus" role="tabpanel" aria-labelledby="pills-mediumBus-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Medium Bus</h2>
                              <p className='text-dark my-2'>Oz Midi Bus - Striking a perfect balance between capacity and comfort, our Midi Buses cater to larger groups, ensuring everyone arrives together and on time.</p>
                              <div className='my-3'>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> High Storage</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Smooth Ride</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Best for Large Group</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-100 h-100 object-fit-contain' src={TouristBus} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-8'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} className="me-1" src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image4} alt='Image1' />
                                      <p className='fw-600 fs-12'>Tour Groups</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image5} alt='Image2' />
                                      <p className='fw-600 fs-12'>Educational Groups</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image6} alt='Image3' />
                                      <p className='fw-600 fs-12'>Event Attendees</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-largeBus" role="tabpanel" aria-labelledby="pills-largeBus-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Oz Maxi Bus</h2>
                              <p className='text-dark my-2'>Designed for big groups, our Maxi Buses offer ample space, ensuring everyone's comfort on the go. Ideal for corporate events, large gatherings, or group tours.</p>
                              <div className='my-3'>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Versatility</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Group Cohesion</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Cost-effective</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-100 h-100 object-fit-contain' src={TouristBus} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-8'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} className="me-1" src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image4} alt='Image1' />
                                      <p className='fw-600 fs-12'>Event Organizers</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image5} alt='Image2' />
                                      <p className='fw-600 fs-12'>Tour Operators</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image6} alt='Image3' />
                                      <p className='fw-600 fs-12'>Sports Teams</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-partyBus" role="tabpanel" aria-labelledby="pills-partyBus-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Party Bus</h2>
                              <p className='text-dark my-2'>Oz Fiesta Bus - Turn up the fun with our Fiesta Buses. Decked out with a sound system and party lights, these buses bring the party to you, no matter where you're headed.</p>
                              <div className='my-3'>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Safe Transportation</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Convenient And Flexible Party Venue</p>
                                <p className='text-black'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Mobile Party Atmosphere</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-100 h-100 object-fit-contain' src={TouristBus} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-8'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} className="me-1" src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image4} alt='Image1' />
                                      <p className='fw-600 fs-12'>Party Enthusiasts</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image5} alt='Image2' />
                                      <p className='fw-600 fs-12'>Social Gatherings</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image6} alt='Image3' />
                                      <p className='fw-600 fs-12'>Wedding Parties</p>
                                    </li>
                                  </ul>
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
              <div className="tab-pane fade" id="pills-ozPremium" role="tabpanel" aria-labelledby="pills-ozPremium-tab">
              </div>
            </div>
          </div>
          <div className='d-block d-lg-none card my-2'>
            <div className='mob-section p-2'>
              <ul className="nav nav-pills border-0 d-flex justify-content-evenly row" id="pills-tab" role="tablist">
                <li className={`nav-item px-0 ${activeTab === 'pills-ozVan1' ? "" : "my-3"}`} role="presentation">
                  <button
                    className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${activeTab === 'pills-ozVan1' ? 'active' : ''}`}
                    id="pills-ozVan1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ozVan1"
                    type="button"
                    role="tab"
                    aria-controls="pills-ozVan1"
                    aria-selected={activeTab === 'pills-ozVan1'}
                    onClick={() => handleTabClickToggle('pills-ozVan1')}
                  >
                    <Image loader={myLoader} className="object-fit-contain tab_icon" src={OzVan} alt='OzVanImage' style={{ width: "30%" }} />
                  </button>
                </li>
                <div
                  className={`tab-pane fade px-0 ${activeTab === 'pills-ozVan1' ? 'show active' : ''}`}
                  id="pills-ozVan1" role="tabpanel" aria-labelledby="pills-ozVan1-tab">
                  <div className="row d-flex px-0">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1 active"
                          id="pills-standardVan1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-standardVan1"
                          type="button"
                          role="tab"
                          aria-controls="pills-standardVan1"
                          aria-selected="true"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Standard Van</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-accessibleVan1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-accessibleVan1"
                          type="button"
                          role="tab"
                          aria-controls="pills-accessibleVan1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Wheelchair-Accessible Van</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-partyVan1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-partyVan1"
                          type="button"
                          role="tab"
                          aria-controls="pills-partyVan1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Party Van</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-premiumVan1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-premiumVan1"
                          type="button"
                          role="tab"
                          aria-controls="pills-premiumVan1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Premium Van</div>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content col-md-8 px-0" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-standardVan1" role="tabpanel" aria-labelledby="pills-standardVan1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Oz Standard Van</h2>
                                <p className='text-dark my-2 fs-10'>Roomy and comfortable, our standard vans offer seating for up to 10 passengers</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Comfortable</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Spacious</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> up to 10 passengers</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='ny-3'>
                              <div className='card p-3 h-100'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <p className='text-dark text-uppercase fw-700 fs-12'>Who is it for?</p>
                                  </div>
                                  <div>
                                    <Image loader={myLoader} src={SmallArrow} alt='SmallArrow' />
                                  </div>
                                </div>
                                <div className='my-4'>
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-10'>Group Outings</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-10'>Team Meetings</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-10'>Family Getaways</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-accessibleVan1" role="tabpanel" aria-labelledby="pills-accessibleVan1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Oz Access Van</h2>
                                <p className='text-dark my-2 fs-10'>Designed with inclusivity in mind, our Access Vans provide ample space for wheelchair users and easy accessibility for a smooth ride.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Accessibility</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Smooth Ride</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Ample space </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='ny-3'>
                              <div className='card p-3 h-100'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <p className='text-dark text-uppercase fw-700 fs-12'>Who is it for?</p>
                                  </div>
                                  <div>
                                    <Image loader={myLoader} src={SmallArrow} alt='SmallArrow' />
                                  </div>
                                </div>
                                <div className='my-4'>
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-10'>Individuals With Mobility Impairments</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-10'>Senior Citizens</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-10'>Individuals With Temporary Injuries</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-partyVan1" role="tabpanel" aria-labelledby="pills-partyVan1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Oz Party Van</h2>
                                <p className='text-dark my-2 fs-10'>Add a touch of fun to your ride! Our party vans come equipped with a premium sound system and vibrant lighting, perfect for starting the celebration on the road."</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Premium Sound System</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Vibrant Lighting</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Fun Rides</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='ny-3'>
                              <div className='card p-3 h-100'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <p className='text-dark text-uppercase fw-700 fs-12'>Who is it for?</p>
                                  </div>
                                  <div>
                                    <Image loader={myLoader} src={SmallArrow} alt='SmallArrow' />
                                  </div>
                                </div>
                                <div className='my-4'>
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-10'>Fun Transportation.</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-10'>Premium Sound & Lighting.</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-10'>Mobile Party Experience.</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-premiumVan1" role="tabpanel" aria-labelledby="pills-premiumVan1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Oz Elite Van</h2>
                                <p className='text-dark my-2 fs-10'>Experience a touch of luxury with our Elite Vans. With spacious interiors, comfortable seating, and top-notch amenities, your journey is bound to be memorable."</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Spacious Interiors</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Comfortable Seating</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Top-Notch Amenities</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='ny-3'>
                              <div className='card p-3 h-100'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <p className='text-dark text-uppercase fw-700 fs-12'>Who is it for?</p>
                                  </div>
                                  <div>
                                    <Image loader={myLoader} src={SmallArrow} alt='SmallArrow' />
                                  </div>
                                </div>
                                <div className='my-4'>
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-10'>Celebrity Or VIP Guests</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-10'>High-End Travelers</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-10'>Comfort-Seeking Travelers</p>
                                      </li>
                                    </ul>
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
                <li className={`nav-item px-0 ${activeTab === 'pills-ozBus1' ? "" : "my-3"}`} role="presentation">
                  <button
                    className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${activeTab === 'pills-ozBus1' ? 'active' : ''}`}
                    id="pills-ozBus1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ozBus1"
                    type="button"
                    role="tab"
                    aria-controls="pills-ozBus1"
                    aria-selected={activeTab === 'pills-ozBus1'}
                    onClick={() => handleTabClickToggle('pills-ozBus1')}
                  >
                    <Image loader={myLoader} className="object-fit-contain tab_icon" src={OzBus} alt='OzBusImage' style={{ width: "30%" }} />
                  </button>
                </li>
                <div
                  className={`tab-pane fade ${activeTab === 'pills-ozBus1' ? 'show active' : ''}`}
                  id="pills-ozBus1" role="tabpanel" aria-labelledby="pills-ozBus1-tab">
                  <div className="row d-flex px-0">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1 active"
                          id="pills-smallBus1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-smallBus1"
                          type="button"
                          role="tab"
                          aria-controls="pills-smallBus1"
                          aria-selected="true"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px"}}>Small Bus</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-mediumBus1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-mediumBus1"
                          type="button"
                          role="tab"
                          aria-controls="pills-mediumBus1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px"}}>Medium Bus</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-largeBus1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-largeBus1"
                          type="button"
                          role="tab"
                          aria-controls="pills-largeBus1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px"}}>Large Bus</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-partyBus1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-partyBus1"
                          type="button"
                          role="tab"
                          aria-controls="pills-partyBus1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "7px 20px", borderRadius: "40px" }}>Party Bus</div>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content col-md-8 px-0" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-smallBus1" role="tabpanel" aria-labelledby="pills-smallBus1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Oz Mini Bus</h2>
                                <p className='text-dark my-2 fs-10'>Compact yet comfortable, our Mini Buses are perfect for smaller groups. Enjoy a relaxed journey with us, no matter your destination.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Comfortable</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Relaxed Journey</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Best for Small Groups</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='ny-3'>
                              <div className='card p-3 h-100'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <p className='text-dark text-uppercase fw-700 fs-12'>Who is it for?</p>
                                  </div>
                                  <div>
                                    <Image loader={myLoader} src={SmallArrow} alt='SmallArrow' />
                                  </div>
                                </div>
                                <div className='my-4'>
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-10'>Small Groups</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-10'>Tourists And Sightseers</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-10'>Business Groups</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-mediumBus1" role="tabpanel" aria-labelledby="pills-mediumBus1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Medium Bus</h2>
                                <p className='text-dark my-2 fs-10'>Oz Midi Bus - Striking a perfect balance between capacity and comfort, our Midi Buses cater to larger groups, ensuring everyone arrives together and on time.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> High Storage</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Smooth Ride</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Best for Large Group</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='ny-3'>
                              <div className='card p-3 h-100'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <p className='text-dark text-uppercase fw-700 fs-12'>Who is it for?</p>
                                  </div>
                                  <div>
                                    <Image loader={myLoader} src={SmallArrow} alt='SmallArrow' />
                                  </div>
                                </div>
                                <div className='my-4'>
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-10'>Tour Groups</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-10'>Educational Groups</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-10'>Event Attendees</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-largeBus1" role="tabpanel" aria-labelledby="pills-largeBus1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Oz Maxi Bus</h2>
                                <p className='text-dark my-2 fs-10'>Designed for big groups, our Maxi Buses offer ample space, ensuring everyone's comfort on the go. Ideal for corporate events, large gatherings, or group tours.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Versatility</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Group Cohesion</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Cost-effective</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='ny-3'>
                              <div className='card p-3 h-100'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <p className='text-dark text-uppercase fw-700 fs-12'>Who is it for?</p>
                                  </div>
                                  <div>
                                    <Image loader={myLoader} src={SmallArrow} alt='SmallArrow' />
                                  </div>
                                </div>
                                <div className='my-4'>
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-10'>Event Organizers</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-10'>Tour Operators</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-10'>Sports Teams</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-partyBus1" role="tabpanel" aria-labelledby="pills-partyBus1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Party Bus</h2>
                                <p className='text-dark my-2 fs-10'>Oz Fiesta Bus - Turn up the fun with our Fiesta Buses. Decked out with a sound system and party lights, these buses bring the party to you, no matter where you're headed.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Safe Transportation</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Convenient And Flexible Party Venue</p>
                                  <p className='text-black fs-14'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Mobile Party Atmosphere</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='ny-3'>
                              <div className='card p-3 h-100'>
                                <div className='d-flex justify-content-between'>
                                  <div>
                                    <p className='text-dark text-uppercase fw-700 fs-12'>Who is it for?</p>
                                  </div>
                                  <div>
                                    <Image loader={myLoader} src={SmallArrow} alt='SmallArrow' />
                                  </div>
                                </div>
                                <div className='my-4'>
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-10'>Party Enthusiasts</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-10'>Social Gatherings</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-10'>Wedding Parties</p>
                                      </li>
                                    </ul>
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
                <li className={`nav-item px-0 ${activeTab === 'pills-ozPremium1' ? "" : "my-3"}`} role="presentation">
                  <button
                    className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${activeTab === 'pills-ozPremium1' ? 'active' : ''}`}
                    id="pills-ozPremium1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ozPremium1"
                    type="button"
                    role="tab"
                    aria-controls="pills-ozPremium1"
                    aria-selected={activeTab === 'pills-ozPremium1'}
                    onClick={() => handleTabClickToggle('pills-ozPremium1')}
                  >
                    <Image loader={myLoader} className="object-fit-contain tab_icon" src={OzPremium} alt='OzPremiumImage' style={{ width: "50%" }} />
                  </button>
                </li>
                <div
                  className={`tab-pane fade ${activeTab === 'pills-ozPremium1' ? 'show active' : ''}`}
                  id="pills-ozPremium1" role="tabpanel" aria-labelledby="pills-ozPremium1-tab">
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
