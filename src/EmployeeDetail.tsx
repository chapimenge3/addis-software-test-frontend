import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { StyledButton } from "./components/button.style";
import { StyledLink } from "./components/links.style";
import { RootState } from "./redux/store";
import { useHistory } from "react-router-dom";

function EmployeeDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<any>();
  const { loading, employee, error } = useSelector(
    (state: RootState) => state.employeeDetails
  );

  useEffect(() => {
    console.log("useEffect ran");
    // dispath the employeeDetails action with employee id as parameter
    dispatch({
      type: "emplyeeDetails/getEmployeeDetailsStart",
      payload: { id },
    });
  }, []);

  const handleDelete = () => {
    console.log("delete employee", id);
    dispatch({ type: "emplyeeDetails/deleteEmployeeStart", payload: { id } });
    // alert delete is successful and redirect to home page
    alert("delete is succes");
    history.push("/");
  };

  return (
    <div>
      <StyledLink to="/">Home</StyledLink>
      <h1>Employee details for {employee && employee.name}</h1>
      {/* Show Employee Details */}
      {loading ? "Loading..." : error ? error : ""}
      {!loading && employee ? (
        <div>
          <div>
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Salary: {employee.salary}</p>
            <p>Gender: {employee.gender}</p>
          </div>
          {/* Show Edit and Delete Button */}
          <StyledLink to="/">Edit</StyledLink>
          <StyledButton onClick={() => handleDelete()}>Delete</StyledButton>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EmployeeDetails;
