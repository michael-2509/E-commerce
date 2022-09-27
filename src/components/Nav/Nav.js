import React from "react";

import Classes from "./Nav.module.css";
import Cart from "../../Assets/icons/cart.svg";

const Nav = () => {
  return (
    <nav className={Classes.nav}>
      <h2>audiophile</h2>

      <div className={Classes.nav}>
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
