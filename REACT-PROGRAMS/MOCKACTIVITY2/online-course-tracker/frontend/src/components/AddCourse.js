import { useState } from "react";
import Button from "./Button";

function AddCourse({ onAdd }) {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter course name"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Button text="Add Course" />
    </form>
  );
}

export default AddCourse;