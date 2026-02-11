import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);

  const initialValues = {
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    category: Yup.string().required("Required"),
    image: Yup.string().url("Invalid URL").required("Required"),
    description: Yup.string().min(10).required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const res = await fetch("http://localhost:8000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    addProduct(data);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="name" placeholder="Product Name" />
        <ErrorMessage name="name" />

        <Field name="price" placeholder="Price" />
        <ErrorMessage name="price" />

        <Field name="category" placeholder="Category" />
        <ErrorMessage name="category" />

        <Field name="image" placeholder="Image URL" />
        <ErrorMessage name="image" />

        <Field name="description" placeholder="Description" />
        <ErrorMessage name="description" />

        <button type="submit">Add Product</button>
      </Form>
    </Formik>
  );
};

export default AddProduct;
