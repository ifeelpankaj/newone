const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
  CashOnDeliveryOrder,
  CashOnDeliveryAllOrder,
  updateCashOnDeliveryOrder,
  deleteCashOnDeliveryOrder,
  getSingleCashOnDeliveryOrder,

} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);



router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
.route("/admin/orders")
.get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
.route("/admin/order/:id")
.put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

// CASH ON DELIVERY ROUTES

router.route("/order1/new").post(isAuthenticatedUser, CashOnDeliveryOrder);

// router.route("/CashOnDeliveryOrders/me").get( myCashOnDeliveryOrders);

router.route("/CashOnDeliveryOrders/:id").get(isAuthenticatedUser, getSingleCashOnDeliveryOrder);


router
.route("/admin/CashOnDeliveryOrders")
.get(isAuthenticatedUser, authorizeRoles("admin"), CashOnDeliveryAllOrder);

router
.route("/admin/CashOnDeliveryOrders/:id")
.put(isAuthenticatedUser, authorizeRoles("admin"), updateCashOnDeliveryOrder)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCashOnDeliveryOrder);


module.exports = router;
