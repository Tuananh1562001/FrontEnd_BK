import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Form() {
  const arrJob = [
    { jobName: "IT", salary: 1000 },
    { jobName: "sale", salary: 2000 },
    { jobName: "maketing", salary: 3000 },
  ];
  const [arrJobShow, setArrJobShow] = useState(arrJob);

  const [newJobName, setNewJobName] = useState('')
  const changeJobName = (e) => {
    setNewJobName(e.target.value) 
  };

  const add = () => {
    setArrJobShow([...arrJobShow, { jobName: newJobName, salary: 1500 }]);
  };
  return (
    <div>
      <input type="text" onChange={changeJobName} />
      <button onClick={add}>Add</button>
      <Table striped bordered hover border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Job Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {arrJobShow.map((obj, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{obj.jobName}</td>
                <td>{obj.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Form;
