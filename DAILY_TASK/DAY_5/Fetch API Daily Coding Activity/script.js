const FetchModule = (function () {

  const postsDiv = document.getElementById("posts");
  const todosDiv = document.getElementById("todos");

  // REAL readable blog content (for display)
  const realBlogContent = [
    {
      title: "Why Learning JavaScript is Important in 2024",
      body: "JavaScript is one of the most popular programming languages used to build interactive web applications. It is essential for frontend and backend development."
    },
    {
      title: "Understanding Fetch API with Examples",
      body: "The Fetch API allows developers to make HTTP requests easily. It is promise-based and widely used for fetching data from servers."
    },
    {
      title: "What is MERN Stack?",
      body: "MERN stack consists of MongoDB, Express, React, and Node.js. It is used to build full-stack web applications efficiently."
    },
    {
      title: "Benefits of Using REST APIs",
      body: "REST APIs enable communication between client and server. They are scalable, flexible, and easy to integrate."
    },
    {
      title: "Tips for Beginners in Web Development",
      body: "Start with HTML, CSS, and JavaScript. Practice daily, build small projects, and understand concepts instead of memorizing code."
    }
  ];

  function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(() => {
        // display REAL readable content
        realBlogContent.forEach(post => {
          const div = document.createElement("div");
          div.className = "card";

          div.innerHTML = `
            <div class="post-title">${post.title}</div>
            <div class="post-body">${post.body}</div>
          `;
          postsDiv.appendChild(div);
        });
      })
      .catch(() => {
        postsDiv.innerHTML = "Error loading blog posts";
      });
  }

  function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(todos => {
        todos.slice(0, 5).forEach(todo => {
          const div = document.createElement("div");
          div.className = "card todo";

          div.innerHTML = `
            <span>User ${todo.userId}: ${todo.title}</span>
            <span class="${todo.completed ? "completed" : "pending"}">
              ${todo.completed ? "Completed" : "Pending"}
            </span>
          `;
          todosDiv.appendChild(div);
        });
      })
      .catch(() => {
        todosDiv.innerHTML = "Error loading todos";
      });
  }

  return {
    init: function () {
      fetchPosts();
      fetchTodos();
    }
  };

})();

FetchModule.init();
