import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./Search.scss";

export const Search = () => {
  const [value, setValue] = useState("");

  return (
    <div className="search">
      <button className="search__btn">Каталог</button>
      <input
        type="text"
        className="search__input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon className="search__icon" />
    </div>
  );
};
