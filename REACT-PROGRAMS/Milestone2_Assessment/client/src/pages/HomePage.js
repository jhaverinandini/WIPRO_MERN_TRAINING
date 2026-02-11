import { useEffect, useState } from "react";
import { getTodos, addTodo, deleteTodo } from "../services/apiService";
import Button from "../components/Button";

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    getTodos().then(data => setTodos(data || []));
  }, []);

  const handleAdd = async () => {
    if (!task) return;
    await addTodo(task);
    setTodos(await getTodos());
    setTask("");
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New todo"
      />
      <Button text="Add" onClick={handleAdd} />

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.task}
            <Button text="Delete" onClick={() => handleDelete(todo.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;