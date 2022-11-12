import React from "react";
import { ReactComponent as SearchIcon } from "../../../assets/search-icon.svg";
import { ReactComponent as CartIcon } from "../../../assets/cart-icon.svg";
import { ReactComponent as BurgerIcon } from "../../../assets/burger-icon.svg";
import "./HiddenNavBar.scss";

export const HiddenNavBar = () => {
  return (
    <div className="hidden-navbar">
      <SearchIcon className="hidden-navbar__icon" />
      <CartIcon className="hidden-navbar__icon" />
      <BurgerIcon className="hidden-navbar__icon" />
    </div>
  );
};
