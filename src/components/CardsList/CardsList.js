import React from "react";
import { useSelector } from "react-redux";
import { CardItem } from "../CardItem/CardItem";
import { Pagination } from "../Pagination/Pagination";
import "./CardsList.scss";

export const CardsList = () => {
  const { cards } = useSelector((state) => state.cards);

  return (
    <div className="cards">
      <ul className="cards__list">
        {cards.map((card) => (
          <CardItem {...card} key={card.id} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
};
