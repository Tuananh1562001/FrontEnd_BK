import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button"

const Product = () => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    async function getListProduct() {
      let data = await axios
        .get("http://localhost:8080/product")
        .then((res) => {
          setListProduct(res.data);
        })
        .catch((err) => {
          console.log("error");
          console.log(err);
        });
    }
    getListProduct()
  }, [listProduct]);

  const deleteData = (id) => {
    axios.delete(`http://localhost:8080/product/${id}`)
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <Table className="table table-success table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Country</th>
          <th>Producer</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {listProduct.map((obj, i) => {
          return (
            <tr key={i}>
              <td>{obj.id}</td>
              <td>{obj.productName}</td>
              <td>{obj.price}</td>
              <td>{obj.quantity}</td>
              <td>{obj.country}</td>
              <td>{obj.producer}</td>
              <td>
                <NavLink to={'/add'}>
                    <button>Add</button>
                </NavLink>
                <button className="btn btn-danger" onClick={() => deleteData(obj.id)} >Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Product;
