import React from "react";

import Classes from "./Nav.module.css";

import Logo from "../../Assets/icons/logo.svg";
import Cart from "../../Assets/icons/cart.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={Classes.nav}>
      <section className={Classes["nav-center"]}>
        <img src={Logo} alt="logo" />

        <div className={Classes.nav_link}>
          <Link className={Classes.link} to="#">
            Home
          </Link>
          <Link className={Classes.link} to="#">
            Speaker
          </Link>
          <Link className={Classes.link} to="#">
            HeadPhone
          </Link>
          <Link className={Classes.link} to="#">
            Earphone
          </Link>
        </div>

        <img src={Cart} alt="cart" />
      </section>
    </nav>
  );
};

export default Nav;
