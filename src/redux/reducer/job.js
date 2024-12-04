import { createReducer } from "@reduxjs/toolkit";

const jobReducer = createReducer({ jobs: [] },
    (builder) => {
        builder.addCase("searchJobRequest", (state) => {
            state.loading = true;
        })
            .addCase("deleteJobRequest", (state) => {
                state.loading = true;
            })
            .addCase("updateJobRequest", (state) => {
                state.loading = true;
            })
        builder.addCase("searchJobSuccess", (state, action) => {
            state.loading = false;
            state.jobs = action.payload.jobs;
        })
            .addCase("deleteJobSuccess", (state, action) => {
                state.loading = false;
                state.jobs = state.jobs.filter((job) => job._id !== action.payload.data._id);
                state.message = action.payload.message;
            })
            .addCase("updateJobSuccess", (state, action) => {
                state.loading = false;
                const updatedJob = action.payload.data;
                if (updatedJob.status === "closed")
                    state.jobs = state.jobs.filter((job) => job._id !== updatedJob._id);
                state.message = action.payload.message;
            })
        builder.addCase("searchJobFailure", (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        })
            .addCase("deleteJobFailure", (state) => {
                state.loading = false;
            })
            .addCase("updateJobFailure", (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
            });

        builder.addCase("clearMessage", (state) => {
            state.message = "";
        })
    });

export default jobReducer;