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
            <div className="home-products">
                {products &&
                    products.map((product, index) => (
                        <Card key={index} props={product} />
                    ))}
            </div>
        </>
    );
};

export default Home;
