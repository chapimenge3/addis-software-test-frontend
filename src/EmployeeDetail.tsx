import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { StyledButton } from "./components/button.style";
import { StyledLink } from "./components/links.style";
import { RootState } from "./redux/store";
import { useHistory } from "react-router-dom";
import { Employee } from "./redux/api";

function EmployeeDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<any>();
  const { loading, employee, error } = useSelector(
    (state: RootState) => state.employeeDetails
  );
  // edit state
  const [edit, setEdit] = useState(false);
  // edit state
  const [employeeToEdit, setEmployeeToEdit] = useState({
    id: id,
    name: employee?.name,
    salary: employee?.salary,
    gender: employee?.gender,
    birthdate: employee?.birthdate,
  });

  // Intializing the Employee state(called only once)
  useEffect(() => {
    console.log("EmployeeDetails useEffect ran");
    // dispath the employeeDetails action with employee id as parameter
    dispatch({
      type: "emplyeeDetails/getEmployeeDetailsStart",
      payload: { id },
    });
  }, []);

  // change setEmployeeToEdit whenver the employee changes
  useEffect(() => {
    console.log("Changes", employee?.birthdate);
    setEmployeeToEdit({
      id: employee?.id,
      name: employee?.name,
      salary: employee?.salary,
      gender: employee?.gender,
      birthdate: employee?.birthdate
    });
  }, [employee]);

  // Handler for Deleting Employee
  const handleDelete = () => {
    console.log("delete employee", id);
    dispatch({ type: "emplyeeDetails/deleteEmployeeStart", payload: { id } });
    // alert delete is successful and redirect to home page
    history.push("/addis-software-test-frontend");
  };

  // Change the edit state whenever the edit button or cancel button clicked 
  const handleEditButton = () => {
    console.log("Edit Button", typeof employeeToEdit.birthdate, employeeToEdit.birthdate);
    setEdit(!edit);
  };

  // Change the input value for form input
  const onChange = (e: any) => {
    console.log("onChange", e.target.value);
    if(e.target.name === "birthdate"){
      setEmployeeToEdit({
        ...employeeToEdit,
        [e.target.name]: new Date(e.target.value)
      });
    }
    else{
      setEmployeeToEdit({
        ...employeeToEdit,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Handler for editing employee
  const onSubmit = () => {
    // construct new Employee 
    const emp = {
      ...employeeToEdit
    } as Employee
    // change salary to number
    emp.salary = Number(emp.salary);
    dispatch({ type: "emplyeeDetails/updateEmployeeStart", payload: { id: id, employee: emp } });
    setEdit(false);
  }

  return (
    <div>
      <StyledLink to="/addis-software-test-frontend">Home</StyledLink>
      <h1>Employee details for {employee && employee.name}</h1>
      {/* Show Employee Details */}
      {loading ? "Loading..." : error ? error : ""}
      {!loading && error ? error : ""}
      {!loading && employee ? (
        <div>
          {!edit ? (
            <div>
              <p>ID: {employee.id}</p>
              <p>Name: {employee.name}</p>
              <p>Salary: {employee.salary}</p>
              <p>Gender: {employee.gender}</p>
              {/* Human readable date time */}
              <p>Birthdate: {employee.birthdate.toLocaleString() }</p>
              {/* Date time html tag */}
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={employeeToEdit.name}
                onChange={(e) => onChange(e)}
                name="name"
                placeholder="Name"
              />
              <br />
              <br />
              <input
                type="number"
                value={employeeToEdit.salary}
                onChange={(e) => onChange(e)}
                name="salary"
                placeholder="Salary"
              />
              <br />
              <br />
              <select
                value={employeeToEdit.gender}
                name="gender"
                onChange={(e) => onChange(e)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <br />
              <br />
              {/* Show Date input */}
              <input
                type="date"
                // assign a intial value 
                value={employeeToEdit.birthdate && employeeToEdit.birthdate.toISOString().split("T")[0]}
                onChange={(e) => onChange(e)}
                name="birthdate"
                placeholder="Birthdate"
              />
              <br />
              <br />
              <StyledButton type="submit" primary>Update</StyledButton>
            </form>
          )}
          {/* Show Edit and Delete Button */}
          <StyledButton primary onClick={() => handleEditButton()}>
            {
              !edit ? 'Edit' : 'Cancel' 
            }
          </StyledButton>
          <StyledButton onClick={() => handleDelete()}>Delete</StyledButton>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EmployeeDetails;
