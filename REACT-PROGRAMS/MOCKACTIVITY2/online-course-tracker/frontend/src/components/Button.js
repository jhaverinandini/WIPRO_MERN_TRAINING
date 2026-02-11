function Button({ text, onClick }) {
  return (
    <button onClick={onClick} style={{ marginLeft: "10px" }}>
      {text}
    </button>
  );
}

export default Button;