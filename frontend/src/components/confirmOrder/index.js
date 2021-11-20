import React from "react";
import MetaData from "../../utils/metaData";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axiosConfig";
import "./index.scss";
import { createOrder } from "../../actions/orderActions";

const ConfirmOrder = ({ setStep }) => {
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const uid = React.useRef();

    const uidGen = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );
    const shippingCharges = subtotal > 1000 ? 0 : 50;
    const tax = subtotal * 0.18;
    const totalPrice = subtotal + tax + shippingCharges;
    const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

    const proceedHandler = () => {
        const sessionData = {
            subtotal,
            shippingCharges,
            tax,
            totalPrice,
        };

        sessionStorage.setItem("orderInfo", JSON.stringify(sessionData));
        initTxn();
    };

    const initTxn = async () => {
        const { data } = await axios.post(
            "/api/v1/init-txn",
            { uid: uid.current, totalPrice: totalPrice },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        data.response = await JSON.parse(data.response);
        cont(data.response);
    };

    const cont = (response) => {
        var config = {
            root: "",
            flow: "DEFAULT",
            data: {
                orderId: uid.current /* update order id */,
                token: response.body.txnToken /* update token value */,
                tokenType: "TXN_TOKEN",
                amount: totalPrice /* update amount */,
            },
            merchant: {
                redirect: false,
            },
            handler: {
                notifyMerchant: function (eventName, data) {
                    console.log("notifyMerchant handler function called");
                    console.log("eventName => ", eventName);
                    console.log("data => ", data);
                },
                transactionStatus: function transactionStatus(paymentStatus) {
                    console.log("paymentStatus => ", paymentStatus);
                    if (paymentStatus.RESPCODE === "01") {
                        alert("Payment Successfull");
                        const paymentInfo = {
                            txn_id: paymentStatus.TXNID,
                            txnStatus: paymentStatus.TXNDATE,
                            txnDate: paymentStatus.TXNDATE,
                            gatewayName: paymentStatus.GATEWAYNAME,
                            txnMode: paymentStatus.PAYMENTMODE,
                        };
                        dispatch(createOrder(paymentInfo));
                        localStorage.removeItem("cartItems");
                        sessionStorage.removeItem("uid");
                        sessionStorage.removeItem("orderInfo");
                        navigate("/");
                        window.location.reload();
                    } else if (paymentStatus.RESPCODE === "400") {
                        alert("Payment Pending");
                        window.location.reload();
                    } else {
                        alert(paymentStatus.RESPMSG);
                        window.location.reload();
                    }
                },
            },
        };

        if (window.Paytm && window.Paytm.CheckoutJS) {
            // initialze configuration using init method
            window.Paytm.CheckoutJS.init(config)
                .then(function onSuccess() {
                    // after successfully updating configuration, invoke JS Checkout
                    window.Paytm.CheckoutJS.invoke();
                })
                .catch(function onError(error) {
                    console.log("error => ", error);
                });
        }
    };

    React.useEffect(() => {
        if (sessionStorage.getItem("uid")) {
            uid.current = sessionStorage.getItem("uid");
        } else {
            uid.current = uidGen();
            sessionStorage.setItem("uid", uid.current);
        }
    }, []);

    return (
        <div className="confirm-container">
            <MetaData title="Confirm Order" />
            <div className="left">
                <span className="title">Shipping Info</span>
                <div className="shipping-info-box">
                    <div className="shipping-info-item">
                        <p>
                            Name: {` `}
                            <span>{user.name}</span>
                        </p>
                    </div>
                    <div className="shipping-info-item">
                        <p>
                            Phone: {` `}
                            <span>{shippingInfo.phoneNumber}</span>
                        </p>
                    </div>
                    <div className="shipping-info-item">
                        <p>
                            Address: {` `}
                            <span>{address}</span>
                        </p>
                    </div>
                </div>
                <div className="cart-items-container">
                    <div className="title">Your Cart Items:</div>
                    {cartItems &&
                        cartItems.map((item, i) => (
                            <Link to={`/product/${item._id}`} key={i}>
                                <div className="cart-items">
                                    <img src={item.image} alt="Product" />

                                    {item.name}
                                    <span>
                                        {item.quantity} X ₹{item.price} ={" "}
                                        <b>₹{item.price * item.quantity}</b>
                                    </span>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
            <div className="right">
                <div className="title"> Order Summary</div>
                <div>
                    <div className="order-summary">
                        <p>Subtotal:</p>
                        <span>₹{subtotal}</span>
                    </div>
                    <div className="order-summary">
                        <p>Shipping Charges:</p>
                        <span>₹{shippingCharges}</span>
                    </div>
                    <div className="order-summary">
                        <p>GST:</p>
                        <span>₹{tax}</span>
                    </div>
                </div>
                <div className="order-summary total">
                    <p>
                        <b>Total:</b>
                    </p>
                    <span>₹{totalPrice}</span>
                </div>
                <button
                    type="button"
                    className="proceed"
                    onClick={proceedHandler}
                >
                    Proceed to payment
                </button>
            </div>
        </div>
    );
};

export default ConfirmOrder;
