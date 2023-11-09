"use client";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import ValidationSchema from "../../validations/driver";
import axios from "axios";
import { toast } from "react-toastify";
import PilotLogo from "../../public/svg/pilotlogo.svg";

function BusinessForm() {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 991) {
        setIsMobile(!isMobile);
      }
    }
  }, []);

  return (
    <Formik
      initialValues={{
        full_name: "",
        contact_no: "",
        email: "",
        vehicle_type: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        const sentObj = {
          subject: "Apply to driver request",
          type: 4,
          ...values,
        };
        const result = await axios.post(`/api/sent-mail`, sentObj);
        if (result.data && result.data.status === 200) {
          toast.success(result.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
          resetForm();
        } else {
          toast.error(result.data.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        setLoading(false);
      }}
    >
      {({ values, handleBlur, handleChange, setFieldValue, handleSubmit }) => {
        return (
          <>
            <Form onSubmit={handleSubmit} className="apply_driver_form">
              <div className="inner_apply_driver_form px-3">
                {!isMobile ? (
                  <>
                    <div className="d-flex justify-content-center">
                      <PilotLogo
                        style={{
                          height: "25%",
                          width: "25%",
                          textAlign: "center",
                        }}
                      />
                    </div>
                    <p className="small-paragraph deliver_title_description w-lg-75 mt-3 py-1">
                      Become a driver
                    </p>
                    <div className="become_border_custom w-25 mb-2"></div>
                  </>
                ) : (
                  <>
                    <p className="fs-20 fw-700 third_title text-grey">
                      Sign up
                    </p>
                  </>
                )}
                <FormGroup className="inner_driver_form_input">
                  <Label>
                    <b className="bold_text">
                      Tell us about yourself{" "}
                      <span className="error-message">*</span>
                    </b>
                  </Label>
                  <Input
                    name="full_name"
                    id="full_name"
                    placeholder={"Full Name"}
                    value={values.full_name}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    component={"small"}
                    name="full_name"
                    className="error-message"
                  />
                </FormGroup>

                <FormGroup className="inner_driver_form_input">
                  <Label>
                    <b className="bold_text">
                      Contact Details <span className="error-message">*</span>
                    </b>
                  </Label>
                  <Input
                    name="contact_no"
                    id="contact_no"
                    placeholder={"Contact Number"}
                    value={values.contact_no}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    component={"small"}
                    name="contact_no"
                    className="error-message"
                  />
                </FormGroup>

                <FormGroup className="inner_driver_form_input">
                  <Input
                    name="email"
                    id="email"
                    placeholder={"Email"}
                    value={values.email}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    component={"small"}
                    name="email"
                    className="error-message"
                  />
                </FormGroup>

                <FormGroup className="inner_driver_form_input">
                  <Label>
                    <b className="bold_text">
                      Driving Details <span className="error-message">*</span>
                    </b>
                  </Label>
                  <Input
                    name="vehicle_type"
                    id="vehicle_type"
                    placeholder={"Vehicle Type"}
                    value={values.vehicle_type}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormGroup>
                <ErrorMessage
                  component={"small"}
                  name="vehicle_type"
                  className="error-message"
                />
              </div>
              <div className={`${isMobile ? "mx-2" : ""}`}>
                <Button
                  type="submit"
                  disabled={loading}

                  className={`${
                    isMobile
                      ? "starteddriver w-100 my-3 mx-1"
                      : "starteddriver w-100 py-3"
                  }`}
                >
                  Get Started as Driver
                  {loading && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                </Button>
              </div>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default BusinessForm;
