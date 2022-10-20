import React, { Fragment } from "react";

import Classes from "./Nav.module.css";

import Logo from "../../Assets/icons/logo.svg";
import CartIcon from "../../Assets/icons/cart.svg";
import { Link } from "react-router-dom";
import Cart from "../Cart.js/Cart";

const Nav = () => {
  const showCartHandler = () => {
    console.log("working");
    return <Cart />;
  };
  return (
    <Fragment>
      <nav className={Classes.nav}>
        <section className={Classes["nav-center"]}>
          <img src={Logo} alt="logo" />

          <div className={Classes.nav_link}>
            <Link className={Classes.link} to="/">
              Home
            </Link>
            <Link className={Classes.link} to="/speaker">
              Speaker
            </Link>
            <Link className={Classes.link} to="/headphone">
              HeadPhone
            </Link>
            <Link className={Classes.link} to="/earphone">
              Earphone
            </Link>
          </div>

          <button onClick={showCartHandler}>
            <img src={CartIcon} alt="cart" />
          </button>
          <Cart />
        </section>
      </nav>
    </Fragment>
  );
};

export default Nav;
