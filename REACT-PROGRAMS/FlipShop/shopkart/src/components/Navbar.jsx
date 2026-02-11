import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 15, background: "black" }}>
      <Link to="/" style={{ color: "pink", marginRight: 15 }}>Home</Link>
      <Link to="/products" style={{ color: "pink", marginRight: 15 }}>Products</Link>
      <Link to="/cart" style={{ color: "pink" }}>Cart</Link>
    </nav>
  );
}