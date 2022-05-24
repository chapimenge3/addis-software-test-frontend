import { useState, useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'

function App() {
  const dispatch = useDispatch()
  const { loading, employees, error } = useSelector((state: RootState) => state.employee)

  useEffect(() => {
    console.log('useEffect ran', employees);
    dispatch({ type: 'employee/getEmployeesStart' })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Addis Software</p>
        <p>
          {loading ? 'Loading...' : error ? 'Error' : employees.map((employee) => employee.name).join(', ')}
        </p>
      </header>
    </div>
  )
}

export default App
