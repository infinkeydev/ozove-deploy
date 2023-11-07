"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Box from "../../../public/Images/delivery/moving.png"
import Ute from "../../../public/Images/delivery/ute.png"
import Van from "../../../public/Images/delivery/van.png"
import Truck from "../../../public/Images/delivery/truck.png"
import Box1 from "../../../public/Images/delivery/moving1.png"
import Ute1 from "../../../public/Images/delivery/ute1.png"
import Van1 from "../../../public/Images/delivery/van1.png"
import Truck1 from "../../../public/Images/delivery/truck1.png"
import BoxUp from "../../../public/Images/delivery/moving_up.png"
import UteUp from "../../../public/Images/delivery/ute_up.png"
import VanUp from "../../../public/Images/delivery/van_up.png"
import TruckUp from "../../../public/Images/delivery/truck_up.png"

function AnyVehicleOptions() {
  const [activeTab, setActiveTab] = useState('pills-box');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="any_vehicle_section py-5">
        <div className="container">
          <div className="text-center">
            <p className="fs-2 text-dark fw-bolder text-capitalize">Any vehicle to match Your delivery needs</p>
          </div>
          <div className="card-body p-0 d-none d-lg-block">
            <ul className="nav nav-pills border-0 d-flex justify-content-evenly row" id="pills-tab" role="tablist">
              <li className="nav-item col-md-3 my-3" role="presentation">
                <button
                  className="nav-link w-100 px-1"
                  id="pills-box-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-box"
                  type="button"
                  role="tab"
                  aria-controls="pills-box"
                  aria-selected="true"
                >
                  <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img" src={Box} alt="Box" />
                  {/* <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img_up" src={BoxUp} alt="BoxUp" /> */}
                </button>
              </li>
              <li className="nav-item col-md-3 my-3 dropdown" role="presentation">
                <button
                  className="nav-link w-100 px-1"
                  id="pills-ute-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ute"
                  type="button"
                  role="tab"
                  aria-controls="pills-ute"
                  aria-selected="false"
                >
                  <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img" src={Ute} alt="Ute" />
                  {/* <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img_up" src={UteUp} alt="UteUp" /> */}
                </button>
              </li>
              <li className="nav-item col-md-3 my-3" role="presentation">
                <button
                  className="nav-link w-100 px-1"
                  id="pills-van-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-van"
                  type="button"
                  role="tab"
                  aria-controls="pills-van"
                  aria-selected="false"
                >
                  <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img" src={Van} alt="Van" />
                  {/* <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img_up" src={VanUp} alt="VanUp" /> */}
                </button>
              </li>
              <li className="nav-item col-md-3 my-3" role="presentation">
                <button
                  className="nav-link w-100 px-1"
                  id="pills-truck-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-truck"
                  type="button"
                  role="tab"
                  aria-controls="pills-truck"
                  aria-selected="false"
                >
                  <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img" src={Truck} alt="Truck" />
                  {/* <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img_up" src={TruckUp} alt="TruckUp" /> */}
                </button>
              </li>
            </ul>
            {/* <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show"
                id="pills-box"
                role="tabpanel"
                aria-labelledby="pills-box-tab"
              >
                <div className="card w-75 mx-auto mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <p className='fw-700'>Courier</p>
                        <Image loader={myLoader} className="w-100 h-100 object-fit-contain object-position-top" src={Box1} alt="Box1" />
                      </div>
                      <div className="col-md-9">
                        <div>
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Price:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Base fee $40 <span>(Please refer to Mobile App for exact price)</span></div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Weight Limit:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Up to 10 kg</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Size Limit (L x W x H):</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">40 x 40 x 40cm</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Suitable for:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Fast door-to-door delivery for small goods</div>
                          </div>
                          <hr />

                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Remarks</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">The fare of service is based on multiple factors such as traffic situation, order volume, availability of delivery partners, applicable tolls, surcharges and so on. Hence the total fare of the service may vary. The fare displayed at the time of request may not be the same if there is a change to order details.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade"
                id="pills-ute"
                role="tabpanel"
                aria-labelledby="pills-ute-tab"
              >
                <div className="card w-75 mx-auto mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <p className='fw-700'>UTE</p>
                        <Image loader={myLoader} className="w-100 h-100 object-fit-contain object-position-top" src={Ute1} alt="Ute1" />
                      </div>
                      <div className="col-md-9">
                        <div>
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Price:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Base fee $40 <span>(Please refer to Mobile App for exact price)</span></div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Weight Limit:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Up to 10 kg</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Size Limit (L x W x H):</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">450 x 180 x 80 cm</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Suitable for:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Fast door-to-door delivery for small goods</div>
                          </div>
                          <hr />

                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Remarks</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">The fare of service is based on multiple factors such as traffic situation, order volume, availability of delivery partners, applicable tolls, surcharges and so on. Hence the total fare of the service may vary. The fare displayed at the time of request may not be the same if there is a change to order details.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade"
                id="pills-van"
                role="tabpanel"
                aria-labelledby="pills-van-tab"
              >
                <div className="card w-75 mx-auto mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <p className='fw-700'>VAN</p>
                        <Image loader={myLoader} className="w-100 h-100 object-fit-contain object-position-top" src={Van1} alt="Van1" />
                      </div>
                      <div className="col-md-9">
                        <div>
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Price:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Base fee $50 <span>(Please refer to Mobile App for exact price)</span></div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Weight Limit:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Up to 800 kg</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Size Limit (L x W x H):</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">180 x 120 x 120 cm</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Suitable for:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Multi-item delivery, large and bulky goods and furniture</div>
                          </div>
                          <hr />

                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Remarks</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">The fare of service is based on multiple factors such as traffic situation, order volume, availability of delivery partners, applicable tolls, surcharges and so on. Hence the total fare of the service may vary. The fare displayed at the time of request may not be the same if there is a change to order details.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade"
                id="pills-truck"
                role="tabpanel"
                aria-labelledby="pills-truck-tab"
              >
                <div className="card w-75 mx-auto mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <p className='fw-700'>TRUCK</p>
                        <Image loader={myLoader} className="w-100 h-100 object-fit-contain object-position-top" src={Truck1} alt="Truck1" />
                      </div>
                      <div className="col-md-9">
                        <div>
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Price:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Base fee $239 <span>(Please refer to Mobile App for exact price)</span></div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Weight Limit:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Up to 3500 kg</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Size Limit (L x W x H):</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">600 x 180 x 80 cm</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Suitable for:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Home moving, Office moving. Business logistics</div>
                          </div>
                          <hr />

                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Remarks</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">The fare of service is based on multiple factors such as traffic situation, order volume, availability of delivery partners, applicable tolls, surcharges and so on. Hence the total fare of the service may vary. The fare displayed at the time of request may not be the same if there is a change to order details.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="card-body p-0 d-block d-lg-none mob">
            <ul className="nav nav-pills border-0 d-flex justify-content-evenly row" id="pills-tab" role="tablist">
              <li className="nav-item col-lg-3 col-md-6 col-6 my-3" role="presentation">
                <button
                  className={`nav-link w-100 px-1 ${activeTab === 'pills-box' ? 'active' : ''}`}
                  id="pills-box-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-box"
                  type="button"
                  role="tab"
                  aria-controls="pills-box"
                  aria-selected={activeTab === 'pills-box'}
                  onClick={() => handleTabClick('pills-box')}
                >
                  <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img" src={Box} alt="Box" />
                  {/* <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img_up" src={BoxUp} alt="BoxUp" /> */}
                </button>
              </li>
              <li className="nav-item col-lg-3 col-md-6 col-6 my-3 dropdown" role="presentation">
                <button
                  // aria-selected="false"
                  className={`nav-link w-100 px-1 ${activeTab === 'pills-ute' ? 'active' : ''}`}
                  id="pills-ute-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ute"
                  type="button"
                  role="tab"
                  aria-controls="pills-ute"
                  aria-selected={activeTab === 'pills-ute'}
                  onClick={() => handleTabClick('pills-ute')}
                >
                  <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img" src={Ute} alt="Ute" />
                  {/* <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img_up" src={UteUp} alt="UteUp" /> */}
                </button>
              </li>
              {/* <div className={`tab-pane fade ${activeTab === 'pills-box' ? 'show active' : ''}`}
                id="pills-box"
                role="tabpanel"
                aria-labelledby="pills-box-tab"
              >
                <div className="card w-100 mx-auto mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <p className='fw-700'>Courier</p>
                        <Image loader={myLoader} className="w-100 h-100 object-fit-contain object-position-top" src={Box1} alt="Box1" />
                      </div>
                      <div className="col-md-9">
                        <div>
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Price:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Base fee $40 <span>(Please refer to Mobile App for exact price)</span></div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Weight Limit:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Up to 10 kg</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Size Limit (L x W x H):</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">40 x 40 x 40cm</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Suitable for:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Fast door-to-door delivery for small goods</div>
                          </div>
                          <hr />

                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Remarks</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">The fare of service is based on multiple factors such as traffic situation, order volume, availability of delivery partners, applicable tolls, surcharges and so on. Hence the total fare of the service may vary. The fare displayed at the time of request may not be the same if there is a change to order details.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab-pane fade ${activeTab === 'pills-ute' ? 'show active' : ''}`}
                id="pills-ute"
                role="tabpanel"
                aria-labelledby="pills-ute-tab"
              >
                <div className="card w-100 mx-auto mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <p className='fw-700'>UTE</p>
                        <Image loader={myLoader} className="w-100 h-100 object-fit-contain object-position-top" src={Ute1} alt="Ute1" />
                      </div>
                      <div className="col-md-9">
                        <div>
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Price:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Base fee $40 <span>(Please refer to Mobile App for exact price)</span></div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Weight Limit:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Up to 10 kg</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Size Limit (L x W x H):</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">450 x 180 x 80 cm</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Suitable for:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Fast door-to-door delivery for small goods</div>
                          </div>
                          <hr />

                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Remarks</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">The fare of service is based on multiple factors such as traffic situation, order volume, availability of delivery partners, applicable tolls, surcharges and so on. Hence the total fare of the service may vary. The fare displayed at the time of request may not be the same if there is a change to order details.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <li className="nav-item col-lg-3 col-md-6 col-6 my-3" role="presentation">
                <button
                  className={`nav-link w-100 px-1 ${activeTab === 'pills-van' ? 'active' : ''}`}
                  id="pills-van-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-van"
                  type="button"
                  role="tab"
                  aria-controls="pills-van"
                  // aria-selected="false"
                  aria-selected={activeTab === 'pills-van'}
                  onClick={() => handleTabClick('pills-van')}
                >
                  <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img" src={Van} alt="Van" />
                  {/* <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img_up" src={VanUp} alt="VanUp" /> */}
                </button>
              </li>
              <li className="nav-item col-lg-3 col-md-6 col-6 my-3" role="presentation">
                <button
                  className={`nav-link w-100 px-1 ${activeTab === 'pills-truck' ? 'active' : ''}`}
                  id="pills-truck-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-truck"
                  type="button"
                  role="tab"
                  aria-controls="pills-truck"
                  // aria-selected="false"
                  aria-selected={activeTab === 'pills-truck'}
                  onClick={() => handleTabClick('pills-truck')}
                >
                  <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img" src={Truck} alt="Truck" />
                  {/* <Image loader={myLoader} className="w-100 h-100 object-fit-contain tab_img_up" src={TruckUp} alt="TruckUp" /> */}
                </button>
              </li>
              {/* <div className={`tab-pane fade ${activeTab === 'pills-van' ? 'show active' : ''}`}
                id="pills-van"
                role="tabpanel"
                aria-labelledby="pills-van-tab"
              >
                <div className="card w-100 mx-auto mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <p className='fw-700'>VAN</p>
                        <Image loader={myLoader} className="w-100 h-100 object-fit-contain object-position-top" src={Van1} alt="Van1" />
                      </div>
                      <div className="col-md-9">
                        <div>
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Price:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Base fee $50 <span>(Please refer to Mobile App for exact price)</span></div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Weight Limit:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Up to 800 kg</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Size Limit (L x W x H):</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">180 x 120 x 120 cm</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Suitable for:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Multi-item delivery, large and bulky goods and furniture</div>
                          </div>
                          <hr />

                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Remarks</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">The fare of service is based on multiple factors such as traffic situation, order volume, availability of delivery partners, applicable tolls, surcharges and so on. Hence the total fare of the service may vary. The fare displayed at the time of request may not be the same if there is a change to order details.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tab-pane fade ${activeTab === 'pills-truck' ? 'show active' : ''}`}
                id="pills-truck"
                role="tabpanel"
                aria-labelledby="pills-truck-tab"
              >
                <div className="card w-100 mx-auto mt-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <p className='fw-700'>TRUCK</p>
                        <Image loader={myLoader} className="w-100 h-100 object-fit-contain object-position-top" src={Truck1} alt="Truck1" />
                      </div>
                      <div className="col-md-9">
                        <div>
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Price:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Base fee $239 <span>(Please refer to Mobile App for exact price)</span></div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Weight Limit:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Up to 3500 kg</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Size Limit (L x W x H):</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">600 x 180 x 80 cm</div>
                          </div>
                          <hr />
                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Suitable for:</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">Home moving, Office moving. Business logistics</div>
                          </div>
                          <hr />

                          <div className='row'>
                            <div className="col-md-4 text-black fw-600 tab_desc ps-0">Remarks</div>
                            <div className="col-md-8 text-black fw-500 tab_desc">The fare of service is based on multiple factors such as traffic situation, order volume, availability of delivery partners, applicable tolls, surcharges and so on. Hence the total fare of the service may vary. The fare displayed at the time of request may not be the same if there is a change to order details.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnyVehicleOptions;
