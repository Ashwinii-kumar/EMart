import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./poductSlice";
import categorySlice from "./categorySlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    categories: categorySlice,
  },
  devTools: import.meta.env.MODE !== 'production',
});
