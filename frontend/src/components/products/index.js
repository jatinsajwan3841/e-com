import React from "react";
import Card from "../card";
import MetaData from "../../utils/metaData";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Search from "../search";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";
import "./index.scss";

const categories = ["check", "laptop", "mobile", "footwear"];

const Products = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [price, setPrice] = React.useState([0, 25000]);
    const [category, setCategory] = React.useState();
    const [ratings, setRatings] = React.useState(0);
    const [applyFilter, setApplyFilter] = React.useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const { products, productsCount, resultPerPage, filteredProductsCount } =
        useSelector((state) => state.products);

    React.useEffect(() => {
        dispatch(
            getProduct(params.keyword, currentPage, price, category, ratings)
        );
    }, [dispatch, params, currentPage, applyFilter]);

    return (
        <div className="products-container">
            <MetaData title="Products" />
            <h3 className="headline">Products</h3>
            <Search />
            <div className="products-filter-divider">
                {params.keyword && (
                    <fieldset className="filter-box">
                        <legend>Filters</legend>
                        Price:
                        <Slider
                            getAriaLabel={() => "Price"}
                            value={price}
                            onChange={(event, newPrice) => setPrice(newPrice)}
                            valueLabelDisplay="auto"
                            step={500}
                            min={0}
                            max={25000}
                        />
                        Categories:
                        <ul className="category-box">
                            {categories.map((v, i) => (
                                <li key={i} onClick={() => setCategory(v)}>
                                    {v}
                                </li>
                            ))}
                        </ul>
                        Ratings greater than:
                        <Slider
                            aria-label="Ratings"
                            value={ratings}
                            onChange={(event, newRating) =>
                                setRatings(newRating)
                            }
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={5}
                        />
                        <button
                            className="filter-button"
                            onClick={() => setApplyFilter((prev) => !prev)}
                        >
                            Apply
                        </button>
                    </fieldset>
                )}

                <div className="products-box">
                    <div className="products">
                        {products &&
                            products.map((product, index) => (
                                <Card key={index} props={product} />
                            ))}
                    </div>
                </div>
            </div>
            {resultPerPage <= filteredProductsCount && (
                <div className="paginationBox">
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={productsCount}
                        onChange={(e) => setCurrentPage(e)}
                        nextPageText="Next"
                        prevPageText="Prev"
                        firstPageText="1st"
                        lastPageText="Last"
                        itemClass="page-item"
                        linkClass="page-link"
                        activeClass="pageItemActive"
                        activeLinkClass="pageLinkActive"
                    />
                </div>
            )}
        </div>
    );
};

export default Products;
