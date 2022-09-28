import React from "react";

import Classes from "./Nav.module.css";

import Logo from "../../Assets/icons/logo.svg";
import Cart from "../../Assets/icons/cart.svg";

const Nav = () => {
  return (
    <nav className={Classes.nav}>
      <img src={Logo} alt="logo" />

      <div className={Classes.nav_link}>
        <p>Home</p>
        <p>Speaker</p>
        <p>HeadPhone</p>
        <p>Earphone</p>
      </div>

      <img src={Cart} alt="cart" />
    </nav>
  );
};

export default Nav;
