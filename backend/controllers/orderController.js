const CashOnDeliveryOrder = require("../models/orderModel1");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create new Order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

// get Single Order
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// get logged in user  Orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });
  const cashondeliveryorders = await CashOnDeliveryOrder.find({user: req.user._id})
  res.status(200).json({
    success: true,
    orders,
    cashondeliveryorders,
  });
});

// get all Orders -- Admin
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// update Order Status -- Admin
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHander("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});
async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.Stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

// delete Order -- Admin
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
});


//Cash on delivery Order

exports.CashOnDeliveryOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    // paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const cashondeliveryorder = await CashOnDeliveryOrder.create({
    shippingInfo,
    orderItems,
    // paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    cashondeliveryorder,
  });
});

// get all Orders Cash on delivery Order -- Admin
exports.CashOnDeliveryAllOrder = catchAsyncErrors(async (req, res, next) => {
  const cashondeliveryorders = await CashOnDeliveryOrder.find();

  let totalAmount = 0;

  cashondeliveryorders.forEach((cashondeliveryorder) => {
    totalAmount += cashondeliveryorder.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    cashondeliveryorders,
  });
});

// update Order Status -- Admin
exports.updateCashOnDeliveryOrder = catchAsyncErrors(async (req, res, next) => {
  const cashondeliveryorder = await CashOnDeliveryOrder.findById(req.params.id);

  if (!cashondeliveryorder) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  if (cashondeliveryorder.cashondeliveryorderStatus === "Delivered") {
    return next(new ErrorHander("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    cashondeliveryorder.cashondeliveryorderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  cashondeliveryorder.cashondeliveryorderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    cashondeliveryorder.deliveredAt = Date.now();
  }

  await cashondeliveryorder.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});

// delete Order -- Admin
exports.deleteCashOnDeliveryOrder = catchAsyncErrors(async (req, res, next) => {
  const cashondeliveryorder = await CashOnDeliveryOrder.findById(req.params.id);

  if (!cashondeliveryorder) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  await cashondeliveryorder.remove();

  res.status(200).json({
    success: true,
  });
});

// get Single Order
exports.getSingleCashOnDeliveryOrder = catchAsyncErrors(async (req, res, next) => {
  const cashondeliveryorder = await CashOnDeliveryOrder.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!cashondeliveryorder) {
    return next(new ErrorHander("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    cashondeliveryorder,
  });
});