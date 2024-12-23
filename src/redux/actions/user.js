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

export const fetchApplications = (jobId) => async (dispatch) => {

    try {
        dispatch({
            type: "fetchApplicationRequest",
        });

        const { data } = await axios.get(`${BACKEND_URL}/interviewer/get-applications/${jobId}`, {
            withCredentials: true,
        });

        dispatch({
            type: "fetchApplicationSuccess",
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: "fetchApplicationFailure",
            message: error.response.data.message,
        });
    }
}

export const postJob = (form) => async (dispatch) => {
    try {
        dispatch({
            type: "addJobRequest",
        });

        const { data } = await axios.post(`${BACKEND_URL}/interviewer/post-job`, form, {
            withCredentials: true,
        });

        dispatch({
            type: "addJobSuccess",
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: "addJobFailure",
            message: error.response.data.message,
        });
    }
}

export const getReminders = () => async (dispatch) => {
    try {
        dispatch({
            type: "getRemindersRequest",
        })

        const { data } = await axios.get(`${BACKEND_URL}/candidate/reminder-meetings`, {
            withCredentials: true,
        })

        dispatch({
            type: "getRemindersSuccess",
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: "getRemindersFailure",
            message: error.response.data.message,
        });
    }
}

export const getRooms = (role) => async (dispatch) => {
    try {
        dispatch({
            type: "getRoomsRequest",
        })

        const { data } = await axios.get(`${BACKEND_URL}/${role}/get-rooms`, {
            withCredentials: true,
        })

        dispatch({
            type: "getRoomsSuccess",
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: "getRoomsFailure",
            message: error.response.data.message,
        })
    }
}