import * as yup from "yup";
var schema = yup.object().shape({
  full_name: yup.string().required("Please enter Full Name"),
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
  vehicle_type: yup.string().required("Please enter Vehicle Type"),
});

export default schema;
