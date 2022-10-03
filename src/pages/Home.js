import React, { Fragment } from "react";

import Nav from "../components/Nav/Nav";
import earphone from "../Assets/shared/desktop/image-earphones.png";
import speaker from "../Assets/shared/desktop/image-speakers.png";
import headphone from "../Assets/shared/desktop/image-headphones.png";
import zx9_speakers from "../Assets/home/desktop/image-speaker-zx9.png";
import yx1_earphone from "../Assets/home/desktop/image-earphones-yx1.jpg";
import best_gear from "../Assets/shared/desktop/image-best-gear.jpg";

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
          {/* <div className={classes["speaker-image"]}></div> */}
        </div>
        <div>
          <h1>
            ZX9 <br /> SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are
            <br /> phenomenally built to deliver truly remarkable sound.
          </p>
          <button> SEE PRODUCT</button>
        </div>
      </section>

      <section className={classes["section-ZX7"]}>
        <div className={classes["speaker-ZX7"]}>
          <h3>ZX7 SPEAKER</h3>
          <button>SEE PRODUCT</button>
        </div>
      </section>

      <section className={classes["section-yx1"]}>
        <div className={classes["image-yx1"]}>
          {" "}
          <img src={yx1_earphone} alt="yx1_earphone" />
        </div>

        <div className={classes["yx1-content"]}>
          <h3>YX1 EARPHONES</h3>
          <button>SEE PPRODUCT</button>
        </div>
      </section>

      <section className={classes["best-gear"]}>
        <div className={classes["best-gear-content"]}>
          <h1>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className={classes["best-gear-image"]}>
          <img src={best_gear} alt="best-gear" />
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
