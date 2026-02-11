const API_URL = "http://localhost:5050/api/todos";

export async function getTodos() {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function addTodo(task) {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task })
    });
  } catch (err) {
    console.log(err);
  }
}

export async function deleteTodo(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
  } catch (err) {
    console.log(err);
  }
}