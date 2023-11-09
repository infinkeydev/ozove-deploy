"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FooterQrCode from "../../public/Images/Footer/FooterQR.png";
import Link from "next/link";

function BrownFooter() {
    const [isLaptop, setIsLaptop] = useState(false);

    useEffect(() => {
        if (typeof window !== undefined) {
            if (window.innerWidth <= 1400) {
                setIsLaptop(!isLaptop);
            }
        }
    }, []);
    const myLoader = ({ src }) => {
        return `${src}`;
    };
    return (
        <>
            <div className="bg-grey d-none d-lg-block">
                <div className="upper_section_signup full_upperSection bg-grey">
                    <div className={`top_business_problem`}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className={`${isLaptop ? "col-lg-9" : "col-lg-10"}`}>
                                    <div className={`signup_inner_section px-5 ${isLaptop ? "py-3" : "py-4"}`}>
                                        <div className="row">
                                            <div className="col-9">
                                                <p className="text-grey unlock_title">
                                                    Unlock Exclusive Features and Enhance Your
                                                    Experience
                                                    <br />
                                                    <span>Download Our App Now!</span>
                                                </p>

                                                <p className="small-lg-title text-grey signup_title mt-1">
                                                    Sign up for pilot launch
                                                </p>

                                                <button
                                                    type="button"
                                                    className="signup_btn mt-3 px-4 py-2"
                                                >
                                                    <Link href={`/launch`} target="_blank">
                                                        sign up
                                                    </Link>
                                                </button>
                                            </div>
                                            <div className="col-3 d-flex justify-content-end">
                                                <div className="qr_code_section d-flex justify-content-end">
                                                    <Image loader={myLoader} className="w-100 object-fit-contain" src={FooterQrCode} alt="FooterQrCode" />
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
        </>
    )
}
export default BrownFooter;