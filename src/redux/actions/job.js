import axios from "axios";
import { BACKEND_URL } from "../store";

export const getJobs = (search) => async (dispatch) => {
    try {
        dispatch({
            type: "searchJobRequest"
        })

        const query = Object.keys(search)
            .map(key => `${key}=${encodeURIComponent(search[key])}`)
            .join('&');

        const { data } = await axios.get(`${BACKEND_URL}/candidate/all-jobs${query ? `?${query}` : ""}`);

        dispatch({
            type: "searchJobSuccess",
            payload: data
        });

    } catch (error) {
        dispatch({
            type: "searchJobFailure",
            payload: error.response.data.message
        })
    }
}

export const updateJob = (jobId, status) => async (dispatch) => {
    try {
        dispatch({
            type: "updateJobRequest"
        })

        const { data } = await axios.put(`${BACKEND_URL}/interviewer/update-job/${jobId}`, { status }, {
            withCredentials: true,
        });

        dispatch({
            type: "updateJobSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "updateJobFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteJob = (jobId) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteJobRequest"
        })

        const { data } = await axios.delete(`${BACKEND_URL}/interviewer/delete-job/${jobId}`, {
            withCredentials: true,
        });

        dispatch({
            type: "deleteJobSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "deleteJobFailure",
            payload: error.response.data.message
        })
    }
}