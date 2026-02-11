import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <div className="app-container fade">
      <nav>
        <Link to="/home">🏠 Home</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;