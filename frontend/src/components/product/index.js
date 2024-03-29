import React from "react";
import MetaData from "../../utils/metaData";
import { getProductDetails, newReview } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { addItemsToCart } from "../../actions/cartActions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "./index.scss";

const Product = () => {
    const [count, setCount] = React.useState(1);
    const [reviewOpen, setReviewOpen] = React.useState(false);
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = React.useState("");

    const { product } = useSelector((state) => state.productDetails);
    const { isAuthenticated } = useSelector((state) => state.user);
    const { loading } = useSelector((state) => state.newReview);

    const dispatch = useDispatch();
    const params = useParams();

    const cartHandler = () => {
        if (count) {
            dispatch(addItemsToCart(product, count));
            alert("Product added to cart!");
        }
    };

    const reviewSubmitHandler = () => {
        const data = {
            productID: product._id,
            rating: rating,
            comment: comment,
        };

        dispatch(newReview(data));

        setReviewOpen(false);
        setRating(0);
        setComment("");
    };

    React.useEffect(() => {
        dispatch(getProductDetails(params.id));
    }, [dispatch, params.id, loading]);
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
                                <Rating
                                    name="read-only"
                                    value={product.ratings}
                                    precision={0.5}
                                    readOnly
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
                                    {product.stock > 0 ? count : 0}
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
                            {isAuthenticated === true && (
                                <div className="details">
                                    <button
                                        className="submit-review"
                                        onClick={() => setReviewOpen(true)}
                                    >
                                        Submit Review
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <Dialog
                        aria-labelledby="simple-dialog-title"
                        open={reviewOpen}
                        onClose={() => setReviewOpen(false)}
                    >
                        <DialogTitle>Submit Review</DialogTitle>
                        <DialogContent className="dialog">
                            <Rating
                                onChange={(e) => setRating(e.target.value)}
                                value={rating}
                                size="large"
                            />

                            <textarea
                                className="dialog-text"
                                rows="8"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={() => setReviewOpen(false)}
                                color="secondary"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={reviewSubmitHandler}
                                color="primary"
                            >
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <div className="reviews-container">
                        <div className="head">Reviews ●'◡'●</div>
                        <div className="reviews">
                            {product.numOfReviews > 0 ? (
                                product.reviews.map((val, key) => (
                                    <div key={key} className="review">
                                        <div className="name">
                                            <span className="avatar"> </span>
                                            {val.name}
                                        </div>
                                        <div>
                                            <Rating
                                                name="read-only"
                                                value={val.rating}
                                                precision={0.5}
                                                size="small"
                                                readOnly
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
