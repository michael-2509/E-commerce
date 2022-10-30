import React, { useState } from "react";

import Input from "../../UI/Input/Input";
import CheckoutDetails from "./CheckoutDetails";

import classes from "./CheckoutForm.module.css";

const CheckoutForm = (Props) => {
  const [payment, setPayment] = useState("emoney");
  //regEx for email validation
  const validEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setcity] = useState("");
  const [country, setCountry] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [userNameIsInvalid, setUserNameIsInvalid] = useState(null);
  const [emailIsInvalid, setEmailIsInvalid] = useState(null);
  const [phoneNumberIsInvalid, setPhoneNumberIsInvalid] = useState(null);
  const [addressIsInvalid, setAddressIsInvalid] = useState(null);
  const [zipcodeIsInvalid, setZipcodeIsInvalid] = useState(null);
  const [cityIsInvalid, setCityIsInvalid] = useState(null);
  const [countryIsInvalid, setCountryIsInvalid] = useState(null);

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

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
    setAddressIsInvalid(event.target.value.trim() === "");
  };

  const zipcodeChangeHandler = (event) => {
    setZipcode(event.target.value);
    setZipcodeIsInvalid(event.target.value.trim() === "");
  };

  const cityChangeHandler = (event) => {
    setcity(event.target.value);
    setCityIsInvalid(event.target.value.trim() === "");
  };

  const countryChangeHandler = (event) => {
    setCountry(event.target.value);
    setCountryIsInvalid(event.target.value.trim() === "");
  };

  const radioChangeHandler = (event) => {
    setPayment(event.target.value);
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

  const validateAddressHandler = (event) => {
    setAddressIsInvalid(event.target.value.trim() === "");
  };

  const validateZipcodeHandler = (event) => {
    setZipcodeIsInvalid(event.target.value.trim() === "");
  };

  const validateCityHandler = (event) => {
    setCityIsInvalid(event.target.value.trim() === "");
  };

  const validateCountryHandler = (event) => {
    setCountryIsInvalid(event.target.value.trim() === "");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (userNameIsInvalid === null || userNameIsInvalid === true) {
      setUserNameIsInvalid(true);
    } else {
      setUserNameIsInvalid(false);
    }

    if (emailIsInvalid === null || emailIsInvalid === true) {
      setEmailIsInvalid(true);
      setEmailError("Email cannot be empty");
    } else {
      setEmailIsInvalid(false);
    }

    if (phoneNumberIsInvalid === null || phoneNumberIsInvalid === true) {
      setPhoneNumberIsInvalid(true);
      setPhoneError("Phone cannot be empty");
    } else {
      setPhoneNumberIsInvalid(false);
    }

    if (addressIsInvalid === null || addressIsInvalid === true) {
      setAddressIsInvalid(true);
      // setEmailError("address cannot be empty");
    } else {
      setAddressIsInvalid(false);
    }

    if (zipcodeIsInvalid === null || zipcodeIsInvalid === true) {
      setZipcodeIsInvalid(true);
      // setEmailError("Email cannot be empty");
    } else {
      setZipcodeIsInvalid(false);
    }

    if (cityIsInvalid === null || cityIsInvalid === true) {
      setCityIsInvalid(true);
      setEmailError("Email cannot be empty");
    } else {
      setCityIsInvalid(false);
    }

    if (countryIsInvalid === null || countryIsInvalid === true) {
      setCountryIsInvalid(true);
      // setEmailError("Email cannot be empty");
    } else {
      setCountryIsInvalid(false);
    }
    if (
      userNameIsInvalid &&
      emailIsInvalid &&
      phoneNumberIsInvalid &&
      addressIsInvalid &&
      zipcodeIsInvalid &&
      cityIsInvalid &&
      countryIsInvalid
    ) {
      setFormIsValid(true);
      Props.onShowModal();
    }

    console.log(formIsValid);
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
              type="text"
              label="Name"
              Placeholder="Michael"
              value={userName}
              onChange={userNameChangeHandler}
              onBlur={validateUsernameHandler}
              valueIsInvalid={userNameIsInvalid}
              errorText="Name cannot be empty"
            />
            <Input
              type="email"
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
            type="phone"
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
            value={address}
            onChange={addressChangeHandler}
            onBlur={validateAddressHandler}
            valueIsInvalid={addressIsInvalid}
            errorText="Address cannot be empty"
          />
          <div className={classes["form-row"]}>
            <Input
              Placeholder="103101"
              label="Zip code"
              value={zipcode}
              onChange={zipcodeChangeHandler}
              onBlur={validateZipcodeHandler}
              valueIsInvalid={zipcodeIsInvalid}
              errorText="zipcode cannot be empty"
            />
            <Input
              Placeholder="Lagos"
              label="City"
              value={city}
              onChange={cityChangeHandler}
              onBlur={validateCityHandler}
              valueIsInvalid={cityIsInvalid}
              errorText="city cannoot be epty"
            />
          </div>
          <div className={classes["form-row"]}>
            <Input
              Placeholder="Nigeria"
              label="Country"
              value={country}
              onChange={countryChangeHandler}
              onBlur={validateCountryHandler}
              valueIsInvalid={countryIsInvalid}
              errorText="country cannot be empty"
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
                <input
                  id="emoney"
                  type="radio"
                  name="paymentMethod"
                  value="emoney"
                  onChange={radioChangeHandler}
                  checked={payment === "emoney"}
                />{" "}
                <label htmlFor="emoney" data-check={payment === "emoney"}>
                  e-money
                </label>
              </div>
              <div className={classes["radio-btn"]}>
                <input
                  id="ecash"
                  type="radio"
                  name="paymentMethod"
                  value="ecash"
                  onChange={radioChangeHandler}
                  checked={payment === "ecash"}
                />{" "}
                <label htmlFor="ecash" data-check={payment === "ecash"}>
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          {payment === "emoney" ? (
            <div className={classes["form-row"]}>
              <Input label="e-money Number" />
              <Input label="e-money pin" />
            </div>
          ) : (
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
