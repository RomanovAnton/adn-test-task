import React from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "../Skeleton/Skeleton";
import { CardItem } from "../CardItem/CardItem";
import { Pagination } from "../Pagination/Pagination";
import { Description } from "../Description/Description";
import "./CardsList.scss";
import { NotFound } from "../NotFound/NotFound";
const skeletonArr = [...Array(8).keys()];

export const CardsList = () => {
  const { cards, status } = useSelector((state) => state.cards);

  return (
    <div className="cards">
      <ul className="cards__list">
        {status === "loading" &&
          skeletonArr.map((item, idx) => <Skeleton key={idx} />)}
        {status === "resolved" &&
          cards.map((card) => <CardItem {...card} key={card.id} />)}
      </ul>

      {cards.length === 0 && <NotFound />}
      {cards.length > 0 && <Pagination />}

      <Description />
    </div>
  );
};
