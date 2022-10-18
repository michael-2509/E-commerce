import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";

import classes from "./InfoItem.module.css";

const Info = ({ data }) => {
  const { image, newProduct, title, description, price } = data;
  const width = window.innerWidth;

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
          <h1>{title}</h1>
          <p>{description}</p>
          <p>$ {price}</p>

          <button className={classes.button}>-</button>
          <button className={classes.button}>1</button>
          <button className={classes.button}>+</button>

          <Link to="#">
            <Button>ADD TO CART</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Info;
