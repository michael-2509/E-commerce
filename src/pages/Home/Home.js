import React, { Fragment } from "react";

import classes from "./Home.module.css";

import Nav from "../../components/Nav/Nav";
import BestGear from "../../components/BestGear/BestGear";

import zx9_speakers from "../../Assets/home/desktop/image-speaker-zx9.png";
import yx1_earphone from "../../Assets/home/desktop/image-earphones-yx1.jpg";

import Footer from "../../components/Footer/Footer";
import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <section className={classes.hero}>
        <div className={classes.new_product}>
          <p>NEW PRODUCT</p>
          <h1>
            XX99 MARK 11 <br /> HEADPHONES
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional
            <br /> build quality made for the passionate music
            <br /> enthusiast.
          </p>
          <button> SEE PRODUCT</button>
        </div>
      </section>

      <CategoryNavigation />

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
      <BestGear />
      <Footer />
    </Fragment>
  );
};

export default Home;