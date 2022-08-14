import axios from "axios";
import {


  CLEAR_ERRORS,
  CONTENT_DETAILS_REQUEST,
  CONTENT_DETAILS_SUCCESS,
  CONTENT_DETAILS_FAIL,

  ALL_CONTENT_REQUEST,
  ALL_CONTENT_SUCCESS,
  ALL_CONTENT_FAIL,

  ADMIN_CONTENT_REQUEST,
  ADMIN_CONTENT_SUCCESS,
  ADMIN_CONTENT_FAIL,

  UPDATE_CONTENT_REQUEST,
  UPDATE_CONTENT_SUCCESS,
  UPDATE_CONTENT_FAIL,

  DELETE_CONTENT_REQUEST,
  DELETE_CONTENT_SUCCESS,
  DELETE_CONTENT_FAIL,

  NEW_CONTENT_REQUEST,
  NEW_CONTENT_FAIL,
  NEW_CONTENT_SUCCESS

} from "../constants/prepareConstant";




// Get All Content
export const getContent =
  (keyword = "", currentPage = 1, title, subject) =>
    async (dispatch) => {
      try {
        dispatch({ type: ALL_CONTENT_REQUEST });

        let link = `/api/v1/contents?keyword=${keyword}&page=${currentPage}&subject=${subject}&title=${title}`;

        if (subject) {
          link = `/api/v1/contents?keyword=${keyword}&page=${currentPage}&subject=${subject}&title=${title}`;
        }

        const { data } = await axios.get(link);

        dispatch({
          type: ALL_CONTENT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ALL_CONTENT_FAIL,
          payload: error.response.data.message,
        });
      }
    };

// Get All Contents For Admin
export const getAdminContent = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CONTENT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/contents");

    dispatch({
      type: ADMIN_CONTENT_SUCCESS,
      payload: data.contents,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_CONTENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Create Content
export const createContent = (content) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CONTENT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/admin/content/new", content, config);

    dispatch({ type: NEW_CONTENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEW_CONTENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Content Details
export const getContentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CONTENT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/content/${id}`);

    dispatch({
      type: CONTENT_DETAILS_SUCCESS,
      payload: data.content,
    });
  } catch (error) {
    dispatch({
      type: CONTENT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Product
export const deleteContent = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CONTENT_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/content/${id}`);

    dispatch({
      type: DELETE_CONTENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CONTENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Product
export const updateContent = (id, contentData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CONTENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/content/${id}`,
      contentData,
      config
    );

    dispatch({
      type: UPDATE_CONTENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CONTENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};