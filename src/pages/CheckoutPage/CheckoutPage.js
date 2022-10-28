import React from "react";
import Nav from "../../components/Nav/Nav";
import CheckoutForm from "./CheckoutForm";

const CheckoutPage = () => {
  return (
    <>
      <section>
        {" "}
        <Nav />
        <h1>Checkout Page</h1>
        <CheckoutForm />
      </section>
    </>
  );
};

export default CheckoutPage;
