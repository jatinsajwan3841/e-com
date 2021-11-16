import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Search = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let keyword = e.target.keyword.value;
        if (keyword) {
            navigate(`/products/${keyword}`);
        }
    };

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <div className="inp-content">
                <label htmlFor="search" className="label">
                    Please enter your search query
                </label>
                <input
                    type="text"
                    name="keyword"
                    placeholder=" "
                    minLength="2"
                    required
                />
                <hr className="border-bottom" />
                <span className="placeholder">search</span>
            </div>
            <input type="submit" value="search" className="form-button" />
        </form>
    );
};

export default Search;
