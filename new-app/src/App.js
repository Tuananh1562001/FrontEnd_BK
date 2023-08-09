import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(
    () =>
       {
        async function getListUser() {
          let res = await axios.get("http://localhost:8080/account");
          console.log("res", res);
          setData(res.data);
        }
        getListUser();
        console.log("data", data);
      }
  );
  return (
    <div className="App">
      <h3>Axios</h3>
      <button>Add</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, i) => {
            return (
              <tr key={i}>
                <td>{value.id}</td>
                <td>{value.userName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
