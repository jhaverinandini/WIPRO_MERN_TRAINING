import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    }),
    onSubmit: values => {
      const success = login(values.email, values.password);
      success ? navigate("/") : alert("Invalid login");
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="email" placeholder="Email" onChange={formik.handleChange} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}