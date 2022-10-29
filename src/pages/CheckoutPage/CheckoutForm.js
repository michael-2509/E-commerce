import React from "react";

import Input from "../../UI/Input/Input";

import classes from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  return (
    <>
      <section className={classes["checkout-form"]}>
        <h1>CHECKOUT</h1>

        <div className={classes.billing}>
          {" "}
          <h3>BILLING DETAILS</h3>
          <div className={classes.flex}>
            {" "}
            <Input label="Name" />
            <Input label="Email Address" />
          </div>
          <Input label="Phone Number" />
        </div>

        <div className={classes.shipping}>
          {" "}
          <h3>SHIPPING INFO</h3>
          <Input label="Adress" />
          <Input label="Zip code" />
          <Input label="City" />
          <Input label="Country" />
        </div>

        <div className={classes.payment}>
          <h3>PAAYMENT DETAILS</h3>
          <div>
            <div>
              <p>Payment Method</p>
            </div>
            <div>
              <Input />
              <Input />
            </div>
          </div>
        </div>
        <div>
          {true && (
            <div>
              <Input />
              <Input />
            </div>
          )}
          {false && (
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default CheckoutForm;
