import React from "react";

import { useSelector } from "react-redux";
import CartItem from "../../components/Cart.js/CartItem";
import Button from "../../UI/Button";

import classes from "./CheckoutDetails.module.css";

const CheckoutDetails = (Props) => {
  const cartProduct = useSelector((state) => state.cartReducer.items);

  const totalPrice = useSelector((state) => state.cartReducer.totalAmount);
  const shippingPrice = 50;
  const vatPrice = 600;
  const grandTotal = totalPrice + shippingPrice + vatPrice;

  return (
    <>
      <section className={classes.card}>
        {" "}
        {cartProduct.map((item) => (
          <CartItem data={item} checkout={true} />
        ))}
        <div className={classes.flex}>
          <p>TOTAL</p>
          <p>$ {totalPrice}</p>
        </div>
        <div className={classes.flex}>
          <p>SHIPPING</p>
          <p>$ {shippingPrice}</p>
        </div>
        <div className={classes.flex}>
          <p>VAT</p>
          <p>$ {vatPrice}</p>
        </div>
        <div className={classes.flex}>
          {" "}
          <p>GRAND TOTAL</p>
          <p style={{ color: "#d87d4a" }}>$ {grandTotal}</p>
        </div>
        <Button
          type="submit"
          onClick={Props.onSubmit}
          className={classes["btn-continue"]}
        >
          CONTINUE
        </Button>
      </section>
    </>
  );
};

export default CheckoutDetails;
