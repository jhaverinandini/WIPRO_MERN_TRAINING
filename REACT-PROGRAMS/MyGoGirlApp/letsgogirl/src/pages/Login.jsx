import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/admin");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="page-wrapper">
      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
        )}
      </form>
    </div>
  );
}