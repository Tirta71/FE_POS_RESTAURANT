import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Pesanan from "./pages/Pesanan";
import PesananMenu from "./pages/PesananMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop-cart" element={<Checkout />} />
        <Route path="/checkout" element={<Pesanan />} />
        <Route path="/menu-pesanan" element={<PesananMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
