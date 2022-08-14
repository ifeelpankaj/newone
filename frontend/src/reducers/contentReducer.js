import {
  CLEAR_ERRORS,
  CONTENT_DETAILS_FAIL,
  CONTENT_DETAILS_REQUEST,
  CONTENT_DETAILS_SUCCESS,
  ALL_CONTENT_REQUEST,
  ALL_CONTENT_SUCCESS,
  ALL_CONTENT_FAIL,
  ADMIN_CONTENT_REQUEST,
  ADMIN_CONTENT_SUCCESS,
  ADMIN_CONTENT_FAIL,
  UPDATE_CONTENT_REQUEST,
  UPDATE_CONTENT_SUCCESS,
  UPDATE_CONTENT_RESET,
  UPDATE_CONTENT_FAIL,
  DELETE_CONTENT_REQUEST,
  DELETE_CONTENT_SUCCESS,
  DELETE_CONTENT_RESET,
  DELETE_CONTENT_FAIL,
  NEW_CONTENT_REQUEST,
  NEW_CONTENT_FAIL,
  NEW_CONTENT_RESET,
  NEW_CONTENT_SUCCESS

} from "../constants/prepareConstant";



//Create Content

export const newContentReducer = (state = { content: {} }, action) => {
  switch (action.type) {
    case NEW_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_CONTENT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        content: action.payload.content,
      };
    case NEW_CONTENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CONTENT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const contentsReducer = (state = { contents: [] }, action) => {
  switch (action.type) {
    case ALL_CONTENT_REQUEST:
    case ADMIN_CONTENT_REQUEST:
      return {
        loading: true,
        contents: [],
      };
    case ALL_CONTENT_SUCCESS:
      return {
        loading: false,
        contents: action.payload.contents,
        contentsCount: action.payload.contentsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredContentsCount: action.payload.filteredContentsCount,
      };

    case ADMIN_CONTENT_SUCCESS:
      return {
        loading: false,
        contents: action.payload,
      };
    case ALL_CONTENT_FAIL:
    case ADMIN_CONTENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};


export const contentDetailsReducer = (state = { content: {} }, action) => {
  switch (action.type) {
    case CONTENT_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case CONTENT_DETAILS_SUCCESS:
      return {
        loading: false,
        content: action.payload,
      };

    case CONTENT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

//Delete & Update

export const contentReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CONTENT_REQUEST:
    case UPDATE_CONTENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_CONTENT_FAIL:
    case UPDATE_CONTENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CONTENT_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_CONTENT_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};