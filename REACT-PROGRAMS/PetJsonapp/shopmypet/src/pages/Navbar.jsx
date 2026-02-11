import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#222", padding: "10px" }}>
      <Link to="/" style={{ color: "white", margin: 10 }}>Home</Link>
      <Link to="/products" style={{ color: "white", margin: 10 }}>Products</Link>
      <Link to="/cart" style={{ color: "white", margin: 10 }}>Cart</Link>
      <Link to="/about" style={{ color: "white", margin: 10 }}>About</Link>
      <Link to="/contact" style={{ color: "white", margin: 10 }}>Contact</Link>
    </nav>
  );
}