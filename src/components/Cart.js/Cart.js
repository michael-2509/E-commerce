import React from "react";
import classes from "./Cart.module.css";
import Button from "../../UI/Button";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <>
      <section className={classes["cart-container"]}>
        <div className={classes["cart-header"]}>
          <h3>
            Cart <span>(3)</span>
          </h3>{" "}
          <Button className={classes.button}>Remove all</Button>
        </div>

        <CartItem />
        <CartItem />

        <div>
          <h2>Total</h2>
          <p>$7400</p>
        </div>

        <Button>CHECKOUT</Button>
      </section>
    </>
  );
};

export default Cart;
