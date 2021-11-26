import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getOrderDetails } from "../../actions/orderActions";
import "../cart/index.scss";
import "./index.scss";

const Order = () => {
    const { order } = useSelector((state) => state.orderDetails);
    const { user } = useSelector((state) => state.user);
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getOrderDetails(params.id, user.role));
    }, [dispatch, user.role, params.id]);
    return (
        <div className="order-container">
            {order?._id && (
                <>
                    <div className="order-id">Order {order._id}</div>
                    <div className="base order-ship">
                        <div className="title">Shipping Details:</div>
                        Name: {order.user.name}
                        <br />
                        Phone: {order.shippingInfo.phoneNumber}
                        <br />
                        Address:{" "}
                        {`${order.shippingInfo.address},
                            ${order.shippingInfo.city},
                            ${order.shippingInfo.state},
                            ${order.shippingInfo.pinCode},
                        ${order.shippingInfo.country}`}
                    </div>
                    <div className="base order-pay">
                        <div className="title">Payment Info:</div>
                        Amount : {`₹ ${order.totalPrice}`}
                        <br />
                        Status : {order.paymentInfo.txnStatus}
                        <br />
                        Paid on :{order.paymentInfo.txnDate}
                        <br />
                    </div>
                    <div className="base order-stat">
                        <div className="title">Order Status:</div>
                        {order.orderStatus}
                    </div>
                    <div className="cart-container">
                        <div className="cart-item header">
                            <span className="prod">Product</span>
                            <span className="quant">Quantity</span>
                            <span className="subt head">Sub Total</span>
                        </div>
                        {order.orderItems.map((prod, index) => (
                            <div className="cart-item" key={index}>
                                <span
                                    className="prod"
                                    onClick={() =>
                                        navigate(`/product/${prod.product}`)
                                    }
                                >
                                    <img
                                        src={prod.image}
                                        className="prod-img"
                                        alt={prod.name}
                                    />
                                    <span className="prod-details">
                                        <span className="prod-name">
                                            {prod.name}
                                        </span>
                                        <span>
                                            <span>Price: </span>
                                            {`₹${prod.price}`}
                                        </span>
                                    </span>
                                </span>
                                <span className="quant">
                                    <div className="order-count">
                                        {prod.quantity}
                                    </div>
                                </span>
                                <span className="subt">{`₹${
                                    prod.price * prod.quantity
                                }`}</span>
                            </div>
                        ))}
                        <div className="cart-item">
                            <div className="gross-total">
                                <div>
                                    <span className="title">Gross Total:</span>
                                    <span className="price">
                                        {`₹${order.subtotal}`}
                                    </span>
                                </div>
                                <div>
                                    <span className="title">Tax:</span>
                                    <span className="price">{`₹${order.tax}`}</span>
                                </div>
                                <div>
                                    <span className="title">Shipping:</span>
                                    <span className="price">{`₹${order.shippingCharges}`}</span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <span className="gross-total">
                                <span className="title">Total:</span>
                                <span className="price">{`₹${order.totalPrice}`}</span>
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Order;
