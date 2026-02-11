import { useState } from "react";

function Inventory() {
  const [stock, setStock] = useState(1);

  return (
    <div className="inventory-card">
      <h1>Inventory Manager</h1>

      <p className="label">Current Stock</p>

      <div className="count">{stock}</div>

      <div className="btn-group">
        <button
          className="add"
          onClick={() => setStock(stock + 1)}
        >
          Add Stock
        </button>

        <button
          className="remove"
          onClick={() => setStock(stock - 1)}
          disabled={stock === 0}
        >
          Remove Stock
        </button>
      </div>
    </div>
  );
}

export default Inventory;
