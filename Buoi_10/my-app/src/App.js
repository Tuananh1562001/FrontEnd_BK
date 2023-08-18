import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <div>
      <h3>Trang Chủ</h3>
      <BrowserRouter>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>

        <Switch>
          <Route path="/home">Trang Chủ</Route>
          <Route path="/about">Về chúng tôi</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
