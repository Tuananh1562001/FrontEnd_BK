import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import ProductAdd from "./components/Product/ProductAdd";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/add" element={<ProductAdd />} />
    </Routes>
  );
}

export default App;
