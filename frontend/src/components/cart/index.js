import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../cartItem";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "./index.scss";

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <RemoveShoppingCartIcon className="icon" /> uh oh, let's add
                    something to the cart!
                    <Link to="/products">
                        <button type="button" className="return">
                            View Products
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="cart-container">
                    <div className="cart-item header">
                        <span className="prod">Product</span>
                        <span className="quant">Quantity</span>
                        <span className="subt head">Sub Total</span>
                    </div>
                    {cartItems.map((prod, i) => (
                        <CartItem prod={prod} key={i} />
                    ))}
                    <div className="cart-item">
                        <span className="gross-total">
                            <span className="title">Gross Total:</span>
                            <span className="price">
                                {`₹${cartItems.reduce(
                                    (acc, item) =>
                                        acc + item.quantity * item.price,
                                    0
                                )}`}
                            </span>
                        </span>
                    </div>
                    <Link to="/login?redirect=/shipping" className="cart-item">
                        <button type="button" className="checkout">
                            Check Out
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
};

export default Cart;
