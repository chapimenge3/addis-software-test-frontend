import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import {
  EmployeeHeader,
  EmployeeRow,
  ExployeeData,
  ExployeesTable,
} from "./components/table.style";
import { StyledLink } from "./components/links.style";
import { StyledButton } from "./components/button.style";

function Homepage() {
  const dispatch = useDispatch();
  const {
    loading,
    employees,
    error,
    page,
    offset,
    limit,
    hasPrevPage,
    hasNextPage,
    sort
  } = useSelector((state: RootState) => state.employee);

  useEffect(() => {
    dispatch({
      type: "employee/getEmployeesStart",
      payload: { params: { page, limit, offset, sort } },
    });
  }, []);

  const handlePrevPage = () => {
    dispatch({
      type: "employee/getEmployeesStart",
      payload: { params: { page: page ? page - 1 : 1, limit, offset, sort } },
    });
  };

  const handleNextPage = () => {
    dispatch({
      type: "employee/getEmployeesStart",
      payload: { params: { page: page ? page + 1 : 1, limit, offset, sort } },
    });
  };

  const handleSort = (event:any) => {
    dispatch({
      type: "employee/getEmployeesStart",
      payload: { params: { page: page, limit, offset, sort: event.target.value } },
    });
  };

  const handleSearch = (event:any) => {
    dispatch({
      type: "employee/getEmployeeSearchStart",
      payload: { params: { page: page, limit, offset, sort, name: event.target.value } },
    });
  };

  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <p>Welcome to Addis Software</p>
        <br />
        <StyledLink to={`/addis-software-test-frontend/create/`}>
          Add Employee
        </StyledLink>
        {/* Show employee details for all of the employees */}
        {loading ? "Loading..." : error ? error : ""}
        {!loading && employees ? (
          <div>
            {/* Show dropdown for sort */}
            <div>
              Sorty By
              <select onChange={handleSort} value={`${sort || 'name'}`}>
                <option value="name">Name</option>
                <option value="gender">Gender</option>
              </select>
            </div>
            <br />
            {/* search input */}
            <div>
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
              />
            </div>
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
                      <StyledLink
                        to={`/addis-software-test-frontend/${emplyee.id}`}
                      >
                        Details
                      </StyledLink>
                    </ExployeeData>
                  </EmployeeRow>
                ))}
              </tbody>
            </ExployeesTable>
            {/* TODO Pagination */}

            <div className="Homepage-pagination">
              {hasPrevPage && (
                <StyledButton onClick={handlePrevPage}>Prev</StyledButton>
              )}
              {hasNextPage && (
                <StyledButton onClick={handleNextPage}>Next</StyledButton>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Homepage;
