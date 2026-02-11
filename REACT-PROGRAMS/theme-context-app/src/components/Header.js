import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      padding: "20px",
      background: theme === "light" ? "#eee" : "#333",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      <h2>Theme Context App</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default Header;