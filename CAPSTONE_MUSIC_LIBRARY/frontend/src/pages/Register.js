import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("🎉 Registration Successful!");
      navigate("/login");

    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.card,
          transform: mounted ? "translateY(0)" : "translateY(40px)",
          opacity: mounted ? 1 : 0,
        }}
      >
        <h1 style={styles.title}>🎶 Create Account</h1>
        <p style={styles.subtitle}>
          Join Nandhu's Music World ✨
        </p>

        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Enter Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <div style={{ position: "relative" }}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ ...styles.input, paddingRight: "45px" }}
            />
            <span
              onClick={() => setShowPass(!showPass)}
              style={styles.eye}
            >
              👁
            </span>
          </div>

          <button type="submit" style={styles.button}>
            Register
          </button>

          <p style={styles.linkText}>
            Already have account?{" "}
            <span
              style={styles.link}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "url('https://wallpapers.com/images/hd/music-aesthetic-2560-x-1440-background-zt916qz666u2503u.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "'Poppins', sans-serif",
  },

  card: {
    width: "400px",
    padding: "40px",
    borderRadius: "20px",
    backdropFilter: "blur(20px)",
    background: "rgba(0,0,0,0.55)",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
    transition: "0.6s ease",
  },

  title: {
    color: "white",
    marginBottom: "10px",
    fontSize: "24px",
  },

  subtitle: {
    color: "#ccc",
    fontSize: "14px",
    marginBottom: "25px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    background: "rgba(255,255,255,0.15)",
    color: "white",
  },

  eye: {
    position: "absolute",
    right: "12px",
    top: "12px",
    cursor: "pointer",
  },

  button: {
    padding: "14px",
    borderRadius: "50px",
    border: "none",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    background: "linear-gradient(135deg,#1db954,#1ed760)",
    color: "white",
    boxShadow: "0 0 15px rgba(30,215,96,0.6)",
  },

  linkText: {
    color: "#ccc",
    fontSize: "13px",
    marginTop: "10px",
  },

  link: {
    color: "#1ed760",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Register;