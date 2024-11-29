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