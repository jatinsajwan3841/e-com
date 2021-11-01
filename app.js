const express = require("express");
const errorMiddleware = require("./middleware/error");
const product = require("./routes/productRoute");

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

//routes
app.use("/api/v1", product);

//middleware
app.use(errorMiddleware);

module.exports = app;
