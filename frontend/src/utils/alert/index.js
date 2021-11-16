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

    const timer = React.useRef();

    React.useEffect(() => {
        if (userError) {
            setShowAlert(userError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [userError]);
    React.useEffect(() => {
        if (profileError) {
            setShowAlert(profileError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [profileError]);
    React.useEffect(() => {
        if (productsError) {
            setShowAlert(productsError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [productsError]);
    React.useEffect(() => {
        if (productDetailsError) {
            setShowAlert(productDetailsError);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [productDetailsError]);
    React.useEffect(() => {
        if (forgotPass.error || forgotPass.message) {
            setShowAlert(forgotPass.error || forgotPass.message);
            dispatch({ type: "CLEAR_ERRORS" });
            timer.current = setTimeout(() => {
                setShowAlert(false);
            }, 4000);
        }
    }, [forgotPass.error, forgotPass.message]);

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
