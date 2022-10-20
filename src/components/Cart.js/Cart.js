import React from "react";
import classes from "./Cart.module.css";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal/Modal";

const Cart = () => {
  return (
    <>
      <Modal>
        <section className={classes["cart-container"]}>
          <div className={classes["cart-header"]}>
            <h3>
              Cart <span>(3)</span>
            </h3>{" "}
            <Button className={classes.button}>Remove all</Button>
          </div>

          <CartItem />
          <CartItem />

          <div className={classes["cart-footer"]}>
            <h3>Total</h3>
            <p>$7400</p>
          </div>

          <Button>CHECKOUT</Button>
        </section>
      </Modal>
    </>
  );
};

export default Cart;
