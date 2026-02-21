import { Link } from "react-router-dom";
import { useState } from "react";

const LandingPage = () => {

  const [showAbout, setShowAbout] = useState(false);

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.8Utw-awrDE3Oll96v3cMlQHaF1?pid=Api&P=0&h=180"
          alt="logo"
          style={styles.logo}
        />

        <h3 style={styles.small}> Hey Kings & Queens </h3>

        <h1 style={styles.title}>
          Welcome To <br />
          <span style={styles.brand}>Nandhu's Music World</span>
        </h1>

        <p style={styles.caption}>
          Feel the beats. Live the vibe. <br />
          Your rhythm journey starts here
        </p>

        <div style={styles.buttons}>
          <Link to="/login" style={styles.loginBtn}>Login</Link>
          <Link to="/register" style={styles.registerBtn}>Register</Link>
        </div>

        {/*  About Us Button Added */}
        <button
          style={styles.aboutBtn}
          onClick={() => setShowAbout(true)}
        >
          About Us
        </button>

      </div>

      {/*  ABOUT US POPUP */}
      {showAbout && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupCard}>

            <h2 style={{ color: "#1db954", marginBottom: "15px" }}>
              About Nandhu's Music World
            </h2>

            <p style={styles.popupText}>
              Nandhu’s Music World is a fast-growing digital music platform
              trusted by 500+ active users and powered with 1000+ curated songs
              across multiple genres.
            </p>

            <p style={styles.popupText}>
              🎤 We feature legendary singers like  
              <strong> M.M. Keeravani</strong>,  
              <strong> S.P. Balasubrahmanyam</strong>,  
              <strong> K.S. Chithra</strong>,  
              <strong> Shreya Ghoshal</strong> and many more.
            </p>

            <p style={styles.popupText}>
              🎶 Our platform proudly showcases music from iconic directors like  
              <strong> A.R. Rahman</strong>,  
              
              <strong> Devi Sri Prasad</strong>,  
              <strong> Ilaiyaraaja</strong> and other popular creators.
            </p>

            <p style={styles.popupText}>
              We provide seamless playlists, powerful music discovery,
              real-time engagement features and a smooth listening experience.
              This isn’t just a music app — it’s a musical emotion built for you.
            </p>

            <button
              style={styles.closeBtn}
              onClick={() => setShowAbout(false)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: "100vh",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    fontFamily: "Poppins, sans-serif"
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.65)"
  },

  card: {
    position: "relative",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    padding: "60px 80px",
    borderRadius: "20px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 0 40px rgba(0,0,0,0.6)"
  },

  logo: {
    width: "80px",
    marginBottom: "20px",
    borderRadius: "10px"
  },

  small: {
    fontSize: "20px",
    marginBottom: "10px"
  },

  title: {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: "1.3"
  },

  brand: {
    color: "#1db954"
  },

  caption: {
    fontSize: "16px",
    marginBottom: "30px",
    opacity: 0.9
  },

  buttons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center"
  },

  loginBtn: {
    background: "#1db954",
    padding: "12px 35px",
    borderRadius: "30px",
    color: "black",
    fontWeight: "600",
    textDecoration: "none"
  },

  registerBtn: {
    border: "2px solid white",
    padding: "12px 35px",
    borderRadius: "30px",
    color: "white",
    textDecoration: "none"
  },

  aboutBtn: {
    marginTop: "25px",
    background: "transparent",
    border: "2px solid #1db954",
    padding: "10px 30px",
    borderRadius: "30px",
    color: "#1db954",
    fontWeight: "600",
    cursor: "pointer"
  },             

  popupOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000
  },

  popupCard: {
    background: "#111",
    padding: "40px",
    borderRadius: "20px",
    width: "600px",
    color: "white",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(0,0,0,0.7)"
  },

  popupText: {
    fontSize: "15px",
    marginBottom: "15px",
    lineHeight: "1.6",
    opacity: 0.9
  },

  closeBtn: {
    marginTop: "15px",
    background: "#1db954",
    padding: "10px 30px",
    borderRadius: "25px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer"
  }
};

export default LandingPage;











