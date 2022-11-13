import React from "react";
import { Accordion } from "../Accordion/Accordion";
import { CustomizedSlider } from "../CustomizedSlider/CustomizedSlider";
import { sortTypes, genres } from "../../utils/constants";
import "./FilterBar.scss";

export const FilterBar = () => {
  return (
    <div className="filter-bar">
      <Accordion type="str-items" data={sortTypes} />
      <CustomizedSlider />
      <Accordion type="checkbox-items" data={genres} statTitle="Жанр" />
      <Accordion type="checkbox-items" data={genres} statTitle="Платформы" />
      <Accordion type="checkbox-items" data={genres} statTitle="Активация" />
      <Accordion type="checkbox-items" data={genres} statTitle="Разработчик" />
      <Accordion type="checkbox-items" data={genres} statTitle="Издатель" />
      <Accordion type="checkbox-items" data={genres} statTitle="Особенности" />
      <Accordion type="checkbox-items" data={genres} statTitle="Тип товара" />
    </div>
  );
};
