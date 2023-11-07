"use client"
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
// Fonts
import "../styles/base/fonts/stylesheet.css";
import Header from "../Layout/Header/index";
import Footer from "../Layout/Footer/index";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Script from "next/script";
import { usePathname } from 'next/navigation'

import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      {/* <title>OZ Ove</title>
      <meta name="description" content="OZ Ove - Beyond Rides, Total Logistics" /> */}
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={`https://www.ozove.com.au${pathname}`}></link>
      </head>
      <body>
        <ToastContainer style={{ zIndex: "9999999" }} />
        <Header />
        <main>{children}</main>
        {/* Global Footer */}
        <Footer />
        <Script
          id="bootstrap-id"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
          async
        ></Script>
      </body>
    </html>
  );
}
