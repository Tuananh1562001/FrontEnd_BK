import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";


import AccountList from "./Components/AccountList";
import DepartmentList from "./Components/DepartmentList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav flex-column">
          <NavLink to="/department">
          <button type="button" class="btn btn-dark">Department</button>
          </NavLink>
          <NavLink to="/account">
          <button type="button" class="btn btn-success mt-2 ">Account</button>
          </NavLink>
        </nav>
        <Switch>
          <Route path="/department">
            <DepartmentList />
          </Route>
          <Route path="/account">
            <AccountList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
