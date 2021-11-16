const dotenv = require("dotenv");
//config
dotenv.config({ path: "./config/config.env" });

const app = require("./app");
const cloudinary = require("cloudinary");
const connectDB = require("./config/database");

// handle uncaughtException
process.on("uncaughtException", (err) => {
    console.log(`error :${err.message}`);
    console.log("shutting down server due to uncaughtException");
    process.exit(1);
});

//db connect
connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// handle unhandled Promise exception
process.on("unhandledRejection", (err) => {
    console.log(`error :${err.message}`);
    console.log("shutting down server due to unhandled Promise exception");
    process.exit(1);
});

app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
});
