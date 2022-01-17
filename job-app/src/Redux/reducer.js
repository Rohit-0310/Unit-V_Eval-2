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
} from "./actiontype";
    const init = {
        loading: false,
        jobs: [],
        error: false,
    };
  
    export const reducer = (state = init, { type, payload }) => {
        switch (type) {
            case ADD_JOB:
            return {
              ...state,
              jobs: [...state.jobs, payload],
            };
    
            case ADD_JOB_LOADING:
            return {
              ...state,
              loading: true,
            };
    
            case ADD_JOB_SUCCESS:
            return {
              ...state,
              jobs: [...state.jobs, payload],
              loading: false,
            };
    
            case ADD_JOB_ERROR:
            return {
              ...state,
              loading: false,
              error: true,
            };
    
            case GET_JOB_LOADING:
            return {
              ...state,
              loading: true,
            };
    
            case GET_JOB_SUCCESS:
            return {
              ...state,
              jobs: payload,
              loading: false,
            };
    
            case GET_JOB_ERROR:
            return {
              ...state,
              loading: false,
              error: true,
            };
    
            case REMOVE_JOB:
            const newtodo = state.jobs.filter((e) => e.id !== payload);
            return {
              ...state,
              todo: newtodo,
            };
    
            case TOGGLE_JOB:
            console.log(state);
            return state.jobs.map((todo) =>
              todo.id === payload ? { ...todo, completed: !todo.completed } : todo
            );
          default:
            return state;
        }
    };  
  