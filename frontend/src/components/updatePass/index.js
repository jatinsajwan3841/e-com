import React from "react";
import { updatePassword } from "../../actions/userAction";
import "./index.scss";

const data = [
    {
        label: "Please enter your old password",
        placeholder: "old password",
        name: "oldPassword",
    },
    {
        label: "Please enter your new password",
        placeholder: "new password",
        name: "newPassword",
    },
    {
        label: "Please re-enter your password",
        placeholder: "confirm password",
        name: "confirmPassword",
    },
];

const UpdatePass = ({ setChangePass, dispatch }) => {
    const passUpdateHandler = (e) => {
        e.preventDefault();
        const repeat = e.target;
        if (repeat.newPassword.value === repeat.confirmPassword.value) {
            const passwords = {
                oldPassword: repeat.oldPassword.value,
                newPassword: repeat.newPassword.value,
                confirmPassword: repeat.confirmPassword.value,
            };
            dispatch(updatePassword(passwords));
        } else {
            alert("New Password and Repeat Password does not match");
        }
    };

    return (
        <div
            className="updatePass-holder"
            onClick={(e) => setChangePass(false)}
        >
            <form
                onSubmit={passUpdateHandler}
                encType="multipart/form-data"
                className="pass-container"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <h1>Please enter all fields as mentioned </h1>
                {data.map((vals, key) => (
                    <div key={key} className="inp-content">
                        <label htmlFor="password" className="label">
                            {vals.label}
                        </label>
                        <input
                            type="password"
                            name={vals.name}
                            placeholder=" "
                            minLength="6"
                            required
                        />
                        <hr className="border-bottom" />
                        <span className="placeholder">{vals.placeholder}</span>
                    </div>
                ))}
                <input type="submit" value="update" className="btn" />
            </form>
        </div>
    );
};

export default UpdatePass;
