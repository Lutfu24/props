import React from "react";
import Card from "./Card";

const List = ({ id, name, price, model, brand }) => {
  return (
    <div>
      <ul>
        <li>
          <Card id={id} name={name} price={price} model={model} brand={brand} />
        </li>
      </ul>
    </div>
  );
};

export default List;
