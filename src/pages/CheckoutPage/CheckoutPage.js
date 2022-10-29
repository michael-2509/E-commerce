import React from "react";

import Nav from "../../components/Nav/Nav";
import CheckoutForm from "./CheckoutForm";

import classes from "./Checkout.module.css";

const CheckoutPage = () => {
  return (
    <>
      <section className={classes.checkout}>
        {" "}
        <Nav />
        <h1>Checkout Page</h1>
        <CheckoutForm />
      </section>
    </>
  );
};

export default CheckoutPage;
