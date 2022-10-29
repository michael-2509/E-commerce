import React, { useState } from "react";

import Input from "../../UI/Input/Input";
import CheckoutDetails from "./CheckoutDetails";

import classes from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  //regEx for email validation
  const validEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [userNameIsInvalid, setUserNameIsInvalid] = useState(null);
  const [emailIsInvalid, setEmailIsInvalid] = useState(null);
  const [phoneNumberIsInvalid, setPhoneNumberIsInvalid] = useState(null);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
    setUserNameIsInvalid(event.target.value.trim() === "");
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setEmailIsInvalid(event.target.value.match(!validEmail));
  };

  const phoneChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
    setPhoneNumberIsInvalid(event.target.value.length < 9);
  };

  const validateUsernameHandler = (event) => {
    setUserNameIsInvalid(event.target.value.trim() === "");
  };

  const validateEmailHandler = (event) => {
    if (event.target.value.trim() === "") {
      setEmailIsInvalid(true);
      setEmailError("Email cannot be empty");
    } else if (event.target.value.match(validEmail)) {
      setEmailIsInvalid(false);
    } else {
      setEmailIsInvalid(true);
      setEmailError("Invalid Email");
    }
  };

  const validatePhoneHandler = (event) => {
    if (event.target.value.trim() === "") {
      setPhoneNumberIsInvalid(true);
      setPhoneError("Phone cannot be empty");
    } else if (event.target.value.length > 9) {
      setPhoneNumberIsInvalid(false);
    } else {
      setPhoneNumberIsInvalid(true);
      setPhoneError("min require length is 5");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userNameIsInvalid === null || userNameIsInvalid === true) {
      setUserNameIsInvalid(true);
      setEmailError("Email cannot be empty");
    } else {
      setUserNameIsInvalid(false);
    }

    if (emailIsInvalid === null || emailIsInvalid === true) {
      setEmailIsInvalid(true);
    } else {
      setEmailIsInvalid(false);
    }

    if (phoneNumberIsInvalid === null || phoneNumberIsInvalid === true) {
      setPhoneNumberIsInvalid(true);
      setPhoneError("Phone cannot be empty");
    } else {
      setPhoneNumberIsInvalid(false);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes["checkout-form"]}>
        <h1>CHECKOUT</h1>

        <div className={classes.billing}>
          {" "}
          <h6>BILLING DETAILS</h6>
          <div className={classes["form-row"]}>
            {" "}
            <Input
              label="Name"
              Placeholder="Michael"
              value={userName}
              onChange={userNameChangeHandler}
              onBlur={validateUsernameHandler}
              valueIsInvalid={userNameIsInvalid}
              errorText="Name cannot be empty"
            />
            <Input
              label="Email Address"
              Placeholder="example@gmail,com"
              value={email}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              valueIsInvalid={emailIsInvalid}
              errorText={emailError}
            />
          </div>
          <Input
            Placeholder="xxx-xxxx-xxxx"
            label="Phone Number"
            value={phoneNumber}
            onChange={phoneChangeHandler}
            onBlur={validatePhoneHandler}
            valueIsInvalid={phoneNumberIsInvalid}
            errorText={phoneError}
          />
        </div>

        <div className={classes.shipping}>
          {" "}
          <h6>SHIPPING INFO</h6>
          <Input
            Placeholder="carlinton Street"
            label="Adress"
            value={phoneNumber}
            onChange={phoneChangeHandler}
            onBlur={validatePhoneHandler}
            valueIsInvalid={phoneNumberIsInvalid}
            errorText={phoneError}
          />
          <div className={classes["form-row"]}>
            <Input
              Placeholder="103101"
              label="Zip code"
              value={phoneNumber}
              onChange={phoneChangeHandler}
              onBlur={validatePhoneHandler}
              valueIsInvalid={phoneNumberIsInvalid}
              errorText={phoneError}
            />
            <Input
              Placeholder="Lagos"
              label="City"
              value={phoneNumber}
              onChange={phoneChangeHandler}
              onBlur={validatePhoneHandler}
              valueIsInvalid={phoneNumberIsInvalid}
              errorText={phoneError}
            />
          </div>
          <div className={classes["form-row"]}>
            <Input
              Placeholder="Nigeria"
              label="Country"
              value={phoneNumber}
              onChange={phoneChangeHandler}
              onBlur={validatePhoneHandler}
              valueIsInvalid={phoneNumberIsInvalid}
              errorText={phoneError}
            />
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
      </form>
      <CheckoutDetails onSubmit={submitHandler} />
    </>
  );
};

export default CheckoutForm;
