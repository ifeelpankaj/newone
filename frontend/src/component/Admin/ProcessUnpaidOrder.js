import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SideBar from "./Sidebar";
import {
  clearErrors,
 getUnpaidOrderDetails,
  updateUnpaidOrder,
} from "../../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@material-ui/core";
import {UPDATE_UNPAID_ORDER_RESET } from "../../constants/orderConstants";
import "./processOrder.css";

const ProcessUnpaidOrder = ({ history, match }) => {
  const { cashondeliveryorder, error, loading } = useSelector((state) => state.unpaidOrderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.unpaidOrder);

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateUnpaidOrder(match.params.id, myForm));
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Order Updated Successfully");
      dispatch({ type: UPDATE_UNPAID_ORDER_RESET });
    }

    dispatch(getUnpaidOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id, isUpdated, updateError]);

  return (
    <Fragment>
      <MetaData title="Process Order" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display: cashondeliveryorder.orderStatus === "Delivered" ? "block" : "grid",
              }}
            >
              <div>
                <div className="confirmshippingArea">
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
                      <p
                        className={
                            cashondeliveryorder.paymentInfo &&
                            cashondeliveryorder.paymentInfo.status === "succeeded"
                            ? "greenColor"
                            : "redColor"
                        }
                      >
                        {cashondeliveryorder.paymentInfo &&
                        cashondeliveryorder.paymentInfo.status === "succeeded"
                          ? "PAID"
                          : "NOT PAID"}
                      </p>
                    </div>

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
                <div className="confirmCartItems">
                  <Typography>Your Cart Items:</Typography>
                  <div className="confirmCartItemsContainer">
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
              {/*  */}
              <div
                style={{
                  display: cashondeliveryorder.orderStatus === "Delivered" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Process Order</h1>

                  <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Choose Options</option>
                      {cashondeliveryorder.orderStatus === "Processing" && (
                        <option value="Shipped">Shipped</option>
                      )};

                      {cashondeliveryorder.orderStatus === "Shipped" && (
                        <option value="Delivered">Delivered</option>
                      )};
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    Process
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessUnpaidOrder;
