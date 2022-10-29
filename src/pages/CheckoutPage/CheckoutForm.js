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
          <h6>BILLING DETAILS</h6>
          <div className={classes["form-row"]}>
            {" "}
            <Input Placeholder="Michael" label="Name" />
            <Input Placeholder="example@gmail,com" label="Email Address" />
          </div>
          <Input Placeholder="xxx-xxxx-xxxx" label="Phone Number" />
        </div>

        <div className={classes.shipping}>
          {" "}
          <h6>SHIPPING INFO</h6>
          <Input Placeholder="carlinton Street" label="Adress" />
          <div className={classes["form-row"]}>
            <Input Placeholder="Michael" label="Zip code" />
            <Input Placeholder="Lagos" label="City" />
          </div>
          <div className={classes["form-row"]}>
            <Input Placeholder="Nigeria" label="Country" />
            <div style={{ height: "8px" }} className={classes.special}></div>
          </div>
        </div>

        <div className={classes.payment}>
          <h6>PAAYMENT DETAILS</h6>
          <div className={classes["form-row"]}>
            <div>
              <p>Payment Method</p>
            </div>
            <div className={classes.radio}>
              <div className={classes["radio-btn"]}>
                <input type="radio" /> <label>e-money</label>
              </div>
              <div className={classes["radio-btn"]}>
                <input type="radio" /> <label>Cash on Delivery</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          {true && (
            <div className={classes["form-row"]}>
              <Input label="e-money Number" />
              <Input label="e-money pin" />
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
