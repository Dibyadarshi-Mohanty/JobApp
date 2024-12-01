import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/user";
import jobReducer from "./reducer/job";

export const store = configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer
    },
});

export const BACKEND_URL = "https://talentconnect-backend.onrender.com";