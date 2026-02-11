import { Routes, Route } from "react-router-dom";
import InventoryList from "./components/InventoryList";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Inventory Catalog</h2>

      <Routes>
        <Route path="/" element={<InventoryList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
