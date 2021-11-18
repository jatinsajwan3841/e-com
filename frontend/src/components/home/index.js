import React from "react";
import Card from "../card";
import MetaData from "../../utils/metaData";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";

const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    React.useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    return (
        <>
            <MetaData title="Flip Outlet" />
            <div className="home">
                <div className="top">
                    <div className="divide first">
                        Meet the Products that define you!
                    </div>
                    <div className="divide">
                        <img
                            src="https://cdn.dribbble.com/users/2151922/screenshots/6969955/untitled-2.gif"
                            alt="shopping"
                        />
                    </div>
                </div>
                <div className="prod-text">Top Products</div>

                <div className="home-products">
                    {products &&
                        products.map((product, index) => (
                            <Card key={index} props={product} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Home;
