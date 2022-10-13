import React, { Fragment } from "react";

const ProductCategory = () => {
  return (
    <Fragment>
      <section>
        <div>
          <img src={Props.image} alt="" />
        </div>

        <div>
          <p>{Props.newProduct}</p>
          <h1>{Props.title}</h1>
          <p>{Props.description}</p>
          <button>{Props.button}</button>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductCategory;
