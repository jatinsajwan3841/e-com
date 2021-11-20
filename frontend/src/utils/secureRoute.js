import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const SecureRoute = ({ children }) => {
    const { loading, isAuthenticated } = useSelector((state) => state.user);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate("/login");
        }
    }, [loading, isAuthenticated, navigate]);

    return <>{!loading && isAuthenticated && children}</>;
};

export default SecureRoute;
