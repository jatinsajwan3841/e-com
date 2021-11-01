const mongoose = require("mongoose");

const connectDB = async () => {
    const res = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`connected to db ${res.connection.host}`);
};

module.exports = connectDB;
