import React from "react";
import { Search } from "../Search/Search";
import { NavBar } from "./NavBar/NavBar";
import { HiddenNavBar } from "./HiddenNavBar/HiddenNavBar";
import { ReactComponent as Logo } from "../../assets/main-logo.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <Search />
      <NavBar className="header__navbar" />
      <HiddenNavBar className="header__navbar_hidden" />
    </header>
  );
};
