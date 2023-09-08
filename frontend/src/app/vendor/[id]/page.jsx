import Menu from "@/app/screens/Menu";
import React from "react";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <Menu id={id} />
    </div>
  );
};

export default page;
