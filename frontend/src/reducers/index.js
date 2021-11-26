import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import {
    allOrdersReducer,
    myOrdersReducer,
    newOrderReducer,
    orderDetailsReducer,
    orderEditReducer,
} from "./orderReducer";
import { productReducer, productDetailsReducer } from "./productReducer";
import {
    forgotPasswordReducer,
    profileReducer,
    userReducer,
} from "./userReducer";

const rootReducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    orderEdit: orderEditReducer,
});

export default rootReducer;
