import * as yup from "yup";
var schema = yup.object().shape({
  full_name: yup.string().required("Please enter Full Name"),
  date_of_birth: yup.string().required("Please select Date of birth"),
  occupation: yup.string().required("Please enter Occupation"),
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
