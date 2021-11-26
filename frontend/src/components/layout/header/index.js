import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { logout } from "../../../actions/userAction";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const [hideHead, setHideHead] = React.useState(false);
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const prevScrollPos = React.useRef(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const hide =
            currentScrollPos > 30 && currentScrollPos > prevScrollPos.current;
        setHideHead(hide);
        prevScrollPos.current = currentScrollPos;
    };
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`header-container ${hideHead && "hide"}`}>
            <Link to="/" className="logo">
                <LocalMallRoundedIcon />
                <span className="text">Flip Outlet</span>
            </Link>
            <div className="right">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products" activestyle="active">
                    Products
                </NavLink>
                <Link to="/cart" className="cart-val-holder">
                    Cart
                    <span className="cart-val">
                        {cartItems.length > 0 ? cartItems.length : ""}
                    </span>
                </Link>
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
                                <Link to="/orders">Orders</Link>

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
