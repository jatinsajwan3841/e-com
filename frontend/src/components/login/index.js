import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../../actions/userAction";
import "./index.scss";

const Login = () => {
    const [loginSelect, setLogin] = React.useState(true);
    const [dp, setDp] = React.useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        if (!loginSelect) {
            const name = e.target.name.value;
            const myForm = new FormData();
            myForm.set("name", name);
            myForm.set("email", email);
            myForm.set("password", pass);
            myForm.set("dp", dp);
            dispatch(register(myForm));
        } else {
            dispatch(login(email, pass));
        }
    };

    const handleDp = async (e) => {
        let tdp = e.target.files[0];
        if (tdp && tdp.size < 2000000) {
            const reader = new FileReader();
            reader.onload = (re) => {
                setDp(re.target.result);
            };
            reader.readAsDataURL(tdp);
        } else {
            alert("please choose file of size less than 2MB!");
        }
    };

    React.useEffect(() => {
        if (isAuthenticated) {
            navigate("/profile");
        }
    }, [isAuthenticated]);
    return (
        <div className="login-container">
            <div className="switch-tabs">
                <div className="tab" onClick={() => setLogin(true)}>
                    Login
                </div>
                <div className="tab" onClick={() => setLogin(false)}>
                    Register
                </div>
                <span className={`border-bottom ${!loginSelect && "shift"}`} />
            </div>
            <h3 className="start">
                Let's set go <span className="high">╰(*°▽°*)╯</span>{" "}
            </h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    {loginSelect ? (
                        <div className="avatar" />
                    ) : (
                        <>
                            <div className="avatar">
                                {dp && <img className="dp" alt="dp" src={dp} />}
                                <span className="upload" />
                            </div>
                            <input
                                type="file"
                                name="dp"
                                accept=".jpeg,.jpg,.png"
                                onChange={handleDp}
                            />
                        </>
                    )}
                </label>
                {!loginSelect && (
                    <div className="inp-content">
                        <label htmlFor="name" className="label">
                            Please enter your name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder=" "
                            minLength="3"
                            required
                        />
                        <hr className="border-bottom" />
                        <span className="placeholder">name</span>
                    </div>
                )}
                <div className="inp-content">
                    <label htmlFor="email" className="label">
                        Please enter your email
                    </label>
                    <input type="email" name="email" placeholder=" " required />
                    <hr className="border-bottom" />
                    <span className="placeholder">email</span>
                </div>
                <div className="inp-content">
                    <label htmlFor="password" className="label">
                        Please enter your password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder=" "
                        minLength="6"
                        required
                    />
                    <hr className="border-bottom" />
                    <span className="placeholder">password</span>
                </div>
                <center>
                    <input
                        type="submit"
                        value={loginSelect ? "Login" : "Register"}
                        className="form-button"
                    />
                </center>
                <Link to="/password/forgot" className="forgot-pass-text">
                    Forgot password ?
                </Link>
            </form>
        </div>
    );
};

export default Login;
