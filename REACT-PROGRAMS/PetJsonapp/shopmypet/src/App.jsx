import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products"
          element={<Products cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;