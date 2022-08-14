import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders, getAllUnpaidOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";
import { getAdminContent } from "../../actions/contentAction.js";
import {  getPapers } from "../../actions/paperAction.js";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { contents } = useSelector((state) => state.contents);

  const { orders } = useSelector((state) => state.allOrders);

  const{cashondeliveryorders} = useSelector((state) => state.allUnpaidOrder);

  const { users } = useSelector((state) => state.allUsers);

  const { papers } = useSelector((state) => state.papers);


  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
    dispatch(getAdminContent());
    dispatch(getPapers());
    dispatch(getAllUnpaidOrders());

  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });


  // let totalAmount = 0;
  // cashondeliveryorders &&
  // cashondeliveryorders.forEach((item)=>{
  //   totalAmount +=item.totalPrize
  // });

  // let alltotal = (totalAmount)+(total)

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  let allordertotalprize = (orders && orders.length) + (cashondeliveryorders && cashondeliveryorders.length)
  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/papers">
              <p>Solved Paper</p>
              <p>{papers && papers.length}</p>
            </Link>
            
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{allordertotalprize}</p>
            </Link>
            <Link to="/admin/contents" >
              <p>Contents</p>
              <p>{contents && contents.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
