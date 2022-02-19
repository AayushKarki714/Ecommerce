import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Slider from "./components/Slider";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Products />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
