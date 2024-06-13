import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "../features/playerSlice";
import shazamApi from "../features/shazamCoreApi";

export default configureStore({
  reducer: {
    player: playerReducer,
    [shazamApi.reducerPath]: shazamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware),
});
