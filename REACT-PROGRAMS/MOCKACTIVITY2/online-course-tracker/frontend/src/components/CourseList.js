import Button from "./Button";

function CourseList({ courses, onDelete }) {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <span>{course.title}</span>
          <Button
            text="Delete"
            onClick={() => onDelete(course.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default CourseList;