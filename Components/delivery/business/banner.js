"use client";
import React, { useEffect, useState } from "react";
import BannerForm from "../../../Components/delivery/business/bannerForm"
import Link from "next/link";

function DeliveryBanner() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            if (window.innerWidth <= 991) {
                setIsMobile(!isMobile);
            }
        }
    }, []);
    return (
        <>
            <div className="delivery_business_section">
                <div className="delivery_business_banner d-flex align-items-center">
                    <div className="container h-100">
                        <div className={`h-100 ${isMobile ? "d-flex align-items-center" : "row w-100 mx-0"}`}>
                            <div className={`d-flex py-4 py-lg-5 align-items-center ${isMobile ? "" : "col-md-7"}`}>
                                <div className="d-flex justify-content-center flex-column">
                                    <h1 className="fw-600 text-capitalize banner_title order-1">
                                        Hyper local Last-mile delivery
                                    </h1>
                                    <p className="my-3 banner_desc_1 order-2">
                                        Unleash Accelerated Growth With Smart Logistics
                                    </p>
                                    <div className="order-4 order-lg-3">
                                        <button className="bg-socialiconyellow text-dark fw-600 px-2 py-1 rounded deliver_btn">
                                            <Link href={`/launch`} target="_blank" className="text-dark">
                                                Deliver now
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {isMobile ? (
                                <></>
                            ) : (
                                <div className="col-md-5 mx-0 px-0 right_side">
                                    <BannerForm />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {isMobile ? (
                    <div className="container delivery_no_banner">
                        <BannerForm />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default DeliveryBanner;