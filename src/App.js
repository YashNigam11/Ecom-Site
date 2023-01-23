import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Product from "./Product";
import Prod from "./Prod";
import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";
import Cart from "./Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product" element={<Product/> }/>
        <Route exact path="/cart" element={<Cart/> }/>
        <Route exact path="/products/:id" element={<Prod/>} />
      </Routes>
    </>
  );
}

export default App;
