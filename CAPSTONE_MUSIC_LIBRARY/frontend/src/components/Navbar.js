import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  // Hide auth buttons on landing page
  const isLanding = location.pathname === "/";

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.8Utw-awrDE3Oll96v3cMlQHaF1?pid=Api&P=0&h=180"
          alt="logo"
          style={styles.logo}
        />
        <h2 style={styles.title}>Nandhu's Music World</h2>
      </div>

      {!isLanding && (
        <div>
          {!token ? (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/register" style={styles.button}>Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" style={styles.link}>Dashboard</Link>
              <button onClick={handleLogout} style={styles.logout}>
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "12px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)",
    color: "white",
    zIndex: 1000
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  logo: {
    width: "35px",
    borderRadius: "6px"
  },

  title: {
    fontSize: "18px"
  },

  link: {
    marginRight: "15px",
    color: "white",
    textDecoration: "none"
  },

  button: {
    background: "#1db954",
    padding: "6px 15px",
    borderRadius: "20px",
    textDecoration: "none",
    color: "black"
  },

  logout: {
    background: "#ff4d4d",
    border: "none",
    padding: "6px 15px",
    borderRadius: "20px",
    color: "white",
    cursor: "pointer"
  }
};

export default Navbar;