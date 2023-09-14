import React from "react";
import InventoryItems from "../../components/vendor/Inventory";
import InventoryAddButton from "../../components/vendor/InventoryAddButton";
import { Toaster } from "react-hot-toast";

const Inventory = () => {
  return (
    <>
      <div className="mt-20">
        <InventoryItems />
        <InventoryAddButton icon={"AiOutlinePlus"} />
      </div>
      <Toaster />
    </>
  );
};

export default Inventory;
