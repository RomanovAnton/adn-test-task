import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as CloseIcon } from "../../assets/close-icon.svg";
import { toggleHiddenMenu } from "../../redux/filters/filterSlice";
import { Accordion } from "../Accordion/Accordion";
import { CustomizedSlider } from "../CustomizedSlider/CustomizedSlider";
import { sortTypes, genres } from "../../utils/constants";
import "./FilterBar.scss";

export const FilterBar = () => {
  const { hiddenMenuIsActive } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleHiddenMenu());
  };

  return (
    <div
      className={`filter-bar ${hiddenMenuIsActive ? "filter-bar_hidden" : ""}`}
    >
      {hiddenMenuIsActive && (
        <div className="filter-bar__header" onClick={handleClick}>
          <CloseIcon />
          <span>Скрыть фильтр</span>
        </div>
      )}
      <Accordion type="str-items" data={sortTypes} />
      <CustomizedSlider />
      <Accordion type="checkbox-items" data={genres} statTitle="Жанр" />
      <Accordion type="checkbox-items" data={genres} statTitle="Платформы" />
      <Accordion type="checkbox-items" data={genres} statTitle="Активация" />
      <Accordion type="checkbox-items" data={genres} statTitle="Разработчик" />
      <Accordion type="checkbox-items" data={genres} statTitle="Издатель" />
      <Accordion type="checkbox-items" data={genres} statTitle="Особенности" />
      <Accordion type="checkbox-items" data={genres} statTitle="Тип товара" />
      {hiddenMenuIsActive && (
        <>
          <button className="filter-bar__btn">ПРИМЕНИТЬ</button>
          <p className="filter-bar__reset">Сбросить фильтр</p>
        </>
      )}
    </div>
  );
};
