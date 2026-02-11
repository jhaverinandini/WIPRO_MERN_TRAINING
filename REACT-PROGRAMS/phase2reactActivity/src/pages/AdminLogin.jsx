import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .min(4, "Minimum 4 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      if (values.username === "admin" && values.password === "admin123") {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin");
      } else {
        alert("Invalid Admin Credentials ❌");
      }
    },
  });

  return (
    <div style={{ padding: "30px" }}>
      <h2>Admin Login</h2>

      <form onSubmit={formik.handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        )}

        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
