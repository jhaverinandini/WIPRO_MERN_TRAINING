import * as yup from "yup";

export const employeeSchema = yup.object().shape({
  name: yup.string().required("Name required"),
  email: yup.string().email("Invalid email").required("Email required"),
});
