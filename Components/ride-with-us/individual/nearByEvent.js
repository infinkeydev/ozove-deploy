"use client";
import React from "react";
import Image from "next/image";
import Rectangle1 from "../../../public/Images/ride_with_us/ride_individual/Rectangle1.png";
import Rectangle2 from "../../../public/Images/ride_with_us/ride_individual/Rectangle2.png";
import Rectangle3 from "../../../public/Images/ride_with_us/ride_individual/Rectangle3.png";
import Rectangle4 from "../../../public/Images/ride_with_us/ride_individual/Rectangle4.png";
import Link from "next/link";

function nearByEvent() {
  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="nearbyyeventssection py-4 container">
        <div className="row">
          <div className="col-12">
            <p className="nearbyeventtitle">nearby events</p>
          </div>
        </div>
        <div className="row mx-0 w-100 justify-content-between">
          <div className="nearBySectoin my-2">
            <div className="nearbyyeventssectioncontainer">
              <Image loader={myLoader} className="h-auto object-fit-contain w-100" src={Rectangle1} alt="Frma6" />
              <div className="eventbottom-left">
                <p className="eventtitle ps-2">marks birthday party</p>
                <p className="eventtime ps-2">
                  Fri 9:00- 11:00 am
                </p>
              </div>
            </div>
            <p className="eventhead">
              The Ellington Jazz Club,191/193 Beaufort St
              <br />
              Perih WA
            </p>
            <button className="mt-2 px-2 py-1">
              <Link href={`/launch`} target="_blank" className="text-white">
                book now
              </Link>
            </button>
          </div>
          <div className="nearBySectoin my-2">
            <div className="nearbyyeventssectioncontainer">
              <Image loader={myLoader} className="h-auto object-fit-contain w-100" src={Rectangle2} alt="Frma6" />
              <div className="eventbottom-left">
                <p className="eventtitle ps-2">Robbie Williams</p>
                <p className="eventtime ps-2">
                  Fri, 4:00- IO:OO pm
                </p>
              </div>
            </div>
            <p className="eventhead">
              Nikola Estate, 148 Dale Rd Middle Swan
              <br />
              WA
            </p>
            <button className="mt-2 px-2 py-1">
              <Link href={`/launch`} target="_blank" className="text-white">
                book now
              </Link>
            </button>
          </div>
          <div className="nearBySectoin my-2">
            <div className="nearbyyeventssectioncontainer">
              <Image loader={myLoader} className="h-auto object-fit-contain w-100" src={Rectangle3} alt="Frma6" />
              <div className="eventbottom-left">
                <p className="eventtitle ps-2">50 Cent</p>
                <p className="eventtime ps-2">
                  Sat, 7:00-11 pm
                </p>
              </div>
            </div>
            <p className="eventhead">
              RAC Arena, 700 wellington St <br /> Perth WA
            </p>
            <button className="mt-2 px-2 py-1">
              <Link href={`/launch`} target="_blank" className="text-white">
                book now
              </Link>
            </button>
          </div>
          <div className="nearBySectoin my-2">
            <div className="nearbyyeventssectioncontainer">
              <Image loader={myLoader} className="h-auto object-fit-contain w-100" src={Rectangle4} alt="Frma6" />
              <div className="eventbottom-left">
                <p className="eventtitle ps-2">FLETCHER</p>
                <p className="eventtime ps-2">
                  Sat, 7-00 pm
                </p>
              </div>
            </div>
            <p className="eventhead me-4">
              Metro City 146 Roe St <br /> Northbridge WA
            </p>
            <button className="mt-2 px-2 py-1">
              <Link href={`/launch`} target="_blank" className="text-white">
                book now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default nearByEvent;
