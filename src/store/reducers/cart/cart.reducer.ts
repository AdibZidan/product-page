import { createSlice } from "@reduxjs/toolkit";
import { Cart } from '../../interfaces/cart/cart.interface';

const initialCartState: Cart = {
  totalItems: 0,
  totalAmount: 0,
  isShown: false,
  isCartAdded: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    incrementCartCount: (state: Cart): Cart => {
      const totalItems: number = state.totalItems + 1;

      return {
        ...state,
        totalItems,
        totalAmount: 125 * totalItems
      };
    },
    decrementCartCount: (state: Cart): Cart => {
      const totalItems: number = state.totalItems > 0 ? state.totalItems - 1 : state.totalItems;

      return {
        ...state,
        totalItems,
        totalAmount: 125 * totalItems
      };
    },
    addToCart: (state: Cart): Cart => ({
      ...state,
      isCartAdded: true
    }),
    showHideCartView: (state: Cart): Cart => ({
      ...state,
      isShown: !state.isShown
    }),
    resetCart: (): Cart => ({
      ...initialCartState,
      isShown: true
    })
  }
});

export const {
  incrementCartCount,
  decrementCartCount,
  addToCart,
  showHideCartView,
  resetCart
} = cartSlice.actions;

export default cartSlice.reducer;
