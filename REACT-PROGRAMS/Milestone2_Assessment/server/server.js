const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: "Learn React" },
  { id: 2, task: "Practice Express" }
];

// GET todos
app.get("/api/todos", (req, res) => {
  try {
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADD todo
app.post("/api/todos", (req, res) => {
  try {
    const newTodo = {
      id: Date.now(),
      task: req.body.task
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE todo
app.delete("/api/todos/:id", (req, res) => {
  try {
    todos = todos.filter(t => t.id !== Number(req.params.id));
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5050, () => {
  console.log("Server running on port 5050");
});