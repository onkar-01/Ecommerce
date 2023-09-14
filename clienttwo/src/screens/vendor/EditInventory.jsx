import React from "react";
import InventoryEditForm from "../../components/vendor/InventoryEditForm";
import { useParams } from "react-router-dom";

const EditInventory = ({}) => {
  const params = useParams();

  return (
    <div className="mt-20">
      <InventoryEditForm id={params.id} />
    </div>
  );
};

export default EditInventory;
