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
  plan_type: yup.string().required("Please select Plan Type"),
  tnc: yup
    .boolean()
    .test("tnc", "Please select terms and conditions", (value) => value),
});

export default schema;
