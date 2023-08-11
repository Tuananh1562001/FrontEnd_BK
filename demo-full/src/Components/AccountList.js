import { useEffect, useState } from "react";
import axios from "axios";

const AccountList = () => {
  const [listAccount, setListAccount] = useState([]);

  useEffect(() => {
    async function getListAccount() {
      let res2 = await axios.get("http://localhost:8080/account").then((res) => {
        setListAccount(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log("error")
        console.log(err)
      })
    }
    getListAccount();
  }, []);

  return (
    <div className="container">
      <h4>List Account</h4>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Username</th>
            <th scope="col">Full Name</th>
            <th scope="col">Age</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;
