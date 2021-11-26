import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
const Alert = () => {
    const [showAlert, setShowAlert] = React.useState(false);
    const dispatch = useDispatch();
    const userError = useSelector((state) => state.user.error);
    const profileError = useSelector((state) => state.profile.error);
    const productsError = useSelector((state) => state.products.error);
    const productDetailsError = useSelector(
        (state) => state.productDetails.error
    );
    const forgotPass = useSelector((state) => state.forgotPassword);
    const newOrderError = useSelector((state) => state.newOrder.error);
    const myOrdersError = useSelector((state) => state.myOrders.error);
    const orderDetailsError = useSelector((state) => state.orderDetails.error);
    const allOrdersError = useSelector((state) => state.allOrders.error);
    const orderEditError = useSelector((state) => state.orderEdit.error);

    const timer = React.useRef();

    React.useEffect(() => {
        if (userError) {
            setShowAlert(userError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [userError, dispatch]);
    React.useEffect(() => {
        if (profileError) {
            setShowAlert(profileError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [profileError, dispatch]);
    React.useEffect(() => {
        if (productsError) {
            setShowAlert(productsError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [productsError, dispatch]);
    React.useEffect(() => {
        if (productDetailsError) {
            setShowAlert(productDetailsError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [productDetailsError, dispatch]);
    React.useEffect(() => {
        if (forgotPass.error || forgotPass.message) {
            setShowAlert(forgotPass.error || forgotPass.message);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [forgotPass.error, forgotPass.message, dispatch]);
    React.useEffect(() => {
        if (newOrderError) {
            setShowAlert(newOrderError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [newOrderError, dispatch]);
    React.useEffect(() => {
        if (myOrdersError) {
            setShowAlert(myOrdersError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [myOrdersError, dispatch]);
    React.useEffect(() => {
        if (orderDetailsError) {
            setShowAlert(orderDetailsError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [orderDetailsError, dispatch]);
    React.useEffect(() => {
        if (allOrdersError) {
            setShowAlert(allOrdersError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [allOrdersError, dispatch]);
    React.useEffect(() => {
        if (orderEditError) {
            setShowAlert(orderEditError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [orderEditError, dispatch]);

    React.useEffect(() => {
        timer.current = setTimeout(() => {
            setShowAlert(false);
        }, 4000);
        return clearTimeout(timer.current);
    }, []);

    return (
        <div className={`alert-container ${showAlert && "show"}`}>
            <div className="alert">{showAlert}</div>
        </div>
    );
};

export default Alert;
