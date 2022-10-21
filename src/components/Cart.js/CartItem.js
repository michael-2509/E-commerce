import React from "react";
import classes from "./CartItem.module.css";
import Button from "../../UI/Button";

const CartItem = ({ data }) => {
  console.log(data);
  const { image, title, price, quantity } = data;

  return (
    <>
      <li className={classes.list}>
        <div className={classes.image}>
          {" "}
          <img src={image.desktop} alt="earphoen" />
        </div>

        <div className={classes.cartBody}>
          <p>{title}</p>
          <p>
            <span>$</span> {price}
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <Button> - </Button>
          <p>{quantity}</p>
          <Button>+</Button>
        </div>
      </li>
    </>
  );
};

export default CartItem;
