import React from "react";
import classes from "./Cart.module.css";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../Store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  //get cart data from reducer
  const cartProduct = useSelector((state) => state.cartReducer.items);
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);

  const removeAllItemHandler = () => {
    dispatch(cartAction.removeAllItems());
  };

  return (
    <>
      <Modal>
        {cartProduct.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          <section className={classes["cart-container"]}>
            <div className={classes["cart-header"]}>
              <h3>
                Cart <span>({cartProduct.length})</span>
              </h3>{" "}
              <Button onClick={removeAllItemHandler} className={classes.button}>
                Remove all
              </Button>
            </div>
            {cartProduct.map((item) => (
              <CartItem data={item} />
            ))}

            <div className={classes["cart-footer"]}>
              <h3>Total</h3>
              <p>{totalAmount}</p>
            </div>

            <Button>CHECKOUT</Button>
          </section>
        )}
      </Modal>
    </>
  );
};

export default Cart;
