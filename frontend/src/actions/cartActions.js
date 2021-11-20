// add items to cart
export const addItemsToCart = (product, quantity) => (dispatch, getState) => {
    dispatch({
        type: "ADD_TO_CART",
        payload: {
            _id: product._id,
            name: product.name,
            price: product.price,
            image: product.image || product?.images[0]?.url,
            stock: product.stock,
            quantity,
        },
    });
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
};

// remove cart item
export const removeCartItem = (prod_id) => (dispatch, getState) => {
    dispatch({
        type: "REMOVE_CART_ITEM",
        payload: prod_id,
    });
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
};

// save shiiping info
export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
        type: "SAVE_SHIPPING_INFO",
        payload: data,
    });

    localStorage.setItem("shippingInfo", JSON.stringify(data));
};
