import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "./slice/authSlice";
import {profileApi} from "./slice/profileSlice"


export const store =  configureStore({
  reducer: {
    auth: authReducer,
   [profileApi.reducerPath]: profileApi.reducer
  },

middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(profileApi.middleware)


});



setupListeners(store.dispatch)
