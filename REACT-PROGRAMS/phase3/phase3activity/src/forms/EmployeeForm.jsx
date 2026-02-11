import { useState } from "react";
import { employeeSchema } from "./ValidationSchema";

export default function EmployeeForm() {
  const [data, setData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await employeeSchema.validate(data);
      alert("Employee Registered ✅");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <button>Submit</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
