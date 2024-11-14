import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <Header />
      <Carousel />
      <Routes>
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
