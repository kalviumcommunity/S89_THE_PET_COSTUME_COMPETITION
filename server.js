const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.get("/ping", (req, res) => {
    try {
        res.status(200).send({ msg: "pong" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error: error.message });
    }
});


app.listen(3000, async(err) => {
    if (err) {
        await mongoose.connect("mongodb+srv://rekhansikagoluguri07:radh%40krishna_123@cluster0.91xlh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

        console.error("Failed to start the server. Error:", err.message);
    } else {
        console.log("Server connected successfully on port 3000");
    }
});
