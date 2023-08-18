import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const AccountAdd = () => {

  const [userName, setUserName] = useState("")
  const [fullName, setFullName] = useState("")
  const [age, setAge] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [address, setAddress] = useState("")

  const history = useHistory();

  const handleSubmit = (e) => {
      const obj = {
        userName: userName,
        fullName: fullName,
        age: age,
        phoneNumber: phoneNumber,
        address: address
      }

      axios.post("http://localhost:8080/account", obj)
      .then(res => {
        history.push("/account")
      })
  }
  return (
    <div>
      <form action=""  className="container">
        <div className="mt-3 mb-3">
          <label htmlFor="username">User Name</label>
          <input type="text" id="username" className="form-control" />
          <br/>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="username" className="form-control" />
          <br/>
          <label htmlFor="age">Age</label>
          <input type="number" id="age" className="form-control" />
          <br/>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" id="phoneNumber" className="form-control" />
          <br/>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" className="form-control" value={address} onChange={(e) => {e.v}} />
          <br/>
          <button className="btn btn-danger btn-m" onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default AccountAdd;
