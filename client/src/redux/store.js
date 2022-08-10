import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import profileApi from "./slice/profileSlice";
import periodReducer from "../pages/periodPage/periodSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    // [profileApi.reducerPath]: profileApi.reducer
    periodInformation: periodReducer,
  },

  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(profileApi.middleware)
});
