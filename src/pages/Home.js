import React, { Fragment } from "react";

import Nav from "../components/Nav/Nav";
import headphone from "../Assets/category-headphones/desktop/image-xx99-mark-one.jpg";
import speaker from "../Assets/category-speakers/desktop/image-zx9.jpg";
import earphone from "../Assets/category-earphones/desktop/image-yx1-earphones.jpg";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <section className={classes.hero}>
        <div className={classes.new_product}>
          <p>NEW PRODUCT</p>
          <h1>XX99 MARK 11 HEADPHONES</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button> SEE PRODUCT</button>
        </div>
      </section>

      <section className={classes.card_container}>
        <div className={classes.card}>
          <img src={headphone} alt="headphone" />
          <h2>HEADPHONES</h2>
        </div>
        <div className={classes.card}>
          <img src={speaker} alt="speaker" />
          <h2>SPEAKERS</h2>
        </div>
        <div className={classes.card}>
          <img src={earphone} alt="earphone" />
          <h2>EARPHONES</h2>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
