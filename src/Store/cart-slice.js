import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    itemNumber: 1,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => newItem.id === item.id);
      state.totalQuantity++;

      if (!existingItem) {
        console.log(state.itemNumber);
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          title: newItem.title,
          price: newItem.price,
          quantity: newItem.quantity,
          totalAmount: newItem.price,
        });
        // state.totalAmount = newItem.price;
      } else {
        state.totalAmount = state.totalAmount + existingItem.price;
        existingItem.quantity++;
      }
      console.log(newItem);
      console.log(existingItem);
      console.log(state.items);
    },

    removeItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => (item.id = newItem.id));
      if (existingItem === 1) {
        state.items.filter((item) => item.id === newItem.id);
      } else {
        state.totalAmount = state.totalAmount - existingItem.price;
        state.quanity--;
      }
    },

    increment(state) {
      state.itemNumber++;
    },

    decrement(state) {
      if (state.itemNumber === 0) {
        state.itemNumber = 0;
      } else {
        state.itemNumber--;
      }
    },
  },
});

export const cartAction = CartSlice.actions;
export default CartSlice;
