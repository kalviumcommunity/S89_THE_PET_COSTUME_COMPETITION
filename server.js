const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/ping", (req, res) => {
    try {
        res.status(200).send({ msg: "pong" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error: error.message });
    }
});


app.listen(3000, async(err) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        console.error("Failed to start the server. Error:", err.message);
    } catch (error) {
        console.log("Server connected successfully on port 3000");
    }
    
});
