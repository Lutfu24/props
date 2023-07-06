import React from "react";

const Card = ({ id, name, price, model, brand }) => {
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{price}</li>
        <li>{model}</li>
        <li>{brand}</li>
      </ul>
    </div>
  );
};

export default Card;
