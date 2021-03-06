import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemsToCart, removeCartItem } from "../../actions/cartActions";

const CartItem = ({ prod }) => {
    const [count, setCount] = React.useState(prod.quantity);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (count !== prod.quantity) {
            dispatch(addItemsToCart(prod, count));
        }
    }, [count, dispatch, prod]);

    return (
        <div className="cart-item">
            <span
                className="prod"
                onClick={() => navigate(`/product/${prod._id}`)}
            >
                <img src={prod.image} className="prod-img" alt={prod.name} />
                <span className="prod-details">
                    <span className="prod-name">{prod.name}</span>
                    <span>
                        <span>Price: </span>
                        {`₹${prod.price}`}
                    </span>
                    <span
                        className="remove"
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(removeCartItem(prod._id));
                        }}
                    >
                        Remove
                    </span>
                </span>
            </span>
            <span className="quant">
                <div className="order-count">
                    <button
                        onClick={() => setCount((prev) => prev - 1)}
                        disabled={count === 1}
                    >
                        -
                    </button>
                    {count}
                    <button
                        onClick={() => setCount((prev) => prev + 1)}
                        disabled={count === prod.stock}
                    >
                        +
                    </button>
                </div>
            </span>
            <span className="subt">{`₹${prod.price * prod.quantity}`}</span>
        </div>
    );
};

export default CartItem;
