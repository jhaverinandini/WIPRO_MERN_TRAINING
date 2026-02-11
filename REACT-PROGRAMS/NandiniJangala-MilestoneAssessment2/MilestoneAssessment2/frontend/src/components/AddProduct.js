import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Yup validation schema
const schema = Yup.object({
  name: Yup.string().required("Name is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required")
});

function AddProduct() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="container mt-4">
      <h3>Add Product</h3>

      {/* Success message */}
      {success && (
        <div className="alert alert-success">
          Product added successfully
        </div>
      )}

      <Formik
        initialValues={{
          name: "",
          price: "",
          category: "",
          description: ""
        }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          axios.post("http://localhost:5000/products", values)
            .then(() => {
              setSuccess(true);
              resetForm();
            });
        }}
      >
        <Form>
          <Field
            name="name"
            placeholder="Product Name"
            className="form-control mb-2"
          />

          <Field
            name="price"
            placeholder="Price"
            className="form-control mb-2"
          />

          <Field
            name="category"
            placeholder="Category"
            className="form-control mb-2"
          />

          <Field
            name="description"
            placeholder="Description"
            className="form-control mb-3"
          />

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddProduct;