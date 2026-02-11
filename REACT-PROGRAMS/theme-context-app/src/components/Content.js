import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      padding: "40px",
      height: "100vh",
      background: theme === "light" ? "#fff" : "#111",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      <h3>Current Theme: {theme}</h3>
      <p>This theme is applied globally using Context API.</p>
    </div>
  );
}

export default Content;