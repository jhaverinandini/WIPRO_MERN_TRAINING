import { useState } from 'react'

function Employee({ name, role }) {
  const [promoted, setPromoted] = useState(false)

  return (
    <div className="employee-card">
      <h3>Name: {name}</h3>
      <p>Role: {role}</p>

      <button onClick={() => setPromoted(true)}>
        Promote
      </button>

      {promoted && (
        <p className="promoted">✅ {name} is promoted!</p>
      )}
    </div>
  )
}

export default Employee