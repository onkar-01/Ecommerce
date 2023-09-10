import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VendorCard = ({ vendor }) => {
  const { avatar, name, _id } = vendor;
  const url = avatar.url;

  return (
    <div className=" p-4 md:w-[95%] mx-auto">
      <ul className="  m-auto w-[100%] ">
        <li>
          <Link
            to={`/vendor/${_id}/menu`}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-200 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <img
              src={url}
              alt="vendor-profile"
              className="w-10 h-10 rounded-lg"
            />
            <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Vendors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/v1/getvendors").then((response) => {
      setData(response.data.users);
    });
  }, []);
  console.log(data);
  return (
    <div>
      {" "}
      {data.map((vendor) => (
        <VendorCard vendor={vendor} key={vendor._id} />
      ))}
    </div>
  );
};

export default Vendors;
