import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add">Add Book</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
