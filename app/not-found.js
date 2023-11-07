"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

function bannerSection() {
    return (
        <>
            <div className="container section_404">
                <div className="py-5">
                    <p className="text-404">404 PAGE!</p>
                    <p className="text-black fs-3 text-center">The page you were looking for could not be found</p>
                </div>
                <div className="d-flex justify-content-center pt-3">
                    <Link href={`/home`}>
                        <button className="bg-socialiconyellow text-white fw-600 px-4 py-3 text-center rounded fs-4">Back to Main Page</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default bannerSection;