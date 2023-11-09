"use client";
import { ErrorMessage, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import ValidationSchema from "../../validations/pilot";
import axios from "axios";
import { toast } from "react-toastify";

function PilotForm() {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.innerWidth <= 767) {
        setIsMobile(!isMobile);
      }
      if (window.innerWidth <= 991) {
        setIsTablet(!isTablet);
      }
    }
  }, []);
  const planOptions = [
    "Individual",
    "Business",
    "Fleet Management",
    "Driver Partner",
  ];

  return (
    <Formik
      initialValues={{
        full_name: "",
        contact_no: "",
        email: "",
        plan_type: "Driver Partner",
        tnc: false,
      }}
      validationSchema={ValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        const sentObj = {
          subject: `Pilot Launch ${plan} Request`,
          type: 5,
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
      {({ values, handleBlur, handleChange, handleSubmit }) => {
        return (
          <>
            {/* {loading ? (
              <Spinner />
            ) : ( */}
            <Form onSubmit={handleSubmit} className="pilotformtransition">
              <div className="px-3">
                <FormGroup className="form-group_pilot">
                  <Label>
                    <b className="fw-500">Tell us about yourself</b>
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

                <FormGroup className="form-group_pilot">
                  <Label>
                    <b className="fw-500">Contact Details</b>
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

                <FormGroup className="form-group_pilot">
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

                <FormGroup className="form-group_pilot">
                  <Label>
                    <b className="fw-500">Your Plan</b>
                  </Label>
                  <Input
                    name="plan_type"
                    id="plan_type"
                    value={values.plan_type}
                    type="select"
                    onChange={handleChange}
                  >
                    {planOptions.map((x, i) => (
                      <option className="demo" key={i}>
                        {x}
                      </option>
                    ))}
                  </Input>
                  <ErrorMessage
                    component={"small"}
                    name="plan_type"
                    className="error-message"
                  />
                </FormGroup>
                <div
                  style={{
                    color: "#333333",
                    fontSize: 12,
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  We&apos;ll text you to confirm your number
                </div>
                <div>
                  <div className="d-flex mb-2">
                    <Input
                      className="me-2"
                      type="checkbox"
                      name="tnc"
                      id="tnc"
                      checked={values.tnc}
                      value={values.tnc}
                      onChange={handleChange}
                    />
                    <p style={{ color: "#333333", fontSize: 12 }}>I agree to OzOves <span style={{ color: "#FAAD1D", fontSize: 12, }}>Terms & Conditions</span> and <span style={{ color: "#FAAD1D", fontSize: 12, }}> Privacy Policy</span>
                    </p>
                  </div>
                  <ErrorMessage
                    component={"small"}
                    name="tnc"
                    className="error-message"
                  />
                </div>
              </div>
              <Button className={`pilotbtn py-3  ${isTablet ? "w-50 mx-3 my-2" : "w-100 mx-0"}`} type="submit" disabled={loading}>
                Get Started
                {loading && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
              </Button>
            </Form>
            {/* )} */}
          </>
        );
      }}
    </Formik >
  );
}

export default PilotForm;
