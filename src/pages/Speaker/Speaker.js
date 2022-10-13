import React, { Fragment } from "react";

import classes from "./Speaker.module.css";

// import zx9_speakers from "";

import BestGear from "../../components/BestGear/BestGear";
import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Button from "../../UI/Button";

const SpeakerPage = () => {
  return (
    <Fragment>
      <Nav />
      <section className={classes.speaker}>
        <h1>SPEAKERS</h1>
      </section>
      <section className={classes["zx9-speaker"]}>
        <div>{/* <img src={zx9_speakers} alt="speaker" /> */}</div>
        <div>
          <p>NEW PRODUCT</p>
          <h1>ZX9 Speaker</h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Button />
        </div>
      </section>
      <section className={classes["zx7-speaker"]}>
        <div></div>
        <div></div>
      </section>
      <CategoryNavigation />
      <BestGear />
      <Footer />
    </Fragment>
  );
};

export default SpeakerPage;
