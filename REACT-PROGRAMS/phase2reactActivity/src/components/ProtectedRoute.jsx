import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin) {
    return <h2 style={{ color: "red", padding: "20px" }}>Not Authorized ❌</h2>;
  }

  return children;
}

export default ProtectedRoute;
