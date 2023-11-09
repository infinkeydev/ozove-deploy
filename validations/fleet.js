import * as yup from "yup";
var schema = yup.object().shape({
  full_name: yup.string().required("Please enter Full Name"),
  role: yup.string().required("Please enter Role"),
  company_name: yup.string().required("Please enter Company Name"),
  contact_no: yup
    .string()
    .trim()
    .required("Please enter Contact Number")
    .matches(/^[0-9]*$/, "Please enter numeric values only"),
  email: yup
    .string()
    .trim()
    .required("Please enter Email")
    .matches(/^\S*$/, "Please enter valid Email")
    .email("Please enter valid Email"),
  region: yup.string().required("Please enter Region"),
  no_of_driver: yup.string().required("Please enter No. of Driver"),
});

export default schema;
