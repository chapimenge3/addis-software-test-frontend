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
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/create" exact>
            <CreateEmployee></CreateEmployee>
          </Route>
          <Route path="/:id" exact>
            <EmployeeDetails></EmployeeDetails>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
