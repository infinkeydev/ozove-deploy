"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Search from "../../public/svg/search.svg";
import Location from "../../public/svg/location.svg";
import Add from "../../public/svg/add.svg";
import Bot from "../../public/Images/png/bot.svg";
import Duration1 from "../../public/svg/greyDuration.svg";
import LocationRadio from "../../public/svg/locationRadio.svg";
import RideSmall from "../../public/Images/png/rideSmall.png";
import DeliverySmall from "../../public/Images/png/deliverySmall.png";
import mapboxgl from "mapbox-gl";
import Map from "./map";
import { Input, InputAdornment } from "@mui/material";
import { SlLocationPin } from "react-icons/sl";
import { AiFillCloseCircle } from "react-icons/ai";
import Fade from "@mui/material/Fade";
import { FaPlus } from "react-icons/fa";
import Popper from "@mui/material/Popper";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGFydW4yNTA2IiwiYSI6ImNsaDdwbzlvZTAwdWkzcW8xM3Bib3k4bzIifQ.KY0XQwjRpgkn7KYvdaXDbQ";

function SectionOne() {
  const [pointsSelected, setPointsSelected] = useState({
    start: { longitude: 0, latitude: 0 },
    stop: { longitude: 0, latitude: 0 },
    end: { longitude: 0, latitude: 0 },
  });
  const [isStandard, setIsStandard] = useState(true);
  const [addStop, setAddStop] = useState(false);
  const [startPointData, setStartPointData] = useState([]);
  const [endPointData, setEndPointData] = useState([]);
  const [stopPointData, setStopPointData] = useState([]);
  const [isDelivery, setIsDelivery] = useState(false);
  const [startPointClick, setStartPointClick] = useState(false);
  const [startPointanchorEl, setStartPointAnchorEl] = useState(false);
  const [endPointClick, setEndPointClick] = useState(false);
  const [endPointanchorEl, setEndPointAnchorEl] = useState(false);
  const [stopPointClick, setStopPointClick] = useState(false);
  const [stopPointanchorEl, setStopPointAnchorEl] = useState(false);
  const startPointRef = useRef(null);
  const startPointid =
    startPointClick && startPointanchorEl ? "transition-popper" : undefined;
  const endPointRef = useRef(null);
  const endPointid =
    endPointClick && endPointanchorEl ? "transition-popper" : undefined;
  const stopPointRef = useRef(null);
  const stopPointid =
    stopPointClick && stopPointanchorEl ? "transition-popper" : undefined;

  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 1500) {
        setIsLaptop(!isLaptop);
      }
    }
  }, []);

  const getStartPointData = async (point) => {
    const query = await fetch(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        point +
        ".json?country=au&access_token=" +
        mapboxgl.accessToken,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.features;
    setStartPointData(data);
  };

  const getEndPointData = async (point) => {
    const query = await fetch(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        point +
        ".json?country=au&access_token=" +
        mapboxgl.accessToken,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.features;
    setEndPointData(data);
  };

  const getStopPointData = async (point) => {
    const query = await fetch(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        point +
        ".json?country=au&access_token=" +
        mapboxgl.accessToken,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.features;
    setStopPointData(data);
  };

  const handleStartClick = (event) => {
    var pointText = event.target.id;
    var address = pointText.split(", Coords - ");
    var coordsComplete = address[1];
    if (
      coordsComplete === undefined ||
      coordsComplete === null ||
      coordsComplete === ""
    ) {
      return;
    } else {
      var coordsDivided = coordsComplete.split(",");
      var obj = pointsSelected;
      obj.start.longitude = coordsDivided[0];
      obj.start.latitude = coordsDivided[1];
      setPointsSelected(obj);
      const input = document.getElementById("start");
      input.value = address[0];
      setStartPointClick(false);
    }
  };

  const handleEndClick = (event) => {
    var pointText = event.target.id;
    var address = pointText.split(", Coords - ");
    var coordsComplete = address[1];
    if (
      coordsComplete === undefined ||
      coordsComplete === null ||
      coordsComplete === ""
    ) {
      return;
    } else {
      var coordsDivided = coordsComplete.split(",");
      var obj = pointsSelected;
      obj.end.longitude = coordsDivided[0];
      obj.end.latitude = coordsDivided[1];
      setPointsSelected(obj);
      const input = document.getElementById("end");
      input.value = address[0];
      setEndPointClick(false);
    }
  };

  const handleStopClick = (event) => {
    var pointText = event.target.id;
    var address = pointText.split(", Coords - ");
    var coordsComplete = address[1];
    if (
      coordsComplete === undefined ||
      coordsComplete === null ||
      coordsComplete === ""
    ) {
      return;
    } else {
      var coordsDivided = coordsComplete.split(",");
      var obj = pointsSelected;
      obj.stop.longitude = coordsDivided[0];
      obj.stop.latitude = coordsDivided[1];
      setPointsSelected(obj);
      const input = document.getElementById("stop");
      input.value = address[0];
      setStopPointClick(false);
    }
  };

  const handleRideClick = () => {
    setIsDelivery(false);
  };

  const handleDeliveryClick = () => {
    setIsDelivery(true);
  };

  const handleStartPointPopperClick = (event) => {
    getStartPointData(event.target.value);
    setStartPointAnchorEl(event.currentTarget);
    startPointClick === false
      ? setStartPointClick(true)
      : setStartPointClick(false);
  };

  const handleStartPointClickOutside = (event) => {
    if (
      startPointRef.current &&
      !startPointRef.current.contains(event.target)
    ) {
      setStartPointClick(false);
    }
  };

  const handleEndPointPopperClick = (event) => {
    getEndPointData(event.target.value);
    setEndPointAnchorEl(event.currentTarget);
    endPointClick === false ? setEndPointClick(true) : setEndPointClick(false);
  };

  const handleEndPointClickOutside = (event) => {
    if (endPointRef.current && !endPointRef.current.contains(event.target)) {
      setEndPointClick(false);
    }
  };

  const handleStopPointPopperClick = (event) => {
    getStopPointData(event.target.value);
    setStopPointAnchorEl(event.currentTarget);
    stopPointClick === false
      ? setStopPointClick(true)
      : setStopPointClick(false);
  };

  const handleStopPointClickOutside = (event) => {
    if (stopPointRef.current && !stopPointRef.current.contains(event.target)) {
      setStopPointClick(false);
    }
  };

  const handleStandardClick = () => {
    setIsStandard(true);
  };

  const handleBusinessClick = () => {
    setIsStandard(false);
  };

  const handleAddStopOpen = () => {
    setAddStop(true);
  };

  const handleAddStopClose = () => {
    var obj = pointsSelected;
    obj.stop.longitude = 0;
    obj.stop.latitude = 0;
    setPointsSelected(obj);
    setAddStop(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleEndPointClickOutside, true);
    return () => {
      document.removeEventListener("click", handleEndPointClickOutside, true);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleStartPointClickOutside, true);
    return () => {
      document.removeEventListener("click", handleStartPointClickOutside, true);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleStopPointClickOutside, true);
    return () => {
      document.removeEventListener("click", handleStopPointClickOutside, true);
    };
  }, []);
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="form-bg">
        <div className="relative h-100">
          <div className="h-100 map_section">
            <Map {...pointsSelected} />
          </div>
          <div className="container d-none d-lg-block">
            <div className="card">
              <div className="card-body p-0">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={`nav-link ride w-50 fw-bold ${
                        isLaptop ? "p-2 fs-18" : "fs-22 p-4"
                      } active`}
                      id="nav-ride-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-ride"
                      type="button"
                      role="tab"
                      aria-controls="nav-ride"
                      aria-selected="true"
                      style={{ textAlign: "center", color: "#333333" }}
                    >
                      Ride
                    </button>
                    <button
                      className={`nav-link delivery w-50 fw-bold ${
                        isLaptop ? "p-2 fs-18" : "fs-22 p-4"
                      }`}
                      id="nav-delivery-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-delivery"
                      type="button"
                      role="tab"
                      aria-controls="nav-delivery"
                      aria-selected="false"
                      style={{ textAlign: "center", color: "#333333" }}
                    >
                      Delivery
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active bg-transparent"
                    id="nav-ride"
                    role="tabpanel"
                    aria-labelledby="nav-ride-tab"
                  >
                    <ul
                      className="nav nav-pills bg-transparent"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li
                        className="nav-item w-50 bg-transparent"
                        role="presentation"
                      >
                        <button
                          className={`nav-link w-100 active bg-transparent ${
                            isLaptop ? "p-2 pb-1" : "p-4 pb-2"
                          }`}
                          id="pills-standard-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-standard"
                          type="button"
                          role="tab"
                          aria-controls="pills-standard"
                          aria-selected="true"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div>Standard</div>
                        </button>
                      </li>
                      <li
                        className="nav-item w-50 bg-transparent"
                        role="presentation"
                      >
                        <button
                          className={`nav-link w-100 bg-transparent ${
                            isLaptop ? "p-2 pb-1" : "p-4 pb-2"
                          }`}
                          id="pills-business-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-business"
                          type="button"
                          role="tab"
                          aria-controls="pills-business"
                          aria-selected="false"
                          style={{
                            opacity: 0.75,
                            textAlign: "center",
                            color: "#333333",
                            fontWeight: "600",
                          }}
                        >
                          <div>Business</div>
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content bg-transparent"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active bg-transparent"
                        id="pills-standard"
                        role="tabpanel"
                        aria-labelledby="pills-standard-tab"
                      >
                        <div
                          className={`${
                            isLaptop ? "p-2" : "p-3"
                          } bg-transparent`}
                        >
                          <div className="location_section">
                            {/* <div
                              className={`d-flex flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } from`}
                              style={{
                                color: "#333333",
                                fontSize: 15,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              <Location className="me-1" />
                              <input
                                className="w-100 border-0"
                                placeholder="From?"
                              />
                            </div> */}
                            <div
                              className={`d-flex text-center flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } from`}
                              style={{
                                color: "#333333",
                                fontSize: 15,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              <Input
                                id="start"
                                type="text"
                                className="py-1 px-2 text-black w-11/12 rounded-3xl bg-white shadow-2xl w-100"
                                onChange={handleStartPointPopperClick}
                                disableUnderline={true}
                                placeholder="Where From?"
                                startAdornment={
                                  <InputAdornment position="start">
                                    <SlLocationPin color="#FAAD1D" size={20} />
                                  </InputAdornment>
                                }
                              />
                              <Popper
                                ref={startPointRef}
                                className="z-30 popper-transform"
                                id={startPointid}
                                open={startPointClick}
                                anchorEl={startPointanchorEl}
                                transition
                              >
                                {({ TransitionProps }) => (
                                  <Fade {...TransitionProps} timeout={10}>
                                    <div className="bg-white mt-2 flex-col w-80 mr-8 popper">
                                      {startPointData.map((item, index) => {
                                        return (
                                          <>
                                            <div
                                              id={index}
                                              className="cursor-pointer py-3 px-3 border-b-1 border-b-custom-gray-200 w-full flex hover:bg-slate-200 hover:shadow-xl"
                                              onClick={handleStartClick}
                                            >
                                              {item.place_name.length > 40 ? (
                                                <p
                                                  id={"".concat(
                                                    item.place_name,
                                                    ", Coords - ",
                                                    item.geometry
                                                      .coordinates[0],
                                                    " , ",
                                                    item.geometry.coordinates[1]
                                                  )}
                                                  className="text-black"
                                                >
                                                  {item.place_name.slice(0, 40)}
                                                  ...
                                                </p>
                                              ) : (
                                                <p
                                                  id={"".concat(
                                                    item.place_name,
                                                    ", Coords - ",
                                                    item.geometry
                                                      .coordinates[0],
                                                    " , ",
                                                    item.geometry.coordinates[1]
                                                  )}
                                                  className="text-black"
                                                >
                                                  {item.place_name}
                                                </p>
                                              )}
                                            </div>
                                          </>
                                        );
                                      })}
                                    </div>
                                  </Fade>
                                )}
                              </Popper>
                            </div>
                            {/* <div
                              className={`d-flex flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } to`}
                              style={{
                                color: "#333333",
                                fontSize: 15,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              <Location className="me-1" />
                              <input
                                className="w-100 border-0"
                                placeholder="Where to?"
                              />
                            </div> */}
                            <div
                              className={`d-flex text-center flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } to`}
                              style={{
                                color: "#333333",
                                fontSize: 15,
                                fontWeight: "500",
                                textTransform: "capitalize",
                              }}
                            >
                              <Input
                                id="end"
                                type="text"
                                className="py-1 px-2 text-black w-11/12 rounded-3xl bg-white shadow-2xl w-100"
                                onChange={handleEndPointPopperClick}
                                placeholder="Where To?"
                                disableUnderline={true}
                                startAdornment={
                                  <InputAdornment position="start">
                                    <SlLocationPin color="#FAAD1D" size={20} />
                                  </InputAdornment>
                                }
                              />
                              <Popper
                                ref={endPointRef}
                                className="z-30 popper-transform2"
                                id={endPointid}
                                open={endPointClick}
                                anchorEl={endPointanchorEl}
                                transition
                              >
                                {({ TransitionProps }) => (
                                  <Fade {...TransitionProps} timeout={10}>
                                    <div className="bg-white mt-2 flex-col w-80 mr-8 px-2 popper">
                                      {endPointData.map((item, index) => {
                                        return (
                                          <>
                                            <div
                                              id={index}
                                              className="cursor-pointer py-3 px-3 border-b-1 border-b-custom-gray-200 w-full flex hover:bg-slate-200 hover:shadow-xl"
                                              onClick={handleEndClick}
                                            >
                                              {item.place_name.length > 40 ? (
                                                <p
                                                  id={"".concat(
                                                    item.place_name,
                                                    ", Coords - ",
                                                    item.geometry
                                                      .coordinates[0],
                                                    " , ",
                                                    item.geometry.coordinates[1]
                                                  )}
                                                  className="text-black"
                                                >
                                                  {item.place_name.slice(0, 40)}
                                                  ...
                                                </p>
                                              ) : (
                                                <p
                                                  id={"".concat(
                                                    item.place_name,
                                                    ", Coords - ",
                                                    item.geometry
                                                      .coordinates[0],
                                                    " , ",
                                                    item.geometry.coordinates[1]
                                                  )}
                                                  className="text-black"
                                                >
                                                  {item.place_name}
                                                </p>
                                              )}
                                            </div>
                                          </>
                                        );
                                      })}
                                    </div>
                                  </Fade>
                                )}
                              </Popper>
                            </div>
                            {/* <div
                              className={`d-flex flex-row align-items-center card ${
                                isLaptop ? "p-1 my-1" : "p-2 my-2"
                              } add_stop`}
                              style={{
                                color: "rgba(80, 80, 80, 0.75)",
                                fontSize: 15,
                                fontWeight: "400",
                                textTransform: "capitalize",
                              }}
                            >
                              <Add className="me-1" />
                              Add Stop
                            </div> */}

                            {addStop ? (
                              <div
                                className={`d-flex text-center flex-row align-items-center card ${
                                  isLaptop ? "p-1 my-1" : "p-2 my-2"
                                } to`}
                                style={{
                                  color: "#333333",
                                  fontSize: 15,
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                }}
                              >
                                <Input
                                  id="stop"
                                  type="text"
                                  className="py-1 px-2 text-black w-11/12 rounded-3xl bg-white shadow-2xl w-100"
                                  onChange={handleStopPointPopperClick}
                                  placeholder="Add Stop"
                                  disableUnderline={true}
                                  startAdornment={
                                    <InputAdornment position="start">
                                      <SlLocationPin
                                        color="#FAAD1D"
                                        size={20}
                                      />
                                    </InputAdornment>
                                  }
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <AiFillCloseCircle
                                        color="black"
                                        size={20}
                                        className="cursor-pointer"
                                        onClick={handleAddStopClose}
                                      />
                                    </InputAdornment>
                                  }
                                />
                                <Popper
                                  ref={stopPointRef}
                                  className="z-30 popper-transform3"
                                  id={stopPointid}
                                  open={stopPointClick}
                                  anchorEl={stopPointanchorEl}
                                  transition
                                >
                                  {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={10}>
                                      <div className="bg-white mt-2 flex-col w-80 mr-8 px-2 popper">
                                        {stopPointData.map((item, index) => {
                                          return (
                                            <>
                                              <div
                                                id={index}
                                                className="cursor-pointer py-3 px-3 border-b-1 border-b-custom-gray-200 w-full flex hover:bg-slate-200 hover:shadow-xl"
                                                onClick={handleStopClick}
                                              >
                                                {item.place_name.length > 40 ? (
                                                  <p
                                                    id={"".concat(
                                                      item.place_name,
                                                      ", Coords - ",
                                                      item.geometry
                                                        .coordinates[0],
                                                      " , ",
                                                      item.geometry
                                                        .coordinates[1]
                                                    )}
                                                    className="text-black"
                                                  >
                                                    {item.place_name.slice(
                                                      0,
                                                      40
                                                    )}
                                                    ...
                                                  </p>
                                                ) : (
                                                  <p
                                                    id={"".concat(
                                                      item.place_name,
                                                      ", Coords - ",
                                                      item.geometry
                                                        .coordinates[0],
                                                      " , ",
                                                      item.geometry
                                                        .coordinates[1]
                                                    )}
                                                    className="text-black"
                                                  >
                                                    {item.place_name}
                                                  </p>
                                                )}
                                              </div>
                                            </>
                                          );
                                        })}
                                      </div>
                                    </Fade>
                                  )}
                                </Popper>
                              </div>
                            ) : (
                              <div
                                className={`d-flex flex-row bg-white align-items-center card ps-3 pe-2 w-100 ${
                                  isLaptop ? "p-1 my-1" : "p-2 my-2"
                                } add_stop`}
                                style={{
                                  color: "rgba(80, 80, 80, 0.75)",
                                  fontSize: 15,
                                  fontWeight: "400",
                                  textTransform: "capitalize",
                                }}
                                onClick={handleAddStopOpen}
                              >
                                <Add className="me-1" />
                                Add Stop
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <button
                            className={`w-100 rounded-bottom-3 text-dark fw-700 text-center bg-yellow ${
                              isLaptop ? "fs-18 p-2" : "fs-20 p-3"
                            }`}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Design Code */}
          <div className="d-lg-none d-block py-2 px-1">
            <div className="px-3 py-2">
              <div
                className="d-flex py-2 rounded row"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <div style={{ width: "10%" }}>
                  <LocationRadio />
                </div>
                <div
                  className="text-center fs-16 fw-700 text-capitalize text-grey d-flex justify-content-start"
                  style={{ width: "80%" }}
                >
                  Perth library
                </div>
                <div style={{ width: "10%" }}>
                  <Duration1 />
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              <div
                className="d-flex py-2 rounded row"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <div style={{ width: "10%" }}>
                  <Search />
                </div>
                <div style={{ width: "90%" }}>
                  <div
                    className="fw-700 fs-16 text-capitalize"
                    style={{ color: "#454444" }}
                  >
                    search destination
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center w-100 px-3">
              <div
                className="w-50 d-flex justify-content-center align-items-center"
                style={{
                  padding: 10,
                  background: "rgba(250, 173, 29, 0.25)",
                  border: "1px #FAAD1D solid",
                }}
              >
                <div className="text-grey fw-600 text-capitalize d-flex align-items-center">
                  <Image
                    loader={myLoader}
                    className="w-100 object-fit-contain me-2"
                    src={RideSmall}
                    alt="RideSmall"
                  />{" "}
                  Ride
                </div>
              </div>
              <div
                className="w-50 d-flex justify-content-center align-items-center"
                style={{
                  padding: 10,
                  background: "rgba(250, 173, 29, 0.25)",
                  border: "1px #FAAD1D solid",
                }}
              >
                <div className="text-grey fw-600 text-capitalize d-flex align-items-center">
                  <Image
                    loader={myLoader}
                    className="w-100 object-fit-contain me-2"
                    src={DeliverySmall}
                    alt="DeliverySmall"
                  />
                  Delivery
                </div>
              </div>
            </div>
          </div>
          <div className="bot">
            <Bot />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionOne;
