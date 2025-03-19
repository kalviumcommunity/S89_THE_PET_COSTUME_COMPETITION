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


app.listen(3000, async() => {
    try {
        console.log("Server connected successfully");
    } catch (error) {
        console.log("Error");
        
    }
    
});
