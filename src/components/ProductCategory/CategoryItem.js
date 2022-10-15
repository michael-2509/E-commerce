import React, { Fragment } from "react";

import classes from "./CategoryItem.module.css";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";

const ProductCategory = (Props, classInfo) => {
  const style = Props.classInfo;
  console.log(`${style}`);
  return (
    <Fragment>
      <section
        className={`${classes[`${Props.classInfo}`]} ${classes.content}`}
      >
        <div className={classes["category-img"]}>
          <img src={Props.image} alt="speaker" />
        </div>

        <div className={classes["content-info"]}>
          <p className={classes["new-product"]}>{Props.newProduct}</p>
          <h1>{Props.title}</h1>
          <p>{Props.description}</p>
          <Link>
            <Button>SEE PRODUCT</Button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductCategory;
