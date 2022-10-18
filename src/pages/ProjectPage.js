import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProjectPage.module.css";
import Nav from "../components/Nav/Nav";

import xx99 from "../Assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import Button from "../UI/Button";

import gallery1 from "../Assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import gallery2 from "../Assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import gallery3 from "../Assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

import headphoneOne from "../Assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import headphonetwo from "../Assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import speaker from "../Assets/shared/desktop/image-zx9-speaker.jpg";

const ProductPage = () => {
  return (
    <>
      <Nav />
      <section className={classes.info}>
        <div className={classes["img-info"]}>
          <img src={xx99} alt="xx99" />
        </div>
        <div className={classes["content-info"]}>
          <p className={classes["new-product"]}>NEW PRODUCT</p>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <p>$2999</p>

          <button class={classes.button}>-</button>
          <button class={classes.button}>1</button>
          <button class={classes.button}>+</button>

          <Link>
            <Button>ADD TO CART</Button>
          </Link>
        </div>
      </section>

      <section className={classes.features}>
        <div className={classes.description}>
          <h2>FEATURES</h2>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className={classes.box}>
          <h2>IN THE BOX</h2>
          <p>
            <span> 1X</span>Headphone unit
          </p>
          <p>
            <span>2X</span>Replacement earcups
          </p>
          <p>
            <span>1X</span>
            User manual
          </p>
          <p>
            <span>1X</span>
            3.5mm 5m audio cable
          </p>
          <p>
            <span>1X</span>
            Travel bag
          </p>
        </div>
      </section>

      <section className={classes.gallery}>
        <div className={classes["img-container"]}>
          <img className={classes["img-first"]} src={gallery1} alt="gallery" />
          <img className={classes["img-second"]} src={gallery2} alt="gallery" />
          <img className={classes["img-third"]} src={gallery3} alt="gallery" />
        </div>
      </section>

      <section className={classes.likes}>
        <h2>YOU MAY ALSO LIKE</h2>
        <div className={classes["likes-container"]}>
          <div className={classes["likes-image"]}>
            {" "}
            <img src={headphoneOne} alt="" />
            <h3>XX99 MARK I</h3>
            <Button>SEE PRODUCT</Button>
          </div>
          <div className={classes["likes-image"]}>
            {" "}
            <img src={headphonetwo} alt="" />
            <h3>XX59</h3>
            <Button>SEE PRODUCT</Button>
          </div>
          <div className={classes["likes-image"]}>
            {" "}
            <img src={speaker} alt="" />
            <h3>ZX9 Speaker</h3>
            <Button>SEE PRODUCT</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
