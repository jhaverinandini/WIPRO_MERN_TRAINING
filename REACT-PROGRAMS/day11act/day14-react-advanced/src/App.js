import React, { useState, Suspense } from "react";
import StatsCard from "./components/StatsCard";
import ErrorBoundary from "./components/ErrorBoundary";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";

/* Lazy loaded components */
const CourseDetails = React.lazy(() =>
  import("./components/CourseDetails")
);
const InstructorProfile = React.lazy(() =>
  import("./components/InstructorProfile")
);

function App() {
  const [showCourse, setShowCourse] = useState(false);
  const [showInstructor, setShowInstructor] = useState(false);
  const [count, setCount] = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      <h2>Day 14 – React Advanced Concepts</h2>

      {/* Lazy Loading */}
      <h3>1. Lazy Loading</h3>
      <button onClick={() => setShowCourse(true)}>
        View Course Details
      </button>
      <button onClick={() => setShowInstructor(true)}>
        View Instructor Profile
      </button>

      <Suspense fallback={<p>Loading component...</p>}>
        {showCourse && <CourseDetails />}
        {showInstructor && <InstructorProfile />}
      </Suspense>

      <hr />

      {/* Pure Component */}
      <h3>2. Pure Component</h3>
      <StatsCard title="Users" value={count} />
      <button onClick={() => setCount(count + 1)}>
        Simulate Update
      </button>

      <hr />

      {/* Error Boundary */}
      <h3>3. Error Boundary</h3>
      <ErrorBoundary>
        <ProductCard />
      </ErrorBoundary>

      <hr />

      {/* Portal */}
      <h3>4. React Portal</h3>
      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <Modal close={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
