import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";
import PreprationZone from "./component/PrepareZone/PreprationZone.js";
import SearchContent from "./component/PrepareZone/SearchContent.js";
import ContentList from "./component/Admin/ContentList.js";
import NewContent from "./component/Admin/NewContent.js";
import UpdateContent from "./component/Admin/UpdateContent.js";
import PaperSection from "./component/solvedPaper/PaperSection.js";
import CsePapers from "./component/solvedPaper/CsePapers.js";
import SearchPaper from "./component/solvedPaper/searchPaper.js";
import PaperList from "./component/Admin/PaperList.js";
import NewPaper from "./component/Admin/NewPaper.js";
import UpdatePaper from "./component/Admin/UpdatePaper.js";
import MyCashOnDeliveryOrders from "./component/Order/MyCashOnDeliveryOrders.js";
import CashOrderDetail from "./component/Order/CashOrderDetail.js";
import UnpaidOrderList from "./component/Admin/UnpaidOrderList.js";
import ProcessUnpaidOrder from "./component/Admin/ProcessUnpaidOrder.js";
import UnpaidOrderSuccess from "./component/Cart/UnpaidOrderSuccess";
import JobUpdate from "./component/Jobs/JobUpdate.js";
import JobDetails from "./component/Jobs/JobDetails.js";
import NavOptions from "./component/layout/Header/NavOptions";
import ContentDetails from "./component/PrepareZone/ContentDetails";
import JobList from "./component/Admin/JobList";
import NewJob from "./component/Admin/NewJob";

















function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>

      

      {isAuthenticated && <UserOptions user={user} />}

      {/* {isAuthenticated && <NavOptions user={user} />} */}


      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}

      {/* <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}
      <Switch>


        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        {/* Job Portal */}

        <ProtectedRoute
          exact
          path="/job"
          component={JobUpdate}
        />
        <ProtectedRoute
          exact
          path="/admin/jobs"
          isAdmin={true}
          component={NewJob}
        />

        <ProtectedRoute
          exact
          path="/admin/alljobs"
          isAdmin={true}
          component={JobList}
        />
        <Route exact path="/job/:id" component={JobDetails} />


        {/* nothing */}

        <Route exact path="/searchContent" component={SearchContent} />

        <ProtectedRoute
          exact
          path="/prepare"
          // isAdmin={true}
          component={PreprationZone}
        />

        <ProtectedRoute
          exact
          path="/admin/contents"
          isAdmin={true}
          component={ContentList}
        />
        <ProtectedRoute
          exact
          path="/content/:id"
          component={ContentDetails}
        />

        <ProtectedRoute
          exact
          path="/admin/content"
          isAdmin={true}
          component={NewContent}
        />

        <ProtectedRoute
          exact
          path="/admin/content/:id"
          isAdmin={true}
          component={UpdateContent}
        />

        <ProtectedRoute
          exact
          path="/papers"
          component={PaperSection}
        />

        <ProtectedRoute
          exact
          path="/admin/papers"
          isAdmin={true}
          component={PaperList}
        />

        <ProtectedRoute
          exact
          path="/admin/paper"
          isAdmin={true}
          component={NewPaper}
        />


        <ProtectedRoute
          exact
          path="/admin/paper/:id"
          isAdmin={true}
          component={UpdatePaper}
        />

        <Route exact path="/searchPaper" component={SearchPaper} />

        <Route path="/papers/:keyword" component={CsePapers} />


        <Route path="/contents/:keyword" component={PreprationZone} />

        {/* Nothing ends */}
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />
        <ProtectedRoute
          exact
          path="/CSEPaperS"
          component={CsePapers}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/succes" component={UnpaidOrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/order" component={MyCashOnDeliveryOrders} />


        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

        {/* <ProtectedRoute exact path="/CashOnDeliveryO" component={CashOnDeliveryO} /> */}


        <ProtectedRoute exact path="/unpaid-order/:id" component={CashOrderDetail} />


        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />
        <ProtectedRoute
          exact
          path="/admin/unpaid-order"
          isAdmin={true}
          component={UnpaidOrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/unpaid-order/:id"
          isAdmin={true}
          component={ProcessUnpaidOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

        {/* Prepratin Zone Routes */}




        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Switch>
      <NavOptions />
      <Footer />
    </Router>
  );
}

export default App;
