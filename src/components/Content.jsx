import React from "react";
import List from "./List";

const Content = () => {
  const products = [
    {
      id: 1,
      name: "phone",
      price: 2000,
      model: 13,
      brand: "apple",
    },
  ];
  return (
    <>
      <List
        id={products.id}
        name={products.name}
        price={products.price}
        model={products.model}
        brand={products.brand}
      />
    </>
  );
};

export default Content;
