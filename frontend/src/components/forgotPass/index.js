import React from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../actions/userAction";
import "./index.scss";

const ForgotPass = () => {
    const dispatch = useDispatch();
    const handlePassResetSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        dispatch(forgotPassword({ email: email }));
    };
    return (
        <div className="forget-pass-container">
            <form onSubmit={handlePassResetSubmit}>
                <h2 className="start">Forgot Password</h2>
                <div className="inp-content">
                    <label htmlFor="email" className="label">
                        Please enter your email
                    </label>
                    <input type="email" name="email" placeholder=" " required />
                    <hr className="border-bottom" />
                    <span className="placeholder">email</span>
                </div>
                <center>
                    <input
                        type="submit"
                        value="Submit"
                        className="form-button"
                    />
                </center>
            </form>
        </div>
    );
};

export default ForgotPass;
