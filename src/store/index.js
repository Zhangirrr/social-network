import { configureStore } from "@reduxjs/toolkit";

import UserSlice from "./userSlice";
import PostSlice from "./postSlice";
import OnePostSlice from "./onePostSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    post: OnePostSlice.reducer,
    posts: PostSlice.reducer
  },
});
