import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../utils/metaData";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { loadUser, logout, updateProfile } from "../../actions/userAction";
import UpdatePass from "../updatePass";
import "./index.scss";

const Profile = () => {
    const [edit, setEdit] = React.useState(false);
    const [dp, setDp] = React.useState();
    const [changePass, setChangePass] = React.useState(false);
    const { user } = useSelector((state) => state.user);
    const { isUpdated } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const myForm = new FormData();
        if (name) {
            myForm.set("name", name);
        }
        if (email) {
            myForm.set("email", email);
        }
        if (dp) {
            myForm.set("dp", dp);
        }
        dispatch(updateProfile(myForm));
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
        if (isUpdated) {
            dispatch(loadUser());
            navigate("/profile");
            dispatch({ type: "UPDATE_PROFILE_RESET" });
        }
    }, [isUpdated, dispatch, navigate]);

    return (
        <>
            <MetaData title={`${user.name}'s Profile`} />
            {changePass && (
                <UpdatePass setChangePass={setChangePass} dispatch={dispatch} />
            )}
            <div className="profile-container">
                <div className="left">
                    <div className="dp-holder">
                        <img
                            src={dp ? dp : user.avatar.url}
                            alt={user.name}
                            className="user-dp"
                        />
                        {edit && (
                            <label>
                                <span className="upload">
                                    <input
                                        type="file"
                                        name="dp"
                                        accept=".jpeg,.jpg,.png"
                                        onChange={handleDp}
                                    />
                                </span>
                            </label>
                        )}

                        <div className="dp-name">
                            <span className="hello">Hello</span>
                            <span className="user-name">{user.name}</span>
                        </div>
                    </div>
                    <div>
                        <Link to="/orders" className="sub-links">
                            <ShoppingBagIcon />
                            <span className="text">My Orders</span>
                        </Link>
                        <div
                            className="sub-links"
                            onClick={() => setChangePass(true)}
                        >
                            <PasswordRoundedIcon />
                            <span className="text">Change Password</span>
                        </div>
                        <div
                            className="sub-links"
                            onClick={() => dispatch(logout())}
                        >
                            <ExitToAppRoundedIcon />
                            <span className="text">Log out</span>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={updateHandler}
                    encType="multipart/form-data"
                    className="details-holder"
                >
                    <center className="details-header">
                        Hey! Here's what you shared with us!
                    </center>
                    <div className="inp-content">
                        <label htmlFor="name" className="label">
                            Your name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder=" "
                            minLength="3"
                            defaultValue={user.name}
                            required
                            disabled={!edit}
                        />
                        <hr className="border-bottom" />
                        <span className="placeholder">Name</span>
                    </div>
                    <div className="inp-content">
                        <label htmlFor="email" className="label">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder=" "
                            defaultValue={user.email}
                            required
                            disabled={!edit}
                        />
                        <hr className="border-bottom" />
                        <span className="placeholder">Email</span>
                    </div>
                    <div className="inp-content">
                        <label htmlFor="email" className="label">
                            Date Joined On
                        </label>
                        <input
                            type="date"
                            name="email"
                            placeholder=" "
                            defaultValue={String(user.createdAt).substr(0, 10)}
                            disabled
                        />
                        <hr className="border-bottom" />
                        <span className="placeholder">Joined On</span>
                    </div>
                    <div className="btn-div">
                        <button
                            type="button"
                            className="btn edit"
                            onClick={() => setEdit((prev) => !prev)}
                        >
                            Edit
                        </button>
                        {edit && (
                            <input
                                type="submit"
                                className="btn update"
                                value="Update"
                            />
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default Profile;
