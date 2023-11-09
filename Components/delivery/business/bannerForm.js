"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Forms from "../../../Components/delivery/forms"

function BannerForm() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            if (window.innerWidth <= 767) {
                setIsMobile(!isMobile);
            }
        }
    }, []);
    return (
        <>
            <div className="px-0 py-4 d-flex justify-content-center justify-content-lg-end">
            <div className={`px-0 form-width`}>
                    <div className="inner_banner_form">
                        <div className="sub_inner_banner_form card bg-transparent">
                            <div className="card-body p-0">
                                <nav className="d-lg-block d-none">
                                    <div
                                        className="nav nav-tabs"
                                        id="nav-tab"
                                        role="tablist"
                                    >
                                        <Link className="d-flex justify-content-center dropdown-item w-50" href={`/delivery/individual`}>
                                            <button
                                                className="nav-link form_title w-100 fw-700 nav-btn-ride py-3 bg-white text-center"
                                                id="nav-individual-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-individual"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-individual"
                                                aria-selected="true"
                                                style={{
                                                    color: "#333333",
                                                    borderTopLeftRadius: "20px"
                                                }}
                                            >
                                                Individual
                                            </button>
                                        </Link>
                                        <button
                                            className="nav-link w-50 form_title fw-bold active bg-socialiconyellow py-3 text-center"
                                            id="nav-business-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#nav-business"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-business"
                                            aria-selected="false"
                                            style={{
                                                color: "#333333",
                                                borderRadius: "0px 20px 0px 0px ",
                                            }}
                                        >
                                            Business
                                        </button>
                                    </div>
                                </nav>
                                <Forms />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BannerForm;
