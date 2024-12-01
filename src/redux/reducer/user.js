import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({
    isAuthenticated: null
},
    (builder) => {
        builder
            .addCase("loginRequest", (state) => {
                state.loading = true;
            })
            .addCase("registerRequest", (state) => {
                state.loading = true;
            })
            .addCase("loadUserRequest", (state) => {
                state.loading = true;
            })
            .addCase("logoutRequeset", (state) => {
                state.loading = true;
            })
            .addCase("updateProfileRequest", (state) => {
                state.loading = true;
            })
            .addCase("applyJobRequest", (state) => {
                state.loading = true;
            })
            .addCase("fetchApplicationRequest", (state) => {
                state.loading = true;
            })
            .addCase("addJobRequest", (state) => {
                state.loading = true;
            })
            .addCase("getRemindersRequest", (state) => {
                state.loading = true;
            })
            .addCase("getRoomsRequest", (state) => {
                state.loading = true;
            })
        builder
            .addCase("loginSuccess", (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase("registerSuccess", (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
            })
            .addCase("loadUserSuccess", (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase("logoutSuccess", (state, action) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
                state.message = action.payload.message;
            })
            .addCase("updateProfileSuccess", (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.message = action.payload.message;
            })
            .addCase("applyJobSuccess", (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.user = action.payload.user;
            })
            .addCase("fetchApplicationSuccess", (state, action) => {
                state.loading = false;
                state.applications = action.payload.data;
            })
            .addCase("addJobSuccess", (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.user = action.payload.user;
            })
            .addCase("getRemindersSuccess", (state, action) => {
                state.loading = false;
                state.reminders = action.payload.data;
            })
            .addCase("getRoomsSuccess", (state, action) => {
                state.loading = false;
                state.rooms = action.payload.data;
            })
        builder
            .addCase("loginFailure", (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.message;
            })
            .addCase("registerFailure", (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.error = action.message;
            })
            .addCase("loadUserFailure", (state) => {
                state.loading = false;
                state.isAuthenticated = false;
            })
            .addCase("logoutFailure", (state) => {
                state.loading = false;
            })
            .addCase("updateProfileFailure", (state) => {
                state.loading = false;
            })
            .addCase("applyJobFailure", (state, action) => {
                state.loading = false;
                state.error = action.message;
            })
            .addCase("fetchApplicationFailure", (state) => {
                state.loading = false;
            })
            .addCase("addJobFailure", (state, action) => {
                state.loading = false;
                state.error = action.message;
            })
            .addCase("getRemindersFailure", (state) => {
                state.loading = false;
            })
            .addCase("getRoomsFailure", (state) => {
                state.loading = false;
            })

        builder.addCase("clearError", (state) => {
            state.error = null;
        });
        builder.addCase("clearMessage", (state) => {
            state.message = null;
        });
    }
);