import "./App.css";
import Form from "./Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function App() {
  const [car, setCar] = useState({
    brand: "Porsche",
    model: "Macan",
    year: 2023,
    color: "blue",
  });
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "red" };
    });
  };
  const updateYear = () => {
    setCar((previousState) => {
      return { ...previousState };
    });
  };

  const [number, setNumber] = useState(1);
  const increaseNumber = () => {
    if (number == 8) {
      alert("Value max is 8");
      return;
    }
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    if (number == 0) {
      alert("Value min is 0");
      return;
    }
    setNumber(number - 1);
  };
  return (
    <div className="App">
      {/* <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
      type='button'
      onClick={updateColor}>
        Red
      </button> */}

      <Table striped bordered hover border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Increase</th>
            <th>Decrease</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Iphone 14</td>
            <td>{number}</td>
            <td>
              <Button variant="primary" onClick={increaseNumber}>
                +
              </Button>{" "}
            </td>
            <td>
              <Button variant="danger" onClick={decreaseNumber}>
                -
              </Button>{" "}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Samsung 22</td>
            <td>{number}</td>
            <td>
              <Button variant="primary" onClick={increaseNumber}>
                +
              </Button>{" "}
            </td>
            <td>
              <Button variant="danger" onClick={decreaseNumber}>
                -
              </Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>

      <Form />
    </div>
  );
}

export default App;
