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
        localStorage.removeItem("cartItems");
        sessionStorage.removeItem("orderInfo");
        dispatch({ type: "CLEAR_CART" });
    } catch (error) {
        dispatch({
            type: "CREATE_ORDER_FAIL",
            payload: error.response.data.message,
        });
    }
};

// My Orders
export const myOrders = () => async (dispatch) => {
    try {
        dispatch({ type: "MY_ORDERS_REQUEST" });

        const { data } = await axios.get("/api/v1/orders/me");

        dispatch({ type: "MY_ORDERS_SUCCESS", payload: data.orders });
    } catch (error) {
        dispatch({
            type: "MY_ORDERS_FAIL",
            payload: error.response.data.message,
        });
    }
};

// Get All Orders (admin)
export const getAllOrders = () => async (dispatch) => {
    try {
        dispatch({ type: "ALL_ORDERS_REQUEST" });

        const { data } = await axios.get("/api/v1/admin/orders");

        dispatch({ type: "ALL_ORDERS_SUCCESS", payload: data.orders });
    } catch (error) {
        dispatch({
            type: "ALL_ORDERS_FAIL",
            payload: error.response.data.message,
        });
    }
};

// Update Order
export const updateOrder = (id, order) => async (dispatch) => {
    try {
        dispatch({ type: "UPDATE_ORDER_REQUEST" });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.put(
            `/api/v1/admin/order/${id}`,
            order,
            config
        );

        dispatch({ type: "UPDATE_ORDER_SUCCESS", payload: data.success });
    } catch (error) {
        dispatch({
            type: "UPDATE_ORDER_FAIL",
            payload: error.response.data.message,
        });
    }
};

// Delete Order
export const deleteOrder = (id) => async (dispatch) => {
    try {
        dispatch({ type: "DELETE_ORDER_REQUEST" });

        const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

        dispatch({ type: "DELETE_ORDER_SUCCESS", payload: data.success });
    } catch (error) {
        dispatch({
            type: "DELETE_ORDER_FAIL",
            payload: error.response.data.message,
        });
    }
};

// Get Order Details
export const getOrderDetails = (id, role) => async (dispatch) => {
    try {
        dispatch({ type: "ORDER_DETAILS_REQUEST" });
        const url =
            role === "admin"
                ? `/api/v1/admin/order/${id}`
                : `/api/v1/order/${id}`;
        const { data } = await axios.get(url);

        dispatch({ type: "ORDER_DETAILS_SUCCESS", payload: data.order });
    } catch (error) {
        dispatch({
            type: "ORDER_DETAILS_FAIL",
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
};
