"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FAQBanner from "../../public/svg/FaqBanner.png";
function FAQs({ faqsList }) {
  const [showMore, setShowMore] = useState(false);
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
      if (window.innerWidth <= 1400) {
        setIsLaptop(!isLaptop);
      }
    }
  }, []);
  const toggleTitles = () => {
    setShowMore(!showMore);
  };
  const customStyles = {
    "--bs-accent": "#ffc107 !important", // Set the arrow color to yellow
  };

  const myLoader = ({ src }) => {
    return `${src}`;
  };
  return (
    <>
      <div className="faq_section section-spacer bg-grey">
        <div className="container py-3">
          <div className="row">
            <div className="left_side col-5">
              <Image 
              loader={myLoader}
                src={FAQBanner}
                alt="FAQBanner"
                height="100%"
                width="100%"
              />
            </div>
            <div className="right_side col-7">
              <h2 className="faq_title mb-1">
                Frequently Asked <br />
                Questions
              </h2>
              {faqsList.length > 0 && (
                <div className="inner_section pe-3">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    {faqsList.map((faq, i) =>
                      i < 4 ? (
                        <div className="accordion-item my-3" key={i}>
                          <h2
                            className="small-paragraph accordion-header faq_title"
                            id={`flush-heading${i}`}
                          >
                            <button
                              className="accordion-button collapsed customAccordionButton"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse${i}`}
                              aria-expanded="false"
                              aria-controls={`flush-collapse${i}`}
                              style={{ customStyles }}
                            >
                              {faq.que}
                              {/* <i className="fa fa-angle-down"></i> */}
                              {/* <FontAwesomeIcon icon={faAngleDown} className=""/> */}
                              {/* <div className="custom-icon">
                                <Drowpdown />
                              </div> */}
                              {/* <Image loader={myLoader} src={} alt="Arrow Icon" /> */}
                            </button>
                          </h2>
                          <div
                            id={`flush-collapse${i}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`flush-heading${i}`}
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body py-0">
                              <p className="faq_desc text-black fw-400">
                                {faq.ans}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : showMore ? (
                        <div className="accordion-item my-3">
                          <h2
                            className="small-paragraph accordion-header faq_title"
                            id={`flush-heading${i}`}
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse${i}`}
                              aria-expanded="false"
                              aria-controls={`flush-collapse${i}`}
                            >
                              {faq.que}
                            </button>
                          </h2>
                          <div
                            id={`flush-collapse${i}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`flush-heading${i}`}
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body py-0">
                              <p className="faq_desc text-black fw-400">
                                {faq.ans}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </div>

                  {faqsList.length > 4 ? (
                    <button
                      className="py-2 px-4 read_more_btn"
                      onClick={toggleTitles}
                      style={{
                        background: "#FFAF19",
                        borderRadius: 5,
                        color: "#ffffff",
                        fontSize: isLaptop ? "15px" : "20px",
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      {showMore ? "Read Less" : "Read More"}
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
