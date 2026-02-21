const db = require("./db");

const sql = "INSERT INTO courses (title, instructor) VALUES (?, ?)";

const values = ["NodeJS Basics", "John"];

db.query(sql, values, (err, result) => {
  if (err) {
    console.log("Insert failed");
  } else {
    console.log("Course inserted successfully!");
  }

  db.end();
});
