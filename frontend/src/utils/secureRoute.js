import React from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/layout/loader";
import { useSelector } from "react-redux";

const SecureRoute = ({ children, isAdmin }) => {
    const { loading, isAuthenticated, user } = useSelector(
        (state) => state.user
    );
    const navigate = useNavigate();
    React.useEffect(() => {
        if (
            (!loading && isAuthenticated === false) ||
            (isAdmin === true && user.role !== "admin")
        ) {
            navigate("/login");
        }
    }, [loading, isAuthenticated, navigate, isAdmin, user?.role]);

    return <>{!loading && isAuthenticated ? children : <Loader />}</>;
};

export default SecureRoute;
