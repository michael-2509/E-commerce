import React from "react";
import classes from "./CartItem.module.css";
import Button from "../../UI/Button";
import image from "../../Assets/product-yx1-earphones/mobile/image-product.jpg";

const CartItem = () => {
  return (
    <>
      <li className={classes.list}>
        <div className={classes.image}>
          {" "}
          <img src={image} alt="earphoen" />
        </div>

        <div className={classes.cartBody}>
          <p>YX1 Wireless Earphones</p>
          <p>
            <span>$</span> 599
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <Button> - </Button>
          <p>2</p>
          <Button>+</Button>
        </div>
      </li>
    </>
  );
};

export default CartItem;
