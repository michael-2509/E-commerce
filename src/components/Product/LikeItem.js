import React from "react";
import Button from "../../UI/Button";

import classes from "./LikeItem.module.css";

const Likes = ({ data }) => {
  const { likes } = data;
  const width = window.innerWidth;

  return (
    <>
      <section className={classes.likes}>
        <h2>YOU MAY ALSO LIKE</h2>
        <div className={classes["likes-container"]}>
          {likes.map((item) => (
            <div key={item.id} className={classes["likes-image"]}>
              {" "}
              <img
                src={
                  width < 767
                    ? item.image.mobile
                    : width > 767 && width < 1023
                    ? item.image.tablet
                    : item.image.desktop
                }
                alt=""
              />
              <h3>{item.name}</h3>
              <Button>SEE PRODUCT</Button>
            </div>
          ))}
          {/* <div className={classes["likes-image"]}>
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Likes;
