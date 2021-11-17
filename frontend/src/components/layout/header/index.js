import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { logout } from "../../../actions/userAction";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <div className="header-container">
            <Link to="/" className="logo">
                <LocalMallRoundedIcon />
                <span className="text">Flip Outlet</span>
            </Link>
            <div className="right">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products" activestyle="active" end>
                    Products
                </NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {isAuthenticated ? (
                    <div onMouseOut={() => setOpen(false)}>
                        <div
                            className="avatar"
                            onMouseOver={() => setOpen(true)}
                        >
                            <img
                                src={user.avatar.url}
                                alt="profile"
                                className="dp"
                            />
                            <div className={`hidden ${open && "options"}`}>
                                {user.role === "admin" && (
                                    <Link to="/dashboard">Dashboard</Link>
                                )}
                                <Link to="/profile">Profile</Link>
                                <Link to="/cart">Cart</Link>
                                <span onClick={() => dispatch(logout())}>
                                    Log Out
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <NavLink to="/login">Sign In</NavLink>
                )}
            </div>
        </div>
    );
};

export default Header;
