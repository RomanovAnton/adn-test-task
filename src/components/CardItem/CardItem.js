import React from "react";
import "./CardItem.scss";

export const CardItem = ({ title, id, price, thumbnail }) => {
  return (
    <li className="card-item" style={{ backgroundImage: `url(${thumbnail})` }}>
      <div className="card-item__info">
        <p className="card-item__title">{title}</p>
        <p className="card-item__price">{price}</p>
      </div>
    </li>
  );
};
