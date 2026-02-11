import { useEffect, useState } from "react";
import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/courses");
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      setError("Failed to load courses");
    }
  };

  const addCourse = async (title) => {
    try {
      const res = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
      });
      const data = await res.json();
      setCourses([...courses, data]);
    } catch (err) {
      setError("Failed to add course");
    }
  };

  const deleteCourse = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: "DELETE"
      });
      setCourses(courses.filter(c => c.id !== id));
    } catch (err) {
      setError("Failed to delete course");
    }
  };

  return (
    <div className="App">
      <h2>Online Course Tracker</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <AddCourse onAdd={addCourse} />
      <CourseList courses={courses} onDelete={deleteCourse} />
    </div>
  );
}

export default App;