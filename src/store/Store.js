import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./moviesSlice";
import searchSlice from "./searchSlice";

export default configureStore({
  reducer: {
    movies: movieSlice,
    search: searchSlice,
  },
});
