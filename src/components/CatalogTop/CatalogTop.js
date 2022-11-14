import React from "react";
import { useDispatch } from "react-redux";
import { toggleHiddenMenu } from "../../redux/filters/filterSlice";
import "./CatalogTop.scss";

export const CatalogTop = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleHiddenMenu());
  };

  return (
    <div className="catalog-top">
      <h1 className="catalog-top__title">
        Каталог
        <span className="catalog-top__badge">876</span>
      </h1>
      <button className="catalog-top__btn" onClick={handleClick}>
        ПОКАЗАТЬ ФИЛЬТРЫ
      </button>
    </div>
  );
};
