import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Admin() {
  const [products, setProducts] = useState([]);

  // FETCH PRODUCTS
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // ADD PRODUCT FORM
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Product name required"),
      price: Yup.number()
        .typeError("Price must be a number")
        .positive("Price must be positive")
        .required("Price required"),
    }),

    onSubmit: (values, { resetForm }) => {
      fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          price: Number(values.price),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts((prev) => [...prev, data]);
          resetForm();
        });
    },
  });

  // DELETE PRODUCT
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      setProducts(products.filter((p) => p.id !== id));
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      <form onSubmit={formik.handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}

        <br />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        {formik.errors.price && <p style={{ color: "red" }}>{formik.errors.price}</p>}

        <br /><br />

        <button type="submit">Add Product</button>
      </form>

      <hr />

      {products.map((p) => (
        <div key={p.id}>
          <b>{p.name}</b> – ₹{p.price}
          <button
            onClick={() => deleteProduct(p.id)}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
