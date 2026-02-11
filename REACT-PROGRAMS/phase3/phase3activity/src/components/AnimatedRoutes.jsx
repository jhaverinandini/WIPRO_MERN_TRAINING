import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Employee from "../pages/Employee";
import Admin from "../pages/Admin";
import ProtectedRoute from "./ProtectedRoute";

export default function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/employee"
        element={
          <ProtectedRoute>
            <Employee />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
