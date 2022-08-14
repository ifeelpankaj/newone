import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
  MY_UNPAID_ORDERS_REQUEST,
  MY_UNPAID_ORDERS_FAIL,
  MY_UNPAID_ORDERS_SUCCESS,
  UNPAID_ORDER_DETAILS_REQUEST,
  UNPAID_ORDER_DETAILS_SUCCESS,
  UNPAID_ORDER_DETAILS_FAIL,
  DELETE_UNPAID_ORDER_REQUEST,
  DELETE_UNPAID_ORDER_SUCCESS,
  DELETE_UNPAID_ORDER_FAIL,
  UPDATE_UNPAID_ORDER_REQUEST,
  UPDATE_UNPAID_ORDER_SUCCESS,
  UPDATE_UNPAID_ORDER_FAIL,
  ALL_UNPAID_ORDERS_REQUEST,
  ALL_UNPAID_ORDERS_SUCCESS,
  ALL_UNPAID_ORDERS_FAIL,
  CREATE_UNPAID_ORDER_REQUEST,
  CREATE_UNPAID_ORDER_SUCCESS,
  CREATE_UNPAID_ORDER_FAIL,
} from "../constants/orderConstants";

import axios from "axios";

// Create Order
export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};




// My Orders
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/orders/me");

    dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Orders (admin)
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/orders");

    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Order
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/order/${id}`,
      order,
      config
    );

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//place cash on delvivery


//Cash On Delivery Order
export const cashOrder = (cashondeliveryorder) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_UNPAID_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/order1/new", cashondeliveryorder, config);

    dispatch({ type: CREATE_UNPAID_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_UNPAID_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// My Orders
export const myCashOnDeliveryOrders = () => async (dispatch) => {
  try {
    dispatch({ type: MY_UNPAID_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/orders/me");

    dispatch({ type: MY_UNPAID_ORDERS_SUCCESS, payload: data.cashondeliveryorders });
  } catch (error) {
    dispatch({
      type: MY_UNPAID_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Order Details
export const getUnpaidOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: UNPAID_ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/CashOnDeliveryOrders/${id}`);

    dispatch({ type: UNPAID_ORDER_DETAILS_SUCCESS, payload: data.cashondeliveryorder });
  } catch (error) {
    dispatch({
      type: UNPAID_ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Orders (admin)
export const getAllUnpaidOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_UNPAID_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/admin/CashOnDeliveryOrders");

    dispatch({ type: ALL_UNPAID_ORDERS_SUCCESS, payload: data.cashondeliveryorders });
  } catch (error) {
    dispatch({
      type: ALL_UNPAID_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Order
export const updateUnpaidOrder = (id, cashondeliveryorder) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_UNPAID_ORDER_REQUEST});

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/CashOnDeliveryOrders/${id}`,
      cashondeliveryorder,
      config
    );

    dispatch({ type: UPDATE_UNPAID_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_UNPAID_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Order
export const deleteUnpaidOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_UNPAID_ORDER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/CashOnDeliveryOrders/${id}`);

    dispatch({ type: DELETE_UNPAID_ORDER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_UNPAID_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
