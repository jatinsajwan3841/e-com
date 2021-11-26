import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./index.scss";

const Card = ({ props }) => {
    return (
        <Link to={`/product/${props._id}`} className="card-container">
            <img src={props.images[0].url} alt={props.name} />
            <p>{props.name}</p>

            <div className="star-rev">
                <Rating
                    name="read-only"
                    value={props.ratings}
                    precision={0.5}
                    size="small"
                    readOnly
                />{" "}
                <span>({props.numOfReviews} reviews)</span>
            </div>
            <span className="price">&#8377;{props.price}</span>
        </Link>
    );
};

export default Card;
