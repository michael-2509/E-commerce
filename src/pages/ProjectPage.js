import React from "react";
import Nav from "../components/Nav/Nav";

const ProductPage = () => {
  return (
    <>
      <Nav />
      <section className={classes["content"]}>
        <div className={classes["img-speaker"]}>
          <img src={zx9Speakers} alt="speaker" />
        </div>
        <div className={classes["content-info"]}>
          <p className={classes["new-product"]}>NEW PRODUCT</p>
          <h1>ZX9 Speaker</h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link>
            <Button>SEE PRODUCT</Button>
          </Link>
        </div>
      </section>

      <section>
        <div></div>
        <div></div>
      </section>

      <section>
        <h2>You May also Like</h2>
        <div>
          {" "}
          <img src={x} alt="" />
          <h2></h2>
          <Button>SEE PRODUCT</Button>
        </div>
      </section>

      <section>
        <div></div>
      </section>
    </>
  );
};

export default ProductPage;
