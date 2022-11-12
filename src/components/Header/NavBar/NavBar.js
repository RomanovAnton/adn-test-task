import React from "react";
import { ReactComponent as ProfileIcon } from "../../../assets/profile-icon.svg";
import { ReactComponent as LikeIcon } from "../../../assets/like-icon.svg";
import { ReactComponent as CartIcon } from "../../../assets/cart-icon.svg";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div className="navbar">
      <ProfileIcon className="navbar__icon" />
      <LikeIcon className="navbar__icon" />
      <CartIcon className="navbar__icon" />
    </div>
  );
};
