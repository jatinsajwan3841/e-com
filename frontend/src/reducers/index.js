import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { newOrderReducer } from "./orderReducer";
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
});

export default rootReducer;
