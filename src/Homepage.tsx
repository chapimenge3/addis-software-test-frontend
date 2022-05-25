import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import {
  EmployeeHeader,
  EmployeeRow,
  ExployeeData,
  ExployeesTable,
} from "./components/table.style";
import { Redirect, Link } from "react-router-dom";
import { StyledLink } from "./components/links.style";
import { StyledButton } from "./components/button.style";

function Homepage() {
  const dispatch = useDispatch();
  const { loading, employees, error } = useSelector(
    (state: RootState) => state.employee
  );

  useEffect(() => {
    console.log("useEffect ran", employees);
    dispatch({ type: "employee/getEmployeesStart" });
  }, []);

  const handleOnClick = (id: any) => {
    return (
      <Redirect
        to={{
          pathname: "/" + id,
        }}
      />
    );
  };

  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <p>Welcome to Addis Software</p>
        <br />
        <StyledLink to={`./create/`}>
          Add Employee
        </StyledLink>
        {/* Show employee details for all of the employees */}
        {loading ? "Loading..." : error ? error : ""}
        {!loading && employees ? (
          <div>
            <ExployeesTable>
              <thead>
                <EmployeeRow>
                  <EmployeeHeader>ID</EmployeeHeader>
                  <EmployeeHeader>Name</EmployeeHeader>
                  <EmployeeHeader>Salary</EmployeeHeader>
                  <EmployeeHeader>Gender</EmployeeHeader>
                  <EmployeeHeader>Birth Date</EmployeeHeader>
                  <EmployeeHeader>Action</EmployeeHeader>
                </EmployeeRow>
              </thead>
              <tbody>
                {employees.map((emplyee) => (
                  <EmployeeRow key={emplyee.id}>
                    <ExployeeData>{emplyee.id}</ExployeeData>
                    <ExployeeData>{emplyee.name}</ExployeeData>
                    <ExployeeData>{emplyee.salary}</ExployeeData>
                    <ExployeeData>{emplyee.gender}</ExployeeData>
                    <ExployeeData>{emplyee.birthdate.toString()}</ExployeeData>
                    <ExployeeData>
                      <StyledLink to={`./${emplyee.id}`}>Details</StyledLink>
                    </ExployeeData>
                  </EmployeeRow>
                ))}
              </tbody>
            </ExployeesTable>
            {/* TODO Pagination */}
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Homepage;
