import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Arrow } from "../../assets/accordion-arrow-icon.svg";
import { StringList } from "./StringList/StringList";
import { CheckBoxList } from "./CheckBoxList/CheckBoxList";
import "./Accordion.scss";

export const Accordion = ({ type, data, statTitle }) => {
  const [isActive, setIsActive] = useState(false);
  const varTitle = useSelector((state) => state.filter.sort);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={toggleActive}>
        <p className="accordion__title">
          {type === "str-items" ? varTitle : statTitle}
        </p>
        <Arrow
          className={
            isActive
              ? "accordion__arrow accordion__arrow_active"
              : "accordion__arrow"
          }
        />
      </div>
      <ul
        className={
          isActive
            ? "accordion__content accordion__content_active"
            : "accordion__content"
        }
      >
        {type === "checkbox-items" && <CheckBoxList data={data} />}

        {type === "str-items" && (
          <StringList data={data} toggleActive={toggleActive} />
        )}
      </ul>
    </div>
  );
};
