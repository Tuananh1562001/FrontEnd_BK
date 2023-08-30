import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import Button from "react-bootstrap/Button";

const AccountList = () => {
  const [listAccount, setListAccount] = useState([]);

  useEffect(() => {
    async function getListAccount() {
      let res2 = await axios
        .get("http://localhost:8080/account")
        .then((res) => {
          setListAccount(res.data);
        })
        .catch((err) => {
          console.log("error");
          console.log(err);
        });
    }
    getListAccount();
  }, [listAccount]);

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:8080/account/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h4>List Account</h4>
      <NavLink to="account/add" exact>
        <button className="btn btn-success btn-sm"> Add </button>
      </NavLink>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Full Name</th>
            <th scope="col">Age</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Department Name</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {listAccount.map((obj, i) => {
            return (
              <tr key={i}>
                <th scope="row">{obj.id}</th>
                <td>{obj.userName}</td>
                <td>{obj.fullName}</td>
                <td>{obj.age}</td>
                <td>{obj.phoneNumber}</td>
                <td>{obj.address} </td>
                <td>{obj.departmentName} </td>
                <td>
                  <button
                    onClick={() => deleteData(obj.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;
