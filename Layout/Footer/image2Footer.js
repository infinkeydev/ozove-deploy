"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FooterQrCode from "../../public/Images/Footer/FooterQR.png";
import Link from "next/link";

function Image2Footer() {
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
            <div className="upper_section_signupimagedriver">
                <div className="upper_section_signup">
                    <div className={`top_business_problem`}>
                        <div className="container">
                            <div className="row justify-content-center py-3 py-lg-5">
                                <div className="col-12 d-flex justify-content-center flex-column align-items-center py-5">
                                    <p className="my-3 touch_title">
                                        Ready to Drive with Us?
                                    </p>
                                    <button className="contactusbtn py-2 bg-socialiconyellow px-4 py-2">
                                        <Link href={`/home`} target="_blank">
                                            Sign up now
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className="row justify-content-center d-none d-lg-flex">
                                <div className={`${isLaptop ? "col-lg-9" : "col-lg-10"}`}>
                                    <div className={`signup_inner_section px-5 ${isLaptop ? "py-3" : "py-4"}`}>
                                        <div className="row">
                                            <div className="col-9">
                                                <p className="small-paragraph text-grey unlock_title">
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
                                                    <Link href={`/home`} target="_blank">
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
export default Image2Footer;