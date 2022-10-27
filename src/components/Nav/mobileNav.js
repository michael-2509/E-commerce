import React from "react";

import { Link } from "react-router-dom";

import arrow from "../../Assets/shared/desktop/icon-arrow-right.svg";
import earphone from "../../Assets/shared/desktop/image-earphones.png";
import headphone from "../../Assets/shared/desktop/image-headphones.png";
import speaker from "../../Assets/shared/desktop/image-speakers.png";

import classes from "./mobileNav.module.css";

function Navs() {
  return (
    <>
      <Link
        // onClick={() => setIsNavOpen(false)}
        className={classes.mobileCategoryContainer}
        to="/headphone"
      >
        <div className={classes.mobileimage}>
          <div className={classes.img}>
            <img src={headphone} alt="HeadPhone" />
          </div>
        </div>
        <div className={classes.mobileCategoryInfo}>
          <h3>HeadPhones</h3>
          <div className={classes.mobileCategorySection}>
            <p>
              Shop now
              <span>
                <img src={arrow} alt="arrow-right" />
              </span>
            </p>
          </div>
        </div>
      </Link>
      <Link
        data-aos="zoom-in"
        // onClick={() => setIsNavOpen(false)}
        className={classes.mobileCategoryContainer}
        to="/speaker"
      >
        <div className={classes.mobileimage}>
          <div className={classes.img}>
            <img src={speaker} alt="HeadPhone" />
          </div>
        </div>
        <div className={classes.mobileCategoryInfo}>
          <h3>Speakers</h3>
          <div className={classes.mobileCategorySection}>
            <p>
              Shop now
              <span>
                <img src={arrow} alt="arrow-right" />
              </span>
            </p>
          </div>
        </div>
      </Link>
      <Link
        data-aos="fade-left"
        // onClick={() => setIsNavOpen(false)}
        className={classes.mobileCategoryContainer}
        to="/earphone"
      >
        <div className={classes.mobileimage}>
          <div className={classes.img}>
            <img src={earphone} alt="HeadPhone" />
          </div>
        </div>
        <div className={classes.mobileCategoryInfo}>
          <h3>Earphones</h3>
          <div className={classes.mobileCategorySection}>
            <p>
              Shop now
              <span>
                <img src={arrow} alt="arrow-right" />
              </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Navs;
