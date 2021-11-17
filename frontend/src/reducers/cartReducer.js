export const cartReducer = (
    state = { cartItems: [], shippingInfo: {} },
    action
) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;
            const isItemExist = state.cartItems.find(
                (product) => product._id === item._id
            );
            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((product) =>
                        product._id === isItemExist._id ? item : product
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case "REMOVE_CART_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (prod) => prod._id !== action.payload
                ),
            };
        case "SAVE_SHIPPING_INFO":
            return {
                ...state,
                shippingInfo: action.payload,
            };

        default:
            return state;
    }
};
