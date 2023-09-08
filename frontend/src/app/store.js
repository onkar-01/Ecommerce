import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";
import productReducer from "./slices/productSlice";
import vendorReducer from "./slices/vendorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    search: searchReducer,
    product: productReducer,
    vendor: vendorReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
