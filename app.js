const express = require("express");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoutes");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

//routes
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

//middleware
app.use(errorMiddleware);

module.exports = app;
