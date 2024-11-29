import axios from "axios";
import { BACKEND_URL } from "../store";

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: "loadUserRequest",
        });
        const { data } = await axios.get(`${BACKEND_URL}/get-profile`, {
            withCredentials: true,
            crenditals: "include",
        });

        dispatch({
            type: "loadUserSuccess",
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: "loadUserFailure",
            data: error.response.data.message,
        });
    }
}

export const logout = (role) => async (dispatch) => {
    try {
        dispatch({
            type: "logoutRequest",
        });
        const { data } = await axios.get(`${BACKEND_URL}/${role}/logout`, {
            withCredentials: true,
        });

        dispatch({
            type: "logoutSuccess",
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: "logoutFailure",
            message: error.response.data.message,
        });
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "loginRequest",
        });
        const { data } = await axios.post(`${BACKEND_URL}/login`, {
            email,
            password,
        }, {
            withCredentials: true,
        });

        dispatch({
            type: "loginSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "loginFailure",
            message: error.response.data.message,
        })
    }
}

export const register = (formData, role) => async (dispatch) => {
    try {
        dispatch({
            type: "registerRequest",
        });

        const { data } = await axios.post(
            `${BACKEND_URL}/${role}/signup`,
            formData,
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "registerSuccess",
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: "registerFailure",
            message: error.response.data.message,
        });
    }
}

export const updateProfile = (formData, role) => async (dispatch) => {

    try {
        dispatch({
            type: "updateProfileRequest",
        });

        const { data } = await axios.put(`${BACKEND_URL}/${role}/update`, formData, {
            withCredentials: true,
        });

        dispatch({
            type: "updateProfileSuccess",
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: "updateProfileFailure",
            message: error.response.data.message,
        });
    }
}

export const applyJob = (jobId) => async (dispatch) => {
    try {
        dispatch({
            type: "applyJobRequest",
        });

        const { data } = await axios.post(`${BACKEND_URL}/candidate/apply-job/${jobId}`, {}, {
            withCredentials: true,
        });

        dispatch({
            type: "applyJobSuccess",
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: "applyJobFailure",
            message: error.response.data.message,
        });
    }
}
