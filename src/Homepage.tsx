import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import { EmployeeHeader, EmployeeRow, ExployeeData, ExployeesTable } from './components/table.style'

function Homepage() {
  const dispatch = useDispatch()
  const { loading, employees, error } = useSelector((state: RootState) => state.employee)

  useEffect(() => {
    console.log('useEffect ran', employees);
    dispatch({ type: 'employee/getEmployeesStart' })
  }, []);

  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <p>Welcome to Addis Software</p>
        <p>
          {/* Show employee details for all of the employees */}
          {loading ? 'Loading...' : error ? error:'' }
          { !loading && employees ?  <ExployeesTable>
            <EmployeeRow>
              <EmployeeHeader>ID</EmployeeHeader>
              <EmployeeHeader>Name</EmployeeHeader>
              <EmployeeHeader>Salary</EmployeeHeader>
              <EmployeeHeader>Gender</EmployeeHeader>
              <EmployeeHeader>Birth Date</EmployeeHeader>
            </EmployeeRow>
            { employees.map(emplyee => <EmployeeRow>
              <ExployeeData>{emplyee.id}</ExployeeData>
              <ExployeeData>{emplyee.name}</ExployeeData>
              <ExployeeData>{emplyee.salary}</ExployeeData>
              <ExployeeData>{emplyee.gender}</ExployeeData>
              <ExployeeData>{emplyee.birthdate}</ExployeeData>
            </EmployeeRow> ) }
          </ExployeesTable>: '' }
        </p>
      </header>
    </div>
  )
}

export default Homepage
