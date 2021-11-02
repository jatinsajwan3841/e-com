const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandle = require("../middleware/asyncError");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

// registration
exports.registerUser = asyncErrorHandle(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "sample",
            url: "sample",
        },
    });
    sendToken(user, 201, res);
});

// login
exports.loginUser = asyncErrorHandle(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please enter email & password", 400));
    }
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    const isPassMatched = user.comparePassword(password);
    if (!isPassMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }
    sendToken(user, 200, res);
});

// logout
exports.logOutUser = asyncErrorHandle(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({ success: true, message: "logged out" });
});

// forgot password
exports.forgotPassword = asyncErrorHandle(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    //get resetPass token
    const resetToken = user.getResetPassToken();
    await user.save({ validateBeforeSave: false });

    const resetPassUrl = `${req.protocol}://${req.get(
        "host"
    )}/api/v1/password/reset/${resetToken}`;
    const message = `Click on the following link to reset your password :- \n\n ${resetPassUrl} If you have not requested this email then, please ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: "e-com password recover",
            message: message,
        });
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500));
    }
});

// reset password
exports.resetPassword = asyncErrorHandle(async (req, res, next) => {
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
        return next(
            new ErrorHandler(
                "Reset Password token is invalid or has been expired",
                404
            )
        );
    }
    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password not matched", 404));
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(user, 200, res);
});

// get user details
exports.getUserDetails = asyncErrorHandle(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user,
    });
});

// update userPass
exports.updatePassword = asyncErrorHandle(async (req, res, next) => {
    const user = await user.findById(req.user.id).select("+password");
    const isPassMatched = user.comparePassword(req.body.oldPassword);
    if (!isPassMatched) {
        return next(new ErrorHandler("Old password is incorrect", 400));
    }
    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password not matched", 400));
    }
    user.password = req.body.password;
    await user.save();
    sendToken(user, 200, res);
});

// update user profile
exports.updateProfile = asyncErrorHandle(async (req, res, next) => {
    const newData = {
        name: req.body.name,
        email: req.body.email,
    };
    // todo include avatar update

    const user = await User.findByIdAndUpdate(req.user.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    });
    res.status(200).json({
        success: true,
    });
});

// get all users --admin
exports.getAllUsers = asyncErrorHandle(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
    });
});

// get single user --admin
exports.getSingleUser = asyncErrorHandle(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(
            new ErrorHandler(
                `User with provided id: ${req.params.id} dosn't exist`
            ),
            404
        );
    }
    res.status(200).json({
        success: true,
        user,
    });
});

// role update --admin
exports.updateUserRole = asyncErrorHandle(async (req, res, next) => {
    const newData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };

    const user = await User.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        userFindAndModify: false,
    });
    res.status(200).json({
        success: true,
    });
});

// delete user --admin
exports.deleteUser = asyncErrorHandle(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(
            new ErrorHandler(
                `User with provided id: ${req.params.id} dosn't exist`
            ),
            404
        );
    }
    await user.remove();
    res.status(200).json({
        success: true,
        message: "User deleted successfully",
    });
});
