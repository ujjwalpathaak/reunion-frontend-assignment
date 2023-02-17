import { configureStore } from "@reduxjs/toolkit";
import catalogueReducer from "../features/catalogueSlice";

const store = configureStore({
  reducer: {
    catalogue: catalogueReducer,
  },
});

export default store;
