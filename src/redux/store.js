import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/user";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export const BACKEND_URL = "http://localhost:5000";