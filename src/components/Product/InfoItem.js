import React from "react";

import { useDispatch, useSelector } from "react-redux";

import Button from "../../UI/Button";
import { cartAction } from "../../Store/cart-slice";

import classes from "./InfoItem.module.css";

const Info = ({ data }) => {
  const { id, image, newProduct, name, description, price } = data;

  const width = window.innerWidth;
  const dispatch = useDispatch();

  let itemNumber = useSelector((state) => state.cartReducer.itemNumber);

  const incrementHandler = () => {
    dispatch(cartAction.increment());
  };

  const decrementHandler = () => {
    dispatch(cartAction.decrement());
  };

  const AddToCartHandler = () => {
    dispatch(
      cartAction.addToCart({ id, image, name, price, quantity: itemNumber })
    );
  };

  return (
    <>
      <section className={classes.info}>
        <div className={classes["img-info"]}>
          <img
            src={
              width < 767
                ? image.mobile
                : width > 767 && width < 1023
                ? image.tablet
                : image.desktop
            }
            alt="xx99"
          />
        </div>
        <div className={classes["content-info"]}>
          {newProduct && <p className={classes["new-product"]}>NEW PRODUCT</p>}
          <h1>{name}</h1>
          <p>{description}</p>
          <p>$ {price}</p>

          <button onClick={decrementHandler} className={classes.button}>
            -
          </button>
          <button className={classes.button}>{itemNumber}</button>
          <button onClick={incrementHandler} className={classes.button}>
            +
          </button>

          <Button onClick={AddToCartHandler}>ADD TO CART</Button>
        </div>
      </section>
    </>
  );
};

export default Info;
