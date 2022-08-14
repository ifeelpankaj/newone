import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  productReviewsReducer,
  productsReducer,
  reviewReducer,
} from "./reducers/productReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";

import { cartReducer } from "./reducers/cartReducer";
import {
  allOrdersReducer,
  allUnpiadOrdersReducer,
  myCashOnDeliveryOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  newUnpaidOrderReducer,
  orderDetailsReducer,
  orderReducer,
  unpaidOrderDetailsReducer,
  unpaidOrderReducer,
} from "./reducers/orderReducer";
import {
  contentsReducer,
  contentDetailsReducer,
  contentReducer,
  newContentReducer
} from "./reducers/contentReducer";
import { newPaperReducer, paperDetailsReducer, paperReducer, papersReducer } from "./reducers/paperReducer";
import { jobDetailsReducer, jobReducer, jobsReducer, newJobReducer } from "./reducers/jobReducer";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  newUnpaidOrder:newUnpaidOrderReducer,
  myOrders: myOrdersReducer,
  myCashOnDeliveryOrders:myCashOnDeliveryOrdersReducer,
  unpaidOrderDetails:unpaidOrderDetailsReducer,
  orderDetails: orderDetailsReducer,
  newReview: newReviewReducer,
  newProduct: newProductReducer,
  product: productReducer,
  allOrders: allOrdersReducer,
  allUnpaidOrder:allUnpiadOrdersReducer,
  order: orderReducer,
  unpaidOrder:unpaidOrderReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  productReviews: productReviewsReducer,
  review: reviewReducer,
  contentDetails: contentDetailsReducer,
  contents: contentsReducer,
  content: contentReducer,
  newContent: newContentReducer,
  papers: papersReducer,
  paperDetails: paperDetailsReducer,
  paper: paperReducer,
  newPaper: newPaperReducer,
  //JOBS
  jobs:jobsReducer,
  jobDetails:jobDetailsReducer,
  job:jobReducer,
  newJob:newJobReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
