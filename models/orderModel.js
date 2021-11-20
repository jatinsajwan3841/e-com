const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required: [true, "Please enter your address"],
        },
        city: {
            type: String,
            required: [true, "Please enter your city"],
        },
        state: {
            type: String,
            required: [true, "Please enter your state"],
        },
        country: {
            type: String,
            required: [true, "Please enter your country"],
        },
        pinCode: {
            type: Number,
            required: [true, "Please enter your pin code"],
        },
        phoneNumber: {
            type: Number,
            required: [true, "Please enter your phone number"],
        },
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            product: {
                type: mongoose.Schema.ObjectId,
                ref: "Product",
                required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    paymentInfo: {
        txn_id: {
            type: String,
            required: true,
        },
        txnStatus: {
            type: String,
            required: true,
        },
        txnDate: {
            type: Date,
            required: true,
        },
        gatewayName: {
            type: String,
        },
        txnMode: {
            type: String,
        },
    },
    subtotal: {
        type: Number,
        default: 0,
        required: true,
    },
    tax: {
        type: Number,
        default: 0,
        required: true,
    },
    shippingCharges: {
        type: Number,
        default: 0,
        required: true,
    },
    totalPrice: {
        type: Number,
        default: 0,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "Processing",
    },
    deliveredAt: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Order", orderSchema);
