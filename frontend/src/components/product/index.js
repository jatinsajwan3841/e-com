import React from "react";
import MetaData from "../../utils/metaData";
import { getProductDetails } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./index.scss";
import { addItemsToCart } from "../../actions/cartActions";

const Product = () => {
    const [count, setCount] = React.useState(0);
    const dispatch = useDispatch();
    const params = useParams();
    const { product } = useSelector((state) => state.productDetails);

    const cartHandler = () => {
        if (count) {
            dispatch(addItemsToCart(product, count));
        }
    };

    React.useEffect(() => {
        dispatch(getProductDetails(params.id));
    }, [dispatch, params.id]);
    return (
        <>
            {product && (
                <>
                    <MetaData title={product.name} />
                    <div className="product-container">
                        <div className="product-image-holder">
                            <img
                                src={product.images?.[0].url}
                                className="product-image"
                                alt={product.name}
                            />
                        </div>
                        <div className="product-details">
                            <div className="details">
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-id">
                                    Product ID: {product._id}
                                </div>
                            </div>
                            <div className="details">
                                <ReactStars
                                    activeColor="tomato"
                                    isHalf={true}
                                    edit={false}
                                    size={20}
                                    value={product.ratings}
                                />
                            </div>
                            <div className="details">
                                <div className="amount">
                                    &#8377;{product.price}
                                </div>
                                <div className="order-count">
                                    <button
                                        onClick={() =>
                                            setCount((prev) => prev - 1)
                                        }
                                        disabled={count === 0}
                                    >
                                        -
                                    </button>
                                    {count}
                                    <button
                                        onClick={() =>
                                            setCount((prev) => prev + 1)
                                        }
                                        disabled={count === product.stock}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="add-to-cart"
                                        disabled={count === 0}
                                        onClick={cartHandler}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                            <div className="details">
                                Status:{" "}
                                {product.stock > 0 ? (
                                    <span className="green">In stock</span>
                                ) : (
                                    <span className="tomato">Out of stock</span>
                                )}
                            </div>
                            <div className="details">
                                Description: {product.description}
                            </div>
                        </div>
                    </div>
                    <div className="reviews-container">
                        <div className="head">Reviews</div>
                        <div className="reviews">
                            {product.numOfReviews > 0 ? (
                                product.reviews.map((val, key) => (
                                    <div key={key} className="review">
                                        <div className="name">
                                            <span className="avatar">😃</span>
                                            {val.name}
                                        </div>
                                        <div>
                                            <ReactStars
                                                activeColor="tomato"
                                                isHalf={true}
                                                edit={false}
                                                size={20}
                                                value={val.rating}
                                            />
                                        </div>
                                        <div className="comment">
                                            {val.comment}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-reviews">No Reviews Yet</div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Product;
