import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./index.scss";

const Card = ({ props }) => {
    return (
        <Link to={`/product/${props._id}`} className="card-container">
            <img src={props.images[0].url} alt={props.name} />
            <p>{props.name}</p>
            <div className="star-rev">
                <ReactStars
                    activeColor="tomato"
                    isHalf={true}
                    edit={false}
                    size={20}
                    value={props.ratings}
                />{" "}
                <span>({props.numOfReviews} reviews)</span>
            </div>
            <span className="price">&#8377;{props.price}</span>
        </Link>
    );
};

export default Card;
