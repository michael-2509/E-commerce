import React, { Fragment, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartIcon from "../../Assets/icons/cart.svg";
import Logo from "../../Assets/icons/logo.svg";
import { uiAction } from "../../Store/ui-slice";
import Cart from "../Cart.js/Cart";
import Navs from "./mobileNav";

import Classes from "./Nav.module.css";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.uiReducer.cartIsVisible);

  //trigger cart modal
  const showCartHandler = () => {
    dispatch(uiAction.toggleCart());
  };

  return (
    <Fragment>
      <nav className={Classes.nav}>
        <section className={Classes["nav-center"]}>
          <div className={Classes["nav-logo"]}>
            <div
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={`${Classes[isNavOpen ? "is-active" : "bars"]} ${
                Classes.bars
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src={Logo} alt="logo" />
          </div>

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

          <section
            className={`${Classes[isNavOpen ? "shownavs" : "mobileNavLinks"]} ${
              Classes.mobileNavLinks
            }`}
          >
            <Navs />
          </section>

          <button onClick={showCartHandler}>
            <img src={CartIcon} alt="cart" />
          </button>
        </section>
      </nav>
      {showCart && <Cart />}
    </Fragment>
  );
};

export default Nav;
