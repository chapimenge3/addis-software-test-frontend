import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from './redux/store'


function EmployeeDetails() {
    const dispatch = useDispatch()
    const { id } = useParams<any>() 
    const { loading, employee, error } = useSelector((state: RootState) => state.employeeDetails)

    useEffect(() => {
        console.log('useEffect ran');
        // dispath the employeeDetails action with employee id as parameter
        dispatch({ type: 'employee/getEmployeeDetailsStart', payload: { id } })
    }, []);

    return (
        <div>
            <h1>Employee Details { id }</h1>
            {/* Show Employee Details */}
            
        </div>
    )
}

export default EmployeeDetails;