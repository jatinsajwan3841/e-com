import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../actions/userAction";
import { useParams, useNavigate } from "react-router-dom";
import "./index.scss";

const ResetPass = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const { success } = useSelector((state) => state.forgotPassword);
    const handlePassResetSubmit = (e) => {
        e.preventDefault();
        const token = params.token;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password !== confirmPassword) {
            alert("Password did not match!");
            return;
        }
        dispatch(
            resetPassword(token, {
                password: password,
                confirmPassword: confirmPassword,
            })
        );
    };
    React.useEffect(() => {
        if (success) {
            alert("password updated successfully");
            navigate("/login");
        }
    }, [success]);
    return (
        <div className="reset-pass-container">
            <form onSubmit={handlePassResetSubmit}>
                <h2 className="start">Reset Password</h2>
                <div className="inp-content">
                    <label htmlFor="password" className="label">
                        Please enter new password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder=" "
                        minLength="6"
                        required
                    />
                    <hr className="border-bottom" />
                    <span className="placeholder">new password</span>
                </div>
                <div className="inp-content">
                    <label htmlFor="password" className="label">
                        Please confirm new password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder=" "
                        minLength="6"
                        required
                    />
                    <hr className="border-bottom" />
                    <span className="placeholder">confirm password</span>
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

export default ResetPass;
