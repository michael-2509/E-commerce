import React, { Fragment } from "react";

import Nav from "../components/Nav/Nav";
import earphone from "../Assets/shared/desktop/image-earphones.png";
import speaker from "../Assets/shared/desktop/image-speakers.png";
import headphone from "../Assets/shared/desktop/image-headphones.png";
import zx9_speakers from "../Assets/home/desktop/image-speaker-zx9.png";

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
        <div className={classes.card_content}>
          <img src={headphone} alt="headphone" />
          <div className={classes.card}>
            <h2>HEADPHONES</h2>
          </div>
        </div>

        <div className={classes.card_content}>
          <img src={speaker} alt="speaker" />
          <div className={classes.card}>
            <h2>SPEAKERS</h2>
          </div>
        </div>

        <div className={classes.card_content}>
          <img src={earphone} alt="earphone" />
          <div className={classes.card}>
            <h2>EARPHONES</h2>
          </div>
        </div>
      </section>

      <section className={classes.speaker}>
        <div className={classes["zx9-speaker-img"]}>
          <img src={zx9_speakers} alt="zx9_speakers" />
        </div>
        <div>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button> SEE PRODUCT</button>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
