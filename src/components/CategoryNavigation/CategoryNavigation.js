import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./CategoryNavigation.module.css";

import earphone from "../../Assets/shared/desktop/image-earphones.png";
import speaker from "../../Assets/shared/desktop/image-speakers.png";
import headphone from "../../Assets/shared/desktop/image-headphones.png";
import arrow from "../../Assets/shared/desktop/icon-arrow-right.svg";

const CategoryNavigation = () => {
  return (
    <Fragment>
      <section className={classes.card_container}>
        <div className={classes.card_content}>
          <img src={headphone} alt="headphone" />
          <div className={classes.card}>
            <h2>HEADPHONES</h2>
            <Link>
              <p>
                SHOP{" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </p>
            </Link>
          </div>
        </div>

        <div className={classes.card_content}>
          <img src={speaker} alt="speaker" />

          <div className={classes.card}>
            <h2>SPEAKERS</h2>
            <Link>
              <p>
                SHOP{" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </p>
            </Link>
          </div>
        </div>

        <div className={classes.card_content}>
          <img src={earphone} alt="earphone" />
          <div className={classes.card}>
            <h2>EARPHONES</h2>
            <Link>
              <p>
                SHOP{" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CategoryNavigation;