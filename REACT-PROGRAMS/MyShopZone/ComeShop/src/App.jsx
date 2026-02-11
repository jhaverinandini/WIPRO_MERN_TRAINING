import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const products = [
    {
      name: "Luxury Sofa",
      price: "₹55,999",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
    },
    {
      name: "Air Conditioner",
      price: "₹45,999",
      img: "https://images.unsplash.com/photo-1625225233840-695456021cde"
    },
    {
      name: "Wooden Bed",
      price: "₹65,999",
      img: "https://images.unsplash.com/photo-1585559605151-33c4672ed79a"
    },
    {
      name: "Dining Table",
      price: "₹39,999",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      name: "Recliner Sofa",
      price: "₹48,999",
      img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344"
    },
    {
      name: "Wardrobe",
      price: "₹72,999",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
    },
    {
      name: "TV Unit",
      price: "₹29,999",
      img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
    },
    {
      name: "Study Table",
      price: "₹18,999",
      img: "https://images.unsplash.com/photo-1582582429416-9c7bbf4f1c1c"
    }
  ];

  return (
    <div className="app">

      {/* POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-box">
            <h2>👑 Hi Nandhu Here!</h2>
            <p>Welcome Kings & Queens 👑</p>
            <button onClick={() => setShowPopup(false)}>Enter Shop</button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="header">
        <h1 className="logo">
          🛒 My<span>ShopZone</span>
        </h1>
      </header>

      {/* MOVING SALE TEXT */}
      <div className="sale-wrapper">
        <div className="sale-text">
          SALE SALE GRAB NOW 🔥 SALE SALE GRAB NOW 🔥 SALE SALE GRAB NOW 🔥 60% off HURRY UP DONT MISS IT 🔥
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="products">
        {products.map((p, i) => (
          <div className="card" key={i}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 MyShopZone | Designed by Nandhu 💙
      </footer>
    </div>
  );
}

export default App;