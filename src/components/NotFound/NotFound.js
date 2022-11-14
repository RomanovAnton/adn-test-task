import React from "react";
import { ReactComponent as NotFoundIcon } from "../../assets/not-found-icon.svg";
import "./NotFound.scss";

export const NotFound = () => {
  return (
    <div className="not-found-block">
      <NotFoundIcon />
      <p className="not-found-block__text">Нет результатов</p>
      <p className="not-found-block__text">
        К сожалению, по вашему запросу нет результатов.
      </p>
    </div>
  );
};
