const express = require("express");
const {
    newOrder,
    getOrderDetails,
    myOrders,
    getAllOrders,
    updateOrder,
    deleteOrder,
    getUserOrderDetails,
} = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
router.route("/order/:id").get(isAuthenticatedUser, getUserOrderDetails);

router
    .route("/admin/orders")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
router
    .route("/admin/order/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getOrderDetails)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
