import React from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Layout from "./Layout";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/vendor/:id/menu" element={<Menu />} />
          <Route path="/vendor/:id/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
