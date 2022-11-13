import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/search-icon.svg";
import "./SmallSearch.scss";

export const SmallSearch = () => {
  const [value, setValue] = useState("");

  return (
    <div className="small-search">
      <input
        type="text"
        className="small-search__input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon className="small-search__icon" />
    </div>
  );
};
