fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("API request failed");
    }
    return response.json();
  })
  .then((data) => {
    // take only first 5 todos
    const firstFiveTodos = data.slice(0, 5);

    const tableBody = document.getElementById("todoTableBody");

    firstFiveTodos.forEach((todo) => {
      const row = document.createElement("tr");

      // mock email since API doesn't provide email
      const email = `user${todo.userId}@company.com`;

      row.innerHTML = `
        <td>${todo.userId}</td>
        <td>${email}</td>
        <td>${todo.completed ? "Yes" : "No"}</td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error fetching todos:", error);
    alert("Failed to load todo tasks. Please try again later.");
  });
