import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from "./pages/AdminLogin";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/admin-login" element={<AdminLogin />} />

  <Route
    path="/admin"
    element={
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    }
  />
</Routes>

      <Footer />
    </div>
  );
}

export default App;
