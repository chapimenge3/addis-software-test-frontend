import "./App.css";
import Homepage from "./Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetail";
import CreateEmployee from "./CreateEmployee";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/addis-software-test-frontend/create" exact>
            <CreateEmployee></CreateEmployee>
          </Route>
          <Route path="/addis-software-test-frontend/:id" exact>
            <EmployeeDetails></EmployeeDetails>
          </Route>
          <Route exact path="/addis-software-test-frontend/">
            <Homepage></Homepage>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
