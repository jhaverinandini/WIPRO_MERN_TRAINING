import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(
    JSON.parse(localStorage.getItem("cart"))?.length || 0
  );

  window.addEventListener("storage", () => {
    setCartCount(JSON.parse(localStorage.getItem("cart"))?.length || 0);
  });

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">🛒 ShopZone</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}
