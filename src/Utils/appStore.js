import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptRedcuer from "./gptSlice"
const appStore = configureStore({
  reducer: { user: userReducer, movies: moviesReducer, gpt: gptRedcuer },
});

export default appStore;
