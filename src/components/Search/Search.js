import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { useDebounce } from "../../hooks/useDebounce";
import { setSearchValue } from "../../redux/filters/filterSlice";
import "./Search.scss";

export const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(value, 350);

  useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [debouncedValue]);

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
