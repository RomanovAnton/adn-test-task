import React from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../../redux/filterSlice";
import "./StringList.scss";

export const StringList = ({ data, toggleActive }) => {
  const dispatch = useDispatch();

  const handleItemClick = (evt) => {
    dispatch(setSort(evt.currentTarget.textContent));
    toggleActive();
  };

  return (
    <>
      {data.map((item, idx) => (
        <li className="list-item" onClick={handleItemClick} key={idx}>
          {item}
        </li>
      ))}
    </>
  );
};
