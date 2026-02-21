import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addBook } from "../actions/bookActions";

const bookSchema = Yup.object({
  title: Yup.string().required("Title required"),
  author: Yup.string().required("Author required"),
  price: Yup.number().required("Price required"),
});

function AddBook() {
  return (
    <div>
      <h2>Add Book</h2>

      <Formik
        initialValues={{ title: "", author: "", price: "" }}
        validationSchema={bookSchema}
        onSubmit={(values, { resetForm }) => {
          addBook(values);
          resetForm();
        }}
      >
        <Form>
          <Field name="title" placeholder="Title" />
          <ErrorMessage name="title" />
          <br /><br />

          <Field name="author" placeholder="Author" />
          <ErrorMessage name="author" />
          <br /><br />

          <Field name="price" placeholder="Price" />
          <ErrorMessage name="price" />
          <br /><br />

          <button type="submit">Add Book</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddBook;
