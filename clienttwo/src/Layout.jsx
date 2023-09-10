import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  if (path === "/auth/login") {
    return <Outlet />;
  } else if (path === "/auth/register") {
    return <Outlet />;
  } else
    return (
      <div>
        <Sidebar />
        {/* <div>layout</div> */}
        <Outlet />
      </div>
    );
};

export default Layout;
