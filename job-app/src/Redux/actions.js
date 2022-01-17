import {
    ADD_JOB,
    ADD_JOB_ERROR,
    ADD_JOB_LOADING,
    ADD_JOB_SUCCESS,
    GET_JOB_ERROR,
    GET_JOB_LOADING,
    GET_JOB_SUCCESS,
    REMOVE_JOB,
    TOGGLE_JOB,
} from "./actionType";

export const addJob = (data) => {
    return {
        type: ADD_JOB,
        payload: data,
    };
};


export const addJobLoading = () => {
    return {
        type: ADD_JOB_LOADING,
    };
};
export const addJobSucces = (data) => {
    return {
        type: ADD_JOB_SUCCESS,
        payload: data,
    };
};
export const addJobError = (err) => {
    return {
        type: ADD_JOB_ERROR,
        payload: err,
    };
};
export const removeJob = (id) => {
    return {
        type: REMOVE_JOB,
        id,
    };
};

export const getJobLoading = () => {
    return {
        type: GET_JOB_LOADING,
    };
};
export const getJobSuccess = (data) => {
    return {
        type: GET_JOB_SUCCESS,
        payload: data,
    };
};
export const getJobError = (err) => {
    return {
        type: GET_JOB_ERROR,
        payload: err,
    };
};

export const toggleJobSucces = (id) => {
    return {
        type: TOGGLE_JOB,
        id,
    };
};
