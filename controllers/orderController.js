const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandle = require("../middleware/asyncError");

// create new order
exports.newOrder = asyncErrorHandle(async (req, res, next) => {
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
        user: req.user._id,
        paidAt: Date.now(),
    });

    res.status(201).json({
        success: true,
        order,
    });
});

// get single order
exports.getOrderDetails = asyncErrorHandle(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );
    if (!order) {
        return next(new ErrorHandler("No order found with given ID", 404));
    }
    res.status(200).json({
        success: true,
        order,
    });
});

// get logged user orders
exports.myOrders = asyncErrorHandle(async (req, res, next) => {
    const order = await Order.find({ user: req.user._id });

    res.status(200).json({
        success: true,
        order,
    });
});

// get all orders --admin
exports.getAllOrders = asyncErrorHandle(async (req, res, next) => {
    const order = await Order.find().populate("user", "name email");

    res.status(200).json({
        success: true,
        order,
    });
});

// update order status --admin
exports.updateOrder = asyncErrorHandle(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHander("Order not found with this Id", 404));
    }

    if (order.status === "Delivered") {
        return next(new ErrorHandler("Order already delivered", 400));
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
        order,
    });
});

const updateStock = async (id, quantity) => {
    const product = await Product.findById(id);

    product.stock -= quantity;

    await product.save({ validateBeforeSave: false });
};

// delete order --admin
exports.deleteOrder = asyncErrorHandle(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHander("Order not found with this Id", 404));
    }
    await order.remove();

    res.status(200).json({
        success: true,
    });
});
