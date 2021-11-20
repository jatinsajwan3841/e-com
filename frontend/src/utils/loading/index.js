import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

const Loading = () => {
    const [loading, setLoading] = React.useState(false);
    const userLoad = useSelector((state) => state.user.loading);
    const profileLoad = useSelector((state) => state.profile.loading);
    const productsLoad = useSelector((state) => state.products.loading);
    const productDetailsLoad = useSelector(
        (state) => state.productDetails.loading
    );
    const forgotPassLoad = useSelector((state) => state.forgotPassword.loading);
    const newOrderLoad = useSelector((state) => state.newOrder.loading);

    React.useEffect(() => {
        if (
            userLoad ||
            profileLoad ||
            productsLoad ||
            productDetailsLoad ||
            forgotPassLoad ||
            newOrderLoad
        ) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [
        userLoad,
        profileLoad,
        productsLoad,
        productDetailsLoad,
        forgotPassLoad,
        newOrderLoad,
    ]);

    return (
        <>
            {loading && (
                <div className="loading-container">
                    <span className="loading" />
                </div>
            )}
        </>
    );
};

export default Loading;
