import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">My Project</h2>

      <div className="nav-links">
        <Link to="/login">Login</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;