import axios from "axios";
import { ADMIN_JOBS_FAIL, ADMIN_JOBS_REQUEST, ADMIN_JOBS_SUCCESS, ALL_JOBS_FAIL, ALL_JOBS_REQUEST, ALL_JOBS_SUCCESS, CLEAR_ERRORS, DELETE_JOBS_FAIL, DELETE_JOBS_REQUEST, DELETE_JOBS_SUCCESS, JOBS_DETAILS_FAIL, JOBS_DETAILS_REQUEST, JOBS_DETAILS_SUCCESS, NEW_JOBS_FAIL, NEW_JOBS_REQUEST, NEW_JOBS_SUCCESS, UPDATE_JOBS_FAIL, UPDATE_JOBS_REQUEST, UPDATE_JOBS_SUCCESS } from "../constants/jobConstant";


// Get All jobs
export const getJobs =
  (keyword = "", currentPage = 1, title, company) =>
    async (dispatch) => {
      try {
        dispatch({ type: ALL_JOBS_REQUEST });

        let link = `/api/v1/jobs?keyword=${keyword}&page=${currentPage}&company=${company}&title=${title}`;


        const { data } = await axios.get(link);

        dispatch({
          type: ALL_JOBS_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ALL_JOBS_FAIL,
          payload: error.response.data.message,
        });
      }
    };


// Get Jobs Details
export const getJobDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: JOBS_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/job/${id}`);

    dispatch({
      type: JOBS_DETAILS_SUCCESS,
      payload: data.job,
    });
  } catch (error) {
    dispatch({
      type: JOBS_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Contents For Admin
export const getAdminJobs = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_JOBS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/jobs");

    dispatch({
      type: ADMIN_JOBS_SUCCESS,
      payload: data.jobs,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_JOBS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//Delete Jobs
export const deleteJobs = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_JOBS_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/job/${id}`);

    dispatch({
      type: DELETE_JOBS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_JOBS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Jobs
export const updateJobs = (id, jobData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_JOBS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/job/${id}`,
      jobData,
      config
    );

    dispatch({
      type: UPDATE_JOBS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_JOBS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Content
export const createJob = (job) => async (dispatch) => {
  try {
    dispatch({ type: NEW_JOBS_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/admin/job/new", job, config);

    dispatch({ type: NEW_JOBS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEW_JOBS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};