import { createReducer } from "@reduxjs/toolkit";

const jobReducer = createReducer({},
    (builder) => {
        builder.addCase("searchJobRequest", (state) => {
            state.loading = true;
        })
        builder.addCase("searchJobSuccess", (state, action) => {
            state.loading = false;
            state.jobs = action.payload.jobs;
        })
        builder.addCase("searchJobFailure", (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        })
    });

export default jobReducer;