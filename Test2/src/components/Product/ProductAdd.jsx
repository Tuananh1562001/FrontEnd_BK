import axios from "axios";
import { useState } from "react";


const ProductAdd = () => {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [producer, setProducer] = useState("");


 
  const obj = {
    productName: productName,
    quantity: quantity,
    price: price,
    country: country,
    producer: producer,
  };

  const handleSubmit = async () => {
    await axios.put('http://localhost:8080/product', obj)
    .then((res) => {
      console.log(res)
    });
  };
  return (
    <div>
      <form action="" className="container">
        <div className="mt-3 mb-3">
          <label htmlFor="productName">User Name</label>
          <input type="text" id="productName" className="form-control" value={productName} onChange={(e) => {setProductName(e.target.value)}} />
          <br />
          <label htmlFor="quantity">Quantity</label>
          <input type="text" id="quantity" className="form-control" value={quantity} onChange={(e) => {setQuantity(e.target.value)}} />
          <br />
          <label htmlFor="price">price</label>
          <input type="number" id="price" className="form-control" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
          <br />
          <label htmlFor="country">Country</label>
          <input type="number" id="country" className="form-control" value={country} onChange={(e) => {setCountry(e.target.value)}}/>
          <br />
          <label htmlFor="producer">Producer</label>
          <input
            type="text"
            id="producer"
            className="form-control"
            value={producer}
            onChange={(e) => {setProducer(e.target.value)}}
          />
          <br />
          <button className="btn btn-danger btn-m" onClick={handleSubmit}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
