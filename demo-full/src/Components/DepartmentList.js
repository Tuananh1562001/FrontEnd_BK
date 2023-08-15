import { useState, useEffect } from "react";
import axios from "axios";

const DepartmentList = () => {
  const [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    async function getListDepartment() {
      let data = await axios
        .get("http://localhost:8080/department")
        .then((res) => {
          setDepartmentList(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log("error");
          console.log(err);
        });
    }
    getListDepartment();
  }, []);

  return (
    <div className="container">
      <h4>List Department</h4>
      <table className="table table-dark table-hover" >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Department Name</th>
          </tr>
        </thead>
        <tbody>
          {departmentList.map((obj, i) => {
            return (
              <tr key={i}>
                <th scope="row" >{obj.id}</th>
                <td>{obj.departmentName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
