import React from "react";
import Image from "next/image";
import Img from "../images/cat.jpeg";

const CategoryCard = () => {
  return (
    <catcard>
      <Image src={Img} width={150} height={180}></Image>
      <h3>category Name</h3>
    </catcard>
  );
};

export default CategoryCard;
