import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
};
const composedEnhancer = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;
