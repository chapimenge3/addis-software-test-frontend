import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { StyledButton } from "./components/button.style";
import { StyledLink } from "./components/links.style";
import { Employee } from "./redux/api";

function CreateEmployee() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newEmployee, setNewEmployee] = useState<Employee>({
    name: "",
    salary: 0,
    gender: "male",
    birthdate: new Date(),
    id: null,
  });

  // Change the input value for form input
  const onChange = (e: any) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
    console.log("onChange", e.target.value);
    console.log("newEmployee", newEmployee);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    // construct employee object
    const employee: Employee = {
      name: newEmployee.name,
      salary: newEmployee.salary,
      gender: newEmployee.gender,
      birthdate: newEmployee.birthdate,
      id: null,
    };
    console.log("onSubmit", employee);
    dispatch({
      type: "emplyeeDetails/createEmployeeStart",
      payload: { employee },
    });
    history.push("/");
  };

  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      <h1>Create Employee</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={newEmployee.name}
          placeholder="Name"
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <br />
        <input
          type="number"
          name="salary"
          value={newEmployee.salary}
          placeholder="Salary"
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <br />
        <select
          name="gender"
          value={newEmployee.gender}
          onChange={(e) => onChange(e)}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <br />
        <input
          type="date"
          name="birthdate"
          value={newEmployee.birthdate.toString()}
          placeholder="Birthdate"
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <br />
        <StyledButton type="submit" primary>
          Create
        </StyledButton>
      </form>
    </div>
  );
}

export default CreateEmployee;
