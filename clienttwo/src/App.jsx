import React from "react";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Layout from "./Layout";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import NoPage from "./screens/NoPage";
import Dashboard from "./screens/vendor/Dashboard";
import Inventory from "./screens/vendor/Inventory";
import EditInventory from "./screens/vendor/EditInventory";
import Profile from "./screens/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/vendor/:id/menu" element={<Menu />} />
          <Route path="/vendor/:id/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory/" element={<Inventory />} />
          <Route path="/inventory/:id/edit" element={<EditInventory />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
