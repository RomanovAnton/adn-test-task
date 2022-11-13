import React from "react";
import "./CheckBoxList.scss";

export const CheckBoxList = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => (
        <li className="list-item" key={idx}>
          <label className="checkbox">
            <input type="checkbox" className="checkbox__real" />
            <div className="checkbox__custom"></div>
            <p className="checkbox__text">{item}</p>
          </label>
        </li>
      ))}
    </>
  );
};
