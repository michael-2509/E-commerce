import React from "react";

import Nav from "../../components/Nav/Nav";
import CheckoutForm from "./CheckoutForm";

import classes from "./Checkout.module.css";
// import CheckoutDetails from "./CheckoutDetails";
import Footer from "../../components/Footer/Footer";
import SuccessModal from "./successModal";

const CheckoutPage = () => {
  return (
    <>
      <section className={classes.checkout}>
        {" "}
        <Nav />
        <h1>Checkout Page</h1>
        <section className={classes.checkoutSummary}>
          <CheckoutForm />
          {/* <CheckoutDetails /> */}
          <SuccessModal />
        </section>
        <Footer />
      </section>
    </>
  );
};

export default CheckoutPage;
