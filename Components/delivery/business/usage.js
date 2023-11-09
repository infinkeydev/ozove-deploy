"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Points from "../../../public/Images/delivery/points.png"
import Right from "../../../public/Images/delivery/rightArrow.png"
import Left from "../../../public/Images/delivery/leftArrow.png"
import SmallArrow from "../../../public/Images/delivery/smallArrow.png"
import Tab1 from "../../../public/Images/delivery/tab1.png"
import Tab2 from "../../../public/Images/delivery/tab2.png"
import Tab101 from "../../../public/Images/delivery/new/tab_2_1.png"
import Tab102 from "../../../public/Images/delivery/new/tab_2_2.png"
import Tab103 from "../../../public/Images/delivery/new/tab_2_3.png"
import Image1 from "../../../public/Images/ride_with_us/ride_individual/image6.png"
import Image2 from "../../../public/Images/ride_with_us/ride_individual/image7.png"
import Image3 from "../../../public/Images/ride_with_us/ride_individual/image8.png"
import NewImage3 from "../../../public/Images/delivery/new/newImage3.png"
import Hyperlocal from "../../../public/Images/delivery/hyperLocal.png";
import HyperlocalActive from "../../../public/Images/delivery/hyperLocalHover.png";
import LastMile from "../../../public/Images/delivery/lastMile.png";
import LastMileActive from "../../../public/Images/delivery/lastMileHover.png";
import ECommerce from "../../../public/Images/delivery/eCommerce.png";
import ECommerceActive from "../../../public/Images/delivery/eCommerceHover.png";

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
      <div className="Hyper_Local_Section section-spacer">
        <div className="container">
          <div className="row justify-content-center Hyper_Local_Section_Options d-none d-lg-flex">
            <ul className="nav nav-pills border-0 d-flex justify-content-evenly row" id="pills-tab" role="tablist">
              <li className="nav-item col-lg-3 my-3 main-li" role="presentation">
                <button
                  className="nav-link w-100 px-1 d-flex align-items-center justify-content-center pills-hyperlocal"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-hyperlocal"
                  aria-controls="pills-hyperlocal"
                  id="pills-hyperlocal-tab"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <Image loader={myLoader} style={{ width: isLaptop ? "80%" : "100%" }} className="object-fit-contain tab_icon_hover" src={HyperlocalActive} alt='HyperlocalActive' />
                  <Image loader={myLoader} style={{ width: isLaptop ? "80%" : "100%" }} className="object-fit-contain tab_icon" src={Hyperlocal} alt='HyperlocalImage' />
                </button>
              </li>
              <li className="nav-item col-lg-3 my-3 main-li" role="presentation">
                <button
                  className="nav-link w-100 px-1 d-flex align-items-center justify-content-center"
                  id="pills-lastmile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-lastmile"
                  type="button"
                  role="tab"
                  aria-controls="pills-lastmile"
                  aria-selected="false"
                >
                  <Image loader={myLoader} style={{ width: isLaptop ? "65%" : "100%" }} className="object-fit-contain tab_icon" src={LastMile} alt='LastMileImage' />
                  <Image loader={myLoader} style={{ width: isLaptop ? "65%" : "100%" }} className="object-fit-contain tab_icon_hover" src={LastMileActive} alt='LastMileActiveImage' />
                </button>
              </li>
              <li className="nav-item col-lg-3 my-3 main-li" role="presentation">
                <button
                  className="nav-link w-100 px-1 d-flex align-items-center justify-content-center"
                  id="pills-ecommerce-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ecommerce"
                  type="button"
                  role="tab"
                  aria-controls="pills-ecommerce"
                  aria-selected="false"
                >
                  <Image loader={myLoader} style={{ width: isLaptop ? "90%" : "100%" }} className='object-fit-contain tab_icon' src={ECommerce} alt='ECommerceImage' />
                  <Image loader={myLoader} style={{ width: isLaptop ? "90%" : "100%" }} className='object-fit-contain tab_icon_hover' src={ECommerceActive} alt='ECommerceActiveImage' />
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div className="tab-pane fade show" id="pills-hyperlocal" role="tabpanel" aria-labelledby="pills-hyperlocal-tab">
                <div className="row d-flex">
                  <ul className="nav nav-pills col-md-4 d-flex flex-column align-items-start" id="pills-tab" role="tablist">
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3 active"
                        id="pills-ozOveNow-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-ozOveNow"
                        type="button"
                        role="tab"
                        aria-controls="pills-ozOveNow"
                        aria-selected="true"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Oz Ove - Now</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-retailLogistics-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-retailLogistics"
                        type="button"
                        role="tab"
                        aria-controls="pills-retailLogistics"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Retail Logistics</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-ozOvePlus-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-ozOvePlus"
                        type="button"
                        role="tab"
                        aria-controls="pills-ozOvePlus"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Oz Ove - Plus</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-ozOveNext-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-ozOveNext"
                        type="button"
                        role="tab"
                        aria-controls="pills-ozOveNext"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Oz Ove - Next</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-nowSlot-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-nowSlot"
                        type="button"
                        role="tab"
                        aria-controls="pills-nowSlot"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Now Slot - Store Pick Up Model</div>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content col-md-8" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-ozOveNow" role="tabpanel" aria-labelledby="pills-ozOveNow-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Oz Ove Now Services</h2>
                              <p className='text-dark my-2'>Low-cost & convenient deliveries, done under 45 minutes, apt for food, pharma, & groceries orders</p>
                              <div className='my-3'>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Realtime serviceability check</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Cross-category utilisation</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Marketplace Fleet Access</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image1} alt='Image1' />
                                      <p className='fw-600 fs-12'>Food</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image2} alt='Image2' />
                                      <p className='fw-600 fs-12'>Grocery</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={NewImage3} alt='Image3' />
                                      <p className='fw-600 fs-12'>Pharma</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div className='card bg-white p-2 h-100'>
                              <p className='text-dark text-uppercase fw-700 fs-5 my-2'>
                                Benefits
                              </p>
                              <div className='my-3'>
                                <p className='fw-700'>Industry</p>
                                <p className='fs-15'>Best delivery speed</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Cost</p>
                                <p className='fs-15'>Low per order cost</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Peak Management</p>
                                <p className='fs-15'>Upto 100% flex in order volumes</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-retailLogistics" role="tabpanel" aria-labelledby="pills-retailLogistics-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Retail Logistics</h2>
                              <p className='text-dark my-2'>Reliable express logistics for Quick Service Restaurants/Retail chains that demand a dedicated on-time delivery fleet to boost customer experience.</p>
                              <div className='my-3'>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery partner allocation</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Order delivery validation</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> State-of-the-art tracking</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image1} alt='Image1' />
                                      <p className='fw-600 fs-12'>Restaurants</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image2} alt='Image2' />
                                      <p className='fw-600 fs-12'>Restaurants chains</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image3} alt='Image3' />
                                      <p className='fw-600 fs-12'>Food chains</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div className='card bg-white p-2 h-100'>
                              <p className='text-dark text-uppercase fw-700 fs-5 my-2'>
                                Benefits
                              </p>
                              <div className='my-3'>
                                <p className='fw-700'>100%</p>
                                <p className='fs-15'>API-driven auto-allocation</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>97% +</p>
                                <p className='fs-15'>Delivery time estimation accuracy</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Customized</p>
                                <p className='fs-15'>Logistics flow</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-ozOvePlus" role="tabpanel" aria-labelledby="pills-ozOvePlus-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Oz Ove - Plus</h2>
                              <p className='text-dark my-2'>We have a specified logistics fleet for high value category products such as meat, alcohol & luxurry goods that require highly skilled delivery partners.</p>
                              <div className='my-3'>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery partner skills mapped</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Order pick-up validation</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Reverse logistics (KYC failures)</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image1} alt='Image1' />
                                      <p className='fw-600 fs-12'>Meat</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image2} alt='Image2' />
                                      <p className='fw-600 fs-12'>Luxury</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image3} alt='Image3' />
                                      <p className='fw-600 fs-12'>Alcoholic beverages</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div className='card bg-white p-2 h-100'>
                              <p className='text-dark text-uppercase fw-700 fs-5 my-2'>
                                Benefits
                              </p>
                              <div className='my-3'>
                                <p className='fw-700'>Special</p>
                                <p className='fs-15'>Handling</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Slot deliveries</p>
                                <p className='fs-15'>With QC at pick-up</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Reverse Logistics</p>
                                <p className='fs-15'>In case of KYC failure</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-ozOveNext" role="tabpanel" aria-labelledby="pills-ozOveNext-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Oz Ove - Next</h2>
                              <p className='text-dark my-2'>Crossed-utilised, dedicated & skilled logistics fleet for handling high-priority & critical documents, handled with utmost safety, at budget-friendly rates.</p>
                              <div className='my-3'>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Multi-vertical partner utilisation</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery partner skill mapping</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery partner skill mapping</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image1} alt='Image1' />
                                      <p className='fw-600 fs-12'>E-commerce</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image2} alt='Image2' />
                                      <p className='fw-600 fs-12'>BFSI</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image3} alt='Image3' />
                                      <p className='fw-600 fs-12'>Banking</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div className='card bg-white p-2 h-100'>
                              <p className='text-dark text-uppercase fw-700 fs-5 my-2'>
                                Benefits
                              </p>
                              <div className='my-3'>
                                <p className='fw-700'>Trained</p>
                                <p className='fs-15'>Delivery Partners</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>SAfe & Secure</p>
                                <p className='fs-15'>Deliveries</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Easy</p>
                                <p className='fs-15'>API integration</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-nowSlot" role="tabpanel" aria-labelledby="pills-nowSlot-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Now Slot - Store Pick up model</h2>
                              <p className='text-dark my-2'>Our store pick-up model works with dark and live stores, handling slotted and express deliveries, doorstep returns, and fluctuations in consumer demands. Optimized for outsourced manpower models, like pharma & postman services, prioritizing speed & accuracy.</p>
                              <div className='my-3'>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Desired slot-time delivery</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Real-time reconciliation & customer refund</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Resource deployment for maximum efficacy</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image1} alt='Image1' />
                                      <p className='fw-600 fs-12'>Grocery</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Image2} alt='Image2' />
                                      <p className='fw-600 fs-12'>FMCG</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={NewImage3} alt='Image3' />
                                      <p className='fw-600 fs-12'>Pharma</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div className='card bg-white p-2 h-100'>
                              <p className='text-dark text-uppercase fw-700 fs-5 my-2'>
                                Benefits
                              </p>
                              <div className='my-3'>
                                <p className='fw-700'>Desired Slot</p>
                                <p className='fs-15'>Delivery</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Partial returns</p>
                                <p className='fs-15'>Partial Orders and Partial SKUs</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Real-time</p>
                                <p className='fs-15'>Reconciliation & refunds</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-lastmile" role="tabpanel" aria-labelledby="pills-lastmile-tab">
                <div className="row d-flex">
                  <ul className="nav nav-pills col-md-4 d-flex flex-column align-items-start  " id="pills-tab" role="tablist">
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 active fs-5 p-3"
                        id="pills-standardDelivery-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-standardDelivery"
                        type="button"
                        role="tab"
                        aria-controls="pills-standardDelivery"
                        aria-selected="true"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Standard Delivery</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-sameDayDelivery-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-sameDayDelivery"
                        type="button"
                        role="tab"
                        aria-controls="pills-sameDayDelivery"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Same Day Delivery</div>
                      </button>
                    </li>
                    <li className="nav-item my-2" role="presentation">
                      <button
                        className="nav-link w-100 fs-5 p-3"
                        id="pills-nextDAyDelivery-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-nextDAyDelivery"
                        type="button"
                        role="tab"
                        aria-controls="pills-nextDAyDelivery"
                        aria-selected="false"
                        style={{
                          opacity: 0.75,
                          textAlign: "center",
                          color: "#333333",
                          fontWeight: "600",
                        }}
                      >
                        <div>Next-Day Delivery</div>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content col-md-8" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-standardDelivery" role="tabpanel" aria-labelledby="pills-standardDelivery-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Standard Delivery</h2>
                              <p className='text-dark my-2'>Have your order conveniently delivered to your doorstep within just 4 hours.</p>
                              <div className='my-3'>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Quick delivery within 4 hours.</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Convenient doorstep service</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Instant gratification without waiting</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab2} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab101} alt='Image1' />
                                      <p className='fw-600 fs-12'>Consumers</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab102} alt='Image2' />
                                      <p className='fw-600 fs-12'>Retailers</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab103} alt='Image3' />
                                      <p className='fw-600 fs-12'>Logistics providers</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div className='card bg-white p-2 h-100'>
                              <p className='text-dark text-uppercase fw-700 fs-5 my-2'>
                                Benefits
                              </p>
                              <div className='my-3'>
                                <p className='fw-700'>Customised Logistics Flow</p>
                                <p className='fs-15'>Tailored, Efficient</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Flexibility</p>
                                <p className='fs-15'>Flexible Delivery Options.</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Reduced Stress</p>
                                <p className='fs-15'>Stress-Free Convenience</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-sameDayDelivery" role="tabpanel" aria-labelledby="pills-sameDayDelivery-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Same Day Delivery</h2>
                              <p className='text-dark my-2'>Experience the convenience of having your order delivered right to your doorstep during office hours.</p>
                              <div className='my-3'>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery within office hours</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Immediate access to your order.</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Flexible timing for convenience.</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab2} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab101} alt='Image1' />
                                      <p className='fw-600 fs-12'>Working professionals</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab102} alt='Image2' />
                                      <p className='fw-600 fs-12'>Local Merchants</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab103} alt='Image3' />
                                      <p className='fw-600 fs-12'>Courier Services</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div className='card bg-white p-2 h-100'>
                              <p className='text-dark text-uppercase fw-700 fs-5 my-2'>
                                Benefits
                              </p>
                              <div className='my-3'>
                                <p className='fw-700'>Speed and Convenience</p>
                                <p className='fs-15'>Quick Delivery</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Time-Sensitive</p>
                                <p className='fs-15'>Quick</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Competitive Advantages</p>
                                <p className='fs-15'>Customer Loyalty</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-nextDAyDelivery" role="tabpanel" aria-labelledby="pills-nextDAyDelivery-tab">
                      <div className="usage-bg p-2">
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div>
                              <h2 className='text-dark fw-600 text-capitalize my-2'>Next-Day Delivery</h2>
                              <p className='text-dark my-2'>Enjoy the prompt delivery of your order, arriving at your doorstep within 1-2 business days.</p>
                              <div className='my-3'>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Fast and reliable services</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Easy planning with 1-2 business day delivery.</p>
                                <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Efficient and timely arrival</p>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div>
                              <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab2} alt='Tab1' />
                            </div>
                          </div>
                        </div>
                        <div className='row w-100 mx-0 my-3'>
                          <div className='col-lg-7'>
                            <div className='card bg-white p-2 h-100'>
                              <div className='d-flex justify-content-between'>
                                <div>
                                  <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                                </div>
                                <div>
                                  <Image loader={myLoader} src={Left} alt='Left' />
                                  <Image loader={myLoader} src={Right} alt='Right' />
                                </div>
                              </div>
                              <div className='my-4'>
                                <div className='overflow-x-auto'>
                                  <ul className='d-flex'>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab101} alt='Image1' />
                                      <p className='fw-600 fs-12'>B2B Companies</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab102} alt='Image2' />
                                      <p className='fw-600 fs-12'>Procurement departments</p>
                                    </li>
                                    <li className='mx-2'>
                                      <Image loader={myLoader} className='w-100 object-fit-contain' src={Tab103} alt='Image3' />
                                      <p className='fw-600 fs-12'>Distribution Centers</p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-5'>
                            <div className='card bg-white p-2 h-100'>
                              <p className='text-dark text-uppercase fw-700 fs-5 my-2'>
                                Benefits
                              </p>
                              <div className='my-3'>
                                <p className='fw-700'>Prompt Delivery</p>
                                <p className='fs-15'>Fast Delivery</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Reliability</p>
                                <p className='fs-15'>Efficient</p>
                              </div>
                              <div className='my-3'>
                                <p className='fw-700'>Enhanced Cutomer Experience</p>
                                <p className='fs-15'>Loyalty Boost</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-ecommerce" role="tabpanel" aria-labelledby="pills-ecommerce-tab">
                <div className="usage-bg p-2">
                  <div className='row w-100 mx-0 my-3'>
                    <div className='col-lg-7'>
                      <div>
                        <h2 className='text-dark fw-600 text-capitalize my-2'>E-Com Forward</h2>
                        <p className='text-dark my-2'>On-time, end-to-end forward logistics with a high delivery percentage that caters to rapidly increasing e-commerce demands, at lower costs.</p>
                        <div className='my-3'>
                          <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Marketplace & warehouse pick-ups</p>
                          <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> End-toend shippment tracking</p>
                          <p className='text-black fw-600'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> COD doorstep payments</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-5'>
                      <div>
                        <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                      </div>
                    </div>
                  </div>
                  <div className='row w-100 mx-0 my-3'>
                    <div className='col-lg-7'>
                      <div className='card bg-white p-2 h-100'>
                        <div className='d-flex justify-content-between'>
                          <div>
                            <p className='text-dark text-uppercase fw-700 fs-5'>Who is it for?</p>
                          </div>
                          <div>
                            <Image loader={myLoader} src={Left} alt='Left' />
                            <Image loader={myLoader} src={Right} alt='Right' />
                          </div>
                        </div>
                        <div className='my-4'>
                          <div className='overflow-x-auto'>
                            <ul className='d-flex'>
                              <li className='mx-2'>
                                <Image loader={myLoader} className='w-100 object-fit-contain' src={Image1} alt='Image1' />
                                <p className='fw-600 fs-12'>Online sellers</p>
                              </li>
                              <li className='mx-2'>
                                <Image loader={myLoader} className='w-100 object-fit-contain' src={Image2} alt='Image2' />
                                <p className='fw-600 fs-12'>Ecommerce</p>
                              </li>
                              <li className='mx-2'>
                                <Image loader={myLoader} className='w-100 object-fit-contain' src={Image3} alt='Image3' />
                                <p className='fw-600 fs-12'>Groceries</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-5'>
                      <div className='card bg-white p-2 h-100'>
                        <p className='text-dark text-uppercase fw-700 fs-5 my-2'>
                          Benefits
                        </p>
                        <div className='my-3'>
                          <p className='fw-700'>Live Imaging</p>
                          <p className='fs-15'>Quality check</p>
                        </div>
                        <div className='my-3'>
                          <p className='fw-700'>95%</p>
                          <p className='fs-15'>Adherence to timelines</p>
                        </div>
                        <div className='my-3'>
                          <p className='fw-700'>Zero</p>
                          <p className='fs-15'>Capex investment for set-up</p>
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
                <li className={`nav-item px-0 ${activeTab === 'pills-hyperlocal1' ? "" : "my-3"}`} role="presentation">
                  <button
                    className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${activeTab === 'pills-hyperlocal1' ? 'active' : ''}`}
                    id="pills-hyperlocal1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-hyperlocal1"
                    type="button"
                    role="tab"
                    aria-controls="pills-hyperlocal1"
                    aria-selected={activeTab === 'pills-hyperlocal1'}
                    onClick={() => handleTabClickToggle('pills-hyperlocal1')}
                  >
                    <Image loader={myLoader} className="w-50 object-fit-contain tab_icon" src={Hyperlocal} alt='HyperlocalImage' />
                  </button>
                </li>
                <div
                  className={`tab-pane fade px-0 ${activeTab === 'pills-hyperlocal1' ? 'show active' : ''}`}
                  id="pills-hyperlocal1"
                  role="tabpanel"
                  aria-labelledby="pills-hyperlocal1-tab"
                >
                  <div className="row d-flex px-0">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1 active"
                          id="pills-ozOveNow1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-ozOveNow1"
                          type="button"
                          role="tab"
                          aria-controls="pills-ozOveNow1"
                          aria-selected="true"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Oz Ove - Now</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-retailLogistics1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-retailLogistics1"
                          type="button"
                          role="tab"
                          aria-controls="pills-retailLogistics1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Retail Logistics</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-ozOvePlus1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-ozOvePlus1"
                          type="button"
                          role="tab"
                          aria-controls="pills-ozOvePlus1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Oz Ove - Plus</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-ozOveNext1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-ozOveNext1"
                          type="button"
                          role="tab"
                          aria-controls="pills-ozOveNext1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Oz Ove - Next</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 px-1"
                          id="pills-nowSlot1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-nowSlot1"
                          type="button"
                          role="tab"
                          aria-controls="pills-nowSlot1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Now Slot - Store Pick Up Model</div>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content col-md-8 px-0" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-ozOveNow1" role="tabpanel" aria-labelledby="pills-ozOveNow1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Oz Ove Now Services</h2>
                                <p className='text-dark my-2 fs-10'>Low-cost & convenient deliveries, done under 45 minutes, apt for food, pharma, & groceries orders</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Realtime serviceability check</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Cross-category utilisation</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Marketplace Fleet Access</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='my-3'>
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
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-12'>Food</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-12'>Grocery</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={NewImage3} alt='Image3' />
                                        <p className='fw-700 fs-12'>Pharma</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='my-3'>
                              <div className='card bg-white p-2 h-100 card_1'>
                                <p className='text-dark text-uppercase fw-700 fs-16 my-2'>
                                  Benefits
                                </p>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Industry</p>
                                  <p className='fs-12'>Best delivery speed</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Cost</p>
                                  <p className='fs-12'>Low per order cost</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Peak Management</p>
                                  <p className='fs-12'>Upto 100% flex in order volumes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-retailLogistics1" role="tabpanel" aria-labelledby="pills-retailLogistics1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Retail Logistics</h2>
                                <p className='text-dark my-2 fs-10'>Reliable express logistics for Quick Service Restaurants/Retail chains that demand a dedicated on-time delivery fleet to boost customer experience.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery partner allocation</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Order delivery validation</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> State-of-the-art tracking</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='my-3'>
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
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-12'>Restaurants</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-12'>Restaurants chains</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-12'>Food chains</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-5'>
                              <div className='card bg-white p-2 h-100'>
                                <p className='text-dark text-uppercase fw-700 fs-16 my-2'>
                                  Benefits
                                </p>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>100%</p>
                                  <p className='fs-12'>API-driven auto-allocation</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>97% +</p>
                                  <p className='fs-12'>Delivery time estimation accuracy</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Customized</p>
                                  <p className='fs-12'>Logistics flow</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-ozOvePlus1" role="tabpanel" aria-labelledby="pills-ozOvePlus1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Oz Ove - Plus</h2>
                                <p className='text-dark my-2 fs-10'>We have a specified logistics fleet for high value category products such as meat, alcohol & luxurry goods that require highly skilled delivery partners.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery partner skills mapped</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Order pick-up validation</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Reverse logistics (KYC failures)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0 my-3'>
                            <div className='my-3'>
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
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-12'>Meat</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-12'>Luxury</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-12'>Alcoholic beverages</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='my-3'>
                              <div className='card p-3 h-100 card_1'>
                                <p className='text-dark text-uppercase fw-700 fs-16 my-2'>
                                  Benefits
                                </p>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Special</p>
                                  <p className='fs-12'>Handling</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Slot deliveries</p>
                                  <p className='fs-12'>With QC at pick-up</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Reverse Logistics</p>
                                  <p className='fs-12'>In case of KYC failure</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-ozOveNext1" role="tabpanel" aria-labelledby="pills-ozOveNext1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Oz Ove - Next</h2>
                                <p className='text-dark my-2 fs-10'>Crossed-utilised, dedicated & skilled logistics fleet for handling high-priority & critical documents, handled with utmost safety, at budget-friendly rates.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Multi-vertical partner utilisation</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery partner skill mapping</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery partner skill mapping</p>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0 my-3'>
                            <div className='my-3'>
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
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-12'>E-commerce</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-12'>BFSI</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-12'>Banking</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='my-3'>
                              <div className='card p-3 h-100 card_1'>
                                <p className='text-dark text-uppercase fw-700 fs-16 my-2'>
                                  Benefits
                                </p>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Trained</p>
                                  <p className='fs-12'>Delivery Partners</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>SAfe & Secure</p>
                                  <p className='fs-12'>Deliveries</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Easy</p>
                                  <p className='fs-12'>API integration</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-nowSlot1" role="tabpanel" aria-labelledby="pills-nowSlot1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Now Slot - Store Pick up model</h2>
                                <p className='text-dark my-2 fs-10'>Our store pick-up model works with dark and live stores, handling slotted and express deliveries, doorstep returns, and fluctuations in consumer demands. Optimized for outsourced manpower models, like pharma & postman services, prioritizing speed & accuracy.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Desired slot-time delivery</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Real-time reconciliation & customer refund</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Resource deployment for maximum efficacy</p>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0 my-3'>
                            <div className='my-3'>
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
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-12'>Grocery</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-12'>FMCG</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={NewImage3} alt='Image3' />
                                        <p className='fw-700 fs-12'>Pharma</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='my-3'>
                              <div className='card p-3 h-100 card_1'>
                                <p className='text-dark text-uppercase fw-700 fs-16 my-2'>
                                  Benefits
                                </p>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Desired Slot</p>
                                  <p className='fs-12'>Delivery</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Partial returns</p>
                                  <p className='fs-12'>Partial Orders and Partial SKUs</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Real-time</p>
                                  <p className='fs-12'>Reconciliation & refunds</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <li className={`nav-item px-0 ${activeTab === 'pills-lastmile1' ? "" : "my-3"}`} role="presentation">
                  <button
                    className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${activeTab === 'pills-lastmile1' ? 'active' : ''}`}
                    id="pills-lastmile1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-lastmile1"
                    type="button"
                    role="tab"
                    aria-controls="pills-lastmile1"
                    aria-selected={activeTab === 'pills-lastmile1'}
                    onClick={() => handleTabClickToggle('pills-lastmile1')}
                  >
                    <Image loader={myLoader} className="w-50 object-fit-contain tab_icon" src={LastMile} alt='LastMileImage' />
                  </button>
                </li>
                <div
                  className={`tab-pane fade ${activeTab === 'pills-lastmile1' ? 'show active' : ''}`}
                  id="pills-lastmile1"
                  role="tabpanel"
                  aria-labelledby="pills-lastmile1-tab"
                >
                  <div className="row d-flex">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link w-100 fs-15 active"
                          id="pills-standardDelivery1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-standardDelivery1"
                          type="button"
                          role="tab"
                          aria-controls="pills-standardDelivery1"
                          aria-selected="true"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Standard Delivery</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link fs-15 w-100"
                          id="pills-sameDayDelivery1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-sameDayDelivery1"
                          type="button"
                          role="tab"
                          aria-controls="pills-sameDayDelivery1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Same Day Delivery</div>
                        </button>
                      </li>
                      <li className="nav-item my-2" role="presentation">
                        <button
                          className="nav-link fs-15 w-100"
                          id="pills-nextDayDelivery1-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-nextDayDelivery1"
                          type="button"
                          role="tab"
                          aria-controls="pills-nextDayDelivery1"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div style={{ backgroundColor: "#fff", padding: "9px 15px", borderRadius: "40px" }}>Next-Day Delivery</div>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content col-md-8" id="pills-tabContent">
                      <div className="tab-pane fade show active" id="pills-standardDelivery1" role="tabpanel" aria-labelledby="pills-standardDelivery1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Standard Delivery</h2>
                                <p className='text-dark my-2 fs-10'>Have your order conveniently delivered to your doorstep within just 4 hours.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Quick delivery within 4 hours.</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Convenient doorstep service</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Instant gratification without waiting</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='my-3'>
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
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-12'>Consumers</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-12'>Retailers</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-12'>Logistics providers</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='my-3'>
                              <div className='card p-3 h-100 card_1'>
                                <p className='text-dark text-uppercase fw-700 fs-16 my-2'>
                                  Benefits
                                </p>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Customised Logistics Flow</p>
                                  <p className='fs-12'>Tailored, Efficient</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Flexibility</p>
                                  <p className='fs-12'>Flexible Delivery Options.</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Reduced Stress</p>
                                  <p className='fs-12'>Stress-Free Convenience</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-sameDayDelivery1" role="tabpanel" aria-labelledby="pills-sameDayDelivery1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Same Day Delivery</h2>
                                <p className='text-dark my-2 fs-10'>Experience the convenience of having your order delivered right to your doorstep during office hours.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Delivery within office hours</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Immediate access to your order.</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Flexible timing for convenience.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0 my-3'>
                            <div className='my-3'>
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
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-12'>Working professionals</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-12'>Local Merchants</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-12'>Courier Services</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='my-3'>
                              <div className='card p-3 h-100 card_1'>
                                <p className='text-dark text-uppercase fw-700 fs-16 my-2'>
                                  Benefits
                                </p>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Speed and Conveni2nce</p>
                                  <p className='fs-15'>Quick Delivery</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Time-Sensitive</p>
                                  <p className='fs-12'>Quick</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Competitive Advant2ges</p>
                                  <p className='fs-15'>Customer Loyalty</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="pills-nextDayDelivery1" role="tabpanel" aria-labelledby="pills-nextDayDelivery1-tab">
                        <div className="usage-bg px-0">
                          <div className='row w-100 mx-0 my-3'>
                            <div className='col-lg-5'>
                              <div className='d-flex justify-content-center'>
                                <Image loader={myLoader} className='w-50 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                              </div>
                            </div>
                            <div className='col-lg-7'>
                              <div>
                                <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>Next-Day Delivery</h2>
                                <p className='text-dark my-2 fs-10'>Enjoy the prompt delivery of your order, arriving at your doorstep within 1-2 business days.</p>
                                <div className='my-3'>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Fast and reliable services</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Easy planning with 1-2 business day delivery.</p>
                                  <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Efficient and timely arrival</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='row w-100 mx-0'>
                            <div className='my-3'>
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
                                  <div className='overflow-x-auto'>
                                    <ul className='d-flex'>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                        <p className='fw-700 fs-12'>B2B Companies</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                        <p className='fw-700 fs-12'>Procurement departments</p>
                                      </li>
                                      <li className='mx-2'>
                                        <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                        <p className='fw-700 fs-12'>Distribution Centers</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='my-3'>
                              <div className='card p-3 h-100 card_1'>
                                <p className='text-dark text-uppercase fw-700 fs-16 my-2'>
                                  Benefits
                                </p>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Prompt Delivery</p>
                                  <p className='fs-12'>Fast Delivery</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Reliability</p>
                                  <p className='fs-12'>Efficient</p>
                                </div>
                                <div className='my-3'>
                                  <p className='fw-700 fs-14'>Enhanced Cutomer Experi2nce</p>
                                  <p className='fs-15'>Loyalty Boost</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <li className={`nav-item px-0 ${activeTab === 'pills-ecommerce1' ? "" : "my-3"}`} role="presentation">
                  <button
                    className={`nav-link w-100 px-1 d-flex justify-content-center flex-column align-items-center ${activeTab === 'pills-ecommerce1' ? 'active' : ''}`}
                    id="pills-ecommerce1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-ecommerce1"
                    type="button"
                    role="tab"
                    aria-controls="pills-ecommerce1"
                    aria-selected={activeTab === 'pills-ecommerce1'}
                    onClick={() => handleTabClickToggle('pills-ecommerce1')}
                  >
                    <Image loader={myLoader} className='object-fit-contain tab_icon' style={{ width: '70%' }} src={ECommerce} alt='ECommerceImage' />
                  </button>
                </li>
                <div
                  className={`tab-pane fade ${activeTab === 'pills-ecommerce1' ? 'show active' : ''}`}
                  id="pills-ecommerce1"
                  role="tabpanel"
                  aria-labelledby="pills-ecommerce1-tab"
                >
                  <div className="usage-bg px-0">
                    <div className='row w-100 mx-0 my-3'>
                      <div className='col-lg-5'>
                        <div>
                          <Image loader={myLoader} className='w-75 h-100 object-fit-contain' src={Tab1} alt='Tab1' />
                        </div>
                      </div>
                      <div className='col-lg-7'>
                        <div>
                          <h2 className='text-dark fw-600 text-capitalize my-2 fs-22'>E-Com Forward</h2>
                          <p className='text-dark my-2 fs-10'>On-time, end-to-end forward logistics with a high delivery percentage that caters to rapidly increasing e-commerce demands, at lower costs.</p>
                          <div className='my-3'>
                            <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> Marketplace & warehouse pick-ups</p>
                            <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> End-toend shippment tracking</p>
                            <p className='text-black fs-14 fw-600 d-flex align-items-center'><Image loader={myLoader} className="points h-auto" src={Points} alt='Points' /> COD doorstep payments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row w-100 mx-0'>
                      <div className='my-3'>
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
                            <div className='overflow-x-auto'>
                              <ul className='d-flex'>
                                <li className='mx-2'>
                                  <Image loader={myLoader} className='h-auto object-fit-contain' src={Image1} alt='Image1' />
                                  <p className='fw-700 fs-12'>Online sellers</p>
                                </li>
                                <li className='mx-2'>
                                  <Image loader={myLoader} className='h-auto object-fit-contain' src={Image2} alt='Image2' />
                                  <p className='fw-700 fs-12'>Ecommerce</p>
                                </li>
                                <li className='mx-2'>
                                  <Image loader={myLoader} className='h-auto object-fit-contain' src={Image3} alt='Image3' />
                                  <p className='fw-700 fs-12'>Groceries</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='my-3'>
                        <div className='card p-3 h-100 card_1'>
                          <p className='text-dark text-uppercase fw-700 fs-16 my-2'>
                            Benefits
                          </p>
                          <div className='my-3'>
                            <p className='fw-700 fs-14'>Live Imaging</p>
                            <p className='fs-12'>Quality check</p>
                          </div>
                          <div className='my-3'>
                            <p className='fw-700 fs-14'>95%</p>
                            <p className='fs-12'>Adherence to timelines</p>
                          </div>
                          <div className='my-3'>
                            <p className='fw-700 fs-14'>Zero</p>
                            <p className='fs-12'>Capex investment for set-up</p>
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
