const express = require("express");
const errorMiddleware = require("./middleware/error");
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1", product);
app.use("/api/v1", user);

//middleware
app.use(errorMiddleware);

module.exports = app;
