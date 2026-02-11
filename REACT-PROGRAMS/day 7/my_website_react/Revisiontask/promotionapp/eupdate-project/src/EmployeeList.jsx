import Employee from './Employee'

function EmployeeList() {
  return (
    <div className="container">
      <h2>Employee List</h2>

      <Employee name="Nandini" role="Developer" />
      <Employee name="Lucky" role="Tester" />
      <Employee name="sita" role="Designer" />
      <Employee name="Lucky" role="Support" />
    </div>
  )
}

export default EmployeeList