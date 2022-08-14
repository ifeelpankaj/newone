import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import {  clearErrors, getUnpaidOrderDetails } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const CashOrderDetail = ({ match }) => {
  const { cashondeliveryorder, error, loading } = useSelector((state) => state.unpaidOrderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getUnpaidOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{cashondeliveryorder && cashondeliveryorder._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{cashondeliveryorder.user && cashondeliveryorder.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {cashondeliveryorder.shippingInfo && cashondeliveryorder.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {cashondeliveryorder.shippingInfo &&
                      `${cashondeliveryorder.shippingInfo.address}, ${cashondeliveryorder.shippingInfo.city}, ${cashondeliveryorder.shippingInfo.state}, ${cashondeliveryorder.shippingInfo.pinCode}, ${cashondeliveryorder.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                

                <div>
                  <p>Amount:</p>
                  <span>{cashondeliveryorder.totalPrice && cashondeliveryorder.totalPrice}</span>
                </div>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                        cashondeliveryorder.orderStatus && cashondeliveryorder.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {cashondeliveryorder.orderStatus && cashondeliveryorder.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {cashondeliveryorder.orderItems &&
                  cashondeliveryorder.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CashOrderDetail;
