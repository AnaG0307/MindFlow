import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import profileApi from "./slice/profileSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
   // [profileApi.reducerPath]: profileApi.reducer
  },

//middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(profileApi.middleware)


});