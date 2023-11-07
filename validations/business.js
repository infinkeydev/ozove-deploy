import * as yup from "yup";
var schema = yup.object().shape({
  full_name: yup.string().required("Please enter Full Name"),
  company_name: yup.string().required("Please enter Company Name"),
  job_title: yup.string().required("Please enter Job Title"),
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
});

export default schema;
