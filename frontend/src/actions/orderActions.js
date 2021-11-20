import axios from "../utils/axiosConfig";

// Create Order
export const createOrder = (paymentInfo) => async (dispatch) => {
    try {
        dispatch({ type: "CREATE_ORDER_REQUEST" });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
        const orderItems = JSON.parse(localStorage.getItem("cartItems"));
        orderItems.forEach((item) => {
            item.product = item._id;
            delete item._id;
        });

        const order = {
            shippingInfo: JSON.parse(localStorage.getItem("shippingInfo")),
            orderItems: orderItems,
            paymentInfo: paymentInfo,
            ...orderInfo,
        };
        const { data } = await axios.post("/api/v1/order/new", order, config);

        dispatch({ type: "CREATE_ORDER_SUCCESS", payload: data });
    } catch (error) {
        dispatch({
            type: "CREATE_ORDER_FAIL",
            payload: error.response.data.message,
        });
    }
};
