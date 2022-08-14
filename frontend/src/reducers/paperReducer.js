import {
  ALL_PAPER_FAIL,
  ALL_PAPER_REQUEST,
  ALL_PAPER_SUCCESS,
  CLEAR_ERRORS,
  DELETE_PAPER_FAIL,
  DELETE_PAPER_REQUEST,
  DELETE_PAPER_RESET,
  DELETE_PAPER_SUCCESS,
  NEW_PAPER_FAIL,
  NEW_PAPER_REQUEST,
  NEW_PAPER_RESET,
  NEW_PAPER_SUCCESS,
  PAPER_DETAILS_FAIL,
  PAPER_DETAILS_REQUEST,
  PAPER_DETAILS_SUCCESS,
  UPDATE_PAPER_FAIL,
  UPDATE_PAPER_REQUEST,
  UPDATE_PAPER_RESET,
  UPDATE_PAPER_SUCCESS
} from "../constants/paperConstant";






export const papersReducer = (state = { papers: [] }, action) => {
  switch (action.type) {
    case ALL_PAPER_REQUEST:
      //   case ADMIN_CONTENT_REQUEST:
      return {
        loading: true,
        papers: [],
      };
    case ALL_PAPER_SUCCESS:
      return {
        loading: false,
        papers: action.payload.papers,
        papersCount: action.payload.papersCount,
        resultPerPage: action.payload.resultPerPage,
        filteredPapersCount: action.payload.filteredPapersCount,
      };

    //   case ADMIN_PAPER_SUCCESS:
    //     return {
    //       loading: false,
    //       contents: action.payload,
    //     };
    case ALL_PAPER_FAIL:
      //   case ADMIN_CONTENT_FAIL:  
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
//Create Content

export const newPaperReducer = (state = { paper: {} }, action) => {
  switch (action.type) {
    case NEW_PAPER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_PAPER_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        paper: action.payload.paper,
      };
    case NEW_PAPER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PAPER_RESET:
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

export const paperDetailsReducer = (state = { paper: {} }, action) => {
  switch (action.type) {
    case PAPER_DETAILS_REQUEST:
      return {
        loading: true,
      };

    case PAPER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case PAPER_DETAILS_FAIL:
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

export const paperReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PAPER_REQUEST:
    case UPDATE_PAPER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PAPER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_PAPER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_PAPER_FAIL:
    case UPDATE_PAPER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PAPER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_PAPER_RESET:
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