const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

// handle uncaughtException
process.on("uncaughtException", (err) => {
    console.log(`error :${err.message}`);
    console.log("shutting down server due to uncaughtException");
    process.exit(1);
});

//config
dotenv.config({ path: "./config/config.env" });

//db connect
connectDB();

// handle unhandled Promise exception
process.on("unhandledRejection", (err) => {
    console.log(`error :${err.message}`);
    console.log("shutting down server due to unhandled Promise exception");
    process.exit(1);
});

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
});
