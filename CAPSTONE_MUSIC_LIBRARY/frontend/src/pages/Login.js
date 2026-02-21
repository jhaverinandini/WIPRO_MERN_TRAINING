import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);

      if (data.user.role === "admin") navigate("/admin");
      else navigate("/dashboard");

    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <div style={styles.wrapper}>
      
      {/* Floating particles */}
      <div style={styles.particle1}></div>
      <div style={styles.particle2}></div>
      <div style={styles.particle3}></div>

      <div
        style={{
          ...styles.card,
          transform: mounted ? "translateY(0)" : "translateY(40px)",
          opacity: mounted ? 1 : 0,
        }}
      >
        <h1 style={styles.title}>🎧 Welcome Back</h1>
        <p style={styles.subtitle}>Login and feel the beats again ✨</p>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <div style={{ position: "relative" }}>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Login
          </button>

          <p style={styles.linkText}>
            Don't have account?{" "}
            <span
              style={styles.link}
              onClick={() => navigate("/register")}
            >
              Register
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
      "url('https://images.unsplash.com/photo-1723743809779-0cd5b03ff9cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  },

  card: {
    width: "380px",
    padding: "40px",
    borderRadius: "20px",
    backdropFilter: "blur(20px)",
    background: "rgba(0,0,0,0.55)",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    transition: "0.6s ease",
  },

  title: {
    color: "white",
    marginBottom: "10px",
    fontSize: "26px",
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
    fontSize: "16px",
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
    transition: "0.3s ease",
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

  particle1: {
    position: "absolute",
    width: "12px",
    height: "12px",
    background: "#1ed760",
    borderRadius: "50%",
    top: "20%",
    left: "15%",
    animation: "float 6s infinite ease-in-out",
  },
  particle2: {
    position: "absolute",
    width: "10px",
    height: "10px",
    background: "#1db954",
    borderRadius: "50%",
    bottom: "25%",
    right: "20%",
    animation: "float 8s infinite ease-in-out",
  },
  particle3: {
    position: "absolute",
    width: "8px",
    height: "8px",
    background: "#ffffff",
    borderRadius: "50%",
    top: "60%",
    left: "70%",
    animation: "float 7s infinite ease-in-out",
  },
};

export default Login;