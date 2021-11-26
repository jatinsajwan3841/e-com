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
    const myOrdersLoad = useSelector((state) => state.myOrders.loading);
    const orderDetailsLoad = useSelector((state) => state.orderDetails.loading);
    const allOrdersLoad = useSelector((state) => state.allOrders.loading);
    const orderEditLoad = useSelector((state) => state.orderEdit.loading);

    React.useEffect(() => {
        if (
            userLoad ||
            profileLoad ||
            productsLoad ||
            productDetailsLoad ||
            forgotPassLoad ||
            newOrderLoad ||
            myOrdersLoad ||
            orderDetailsLoad ||
            allOrdersLoad ||
            orderEditLoad
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
        myOrdersLoad,
        orderDetailsLoad,
        allOrdersLoad,
        orderEditLoad,
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
