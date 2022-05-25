import "./App.css";
import Homepage from "./Homepage";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import EmployeeDetails from './EmployeeDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/employee" exact>
          <EmployeeDetails></EmployeeDetails>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
