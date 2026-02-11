import "./App.css";
import { useState } from "react";

function App() {
  const employees = [
    { name: "Nandhu", role: "Developer", canPromote: true },
    { name: "Ram", role: "Tester", canPromote: false },
    { name: "Sita", role: "Designer", canPromote: true },
    { name: "Lucky", role: "Support", canPromote: false }
  ];

  return (
    <div className="container">
      <h2>Employee List</h2>

      <div className="card-container">
        {employees.map((emp, index) => (
          <EmployeeCard key={index} employee={emp} />
        ))}
      </div>
    </div>
  );
}

function EmployeeCard({ employee }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="card">
      <h3 className="text-black">Name: {employee.name}</h3>
      <p className="text-black">Role: {employee.role}</p>

      <button onClick={() => setClicked(true)}>Promote</button>

      {clicked && (
        employee.canPromote ? (
          <p className="success">
            ✅ Yes, you are promoted
          </p>
        ) : (
          <p className="fail">
            ❌ You are not promoted
          </p>
        )
      )}
    </div>
  );
}

export default App;