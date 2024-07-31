import { configureStore } from "@reduxjs/toolkit";
import { recipeListSlice } from "./slices/recipeListSlice";
export const store = configureStore({
    reducer: {
      recipeList: recipeListSlice.reducer
     },
  });