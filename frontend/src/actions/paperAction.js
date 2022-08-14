import axios from "axios";
import { ADMIN_PAPER_FAIL, ADMIN_PAPER_REQUEST, ADMIN_PAPER_SUCCESS, ALL_PAPER_FAIL, ALL_PAPER_REQUEST, ALL_PAPER_SUCCESS, CLEAR_ERRORS, DELETE_PAPER_FAIL, DELETE_PAPER_REQUEST, DELETE_PAPER_SUCCESS, NEW_PAPER_FAIL, NEW_PAPER_REQUEST, NEW_PAPER_SUCCESS, PAPER_DETAILS_FAIL, PAPER_DETAILS_REQUEST, PAPER_DETAILS_SUCCESS, UPDATE_PAPER_FAIL, UPDATE_PAPER_REQUEST, UPDATE_PAPER_SUCCESS } from "../constants/paperConstant";




// Get All Content

export const getPapers =(keyword = "", currentPage , year) =>
    async (dispatch) => {
      try {
        dispatch({ type: ALL_PAPER_REQUEST });

        let link = `/api/v1/papers?keyword=${keyword}&page=${currentPage}&year=${year}`;

        // if (subject) {
        //   link = `/api/v1/papers?keyword=${keyword}&page=${currentPage}&subject=${subject}&year=${year}`;
        // }

        const { data } = await axios.get(link);

        dispatch({
          type: ALL_PAPER_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ALL_PAPER_FAIL,
          payload: error.response.data.message,
        });
      }
    };

    // Get All Contents For Admin
export const getAdminPaper = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_PAPER_REQUEST });

    const { data } = await axios.get("/api/v1/admin/papers");

    dispatch({
      type: ADMIN_PAPER_SUCCESS,
      payload: data.papers,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_PAPER_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Create Content
export const createPaper = (paper) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PAPER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/admin/paper/new", paper, config);

    dispatch({ type: NEW_PAPER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEW_PAPER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Content Details
export const getPaperDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PAPER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/paper/${id}`);

    dispatch({ type: PAPER_DETAILS_SUCCESS, payload: data.paper });
  } catch (error) {
    dispatch({
      type: PAPER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deletePaper = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PAPER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/paper/${id}`);

    dispatch({
      type: DELETE_PAPER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PAPER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Paper
export const updatePaper = (id, paperData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PAPER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/paper/${id}`,
      paperData,
      config
    );

    dispatch({
      type: UPDATE_PAPER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PAPER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};