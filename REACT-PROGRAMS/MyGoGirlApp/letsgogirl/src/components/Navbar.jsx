import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const cartContext = useCart();

  // safety fallback
  const totalItems = cartContext?.totalItems ?? 0;

  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}
      <Link to="/cart">Cart ({totalItems})</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
      <Link to="/admin">Admin</Link>
    </nav>
  );
}