import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import MenuItems from "../components/MenuItems";
const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);
  useEffect(() => {
    if (!userInfo) {
      navigate("/auth/login");
    }
  }, [navigate, userInfo]);
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <div className="p-4 mt-3 sm:ml-64">
        <MenuItems id={params.id} />
      </div>
    </div>
  );
};

export default Menu;
