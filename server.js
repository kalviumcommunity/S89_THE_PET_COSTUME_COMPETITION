const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
    try {
        res.status(200).send({ msg: "pong" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error: error.message });
    }
});


app.listen(3000, (err) => {
    if (err) {
        console.error("Failed to start the server. Error:", err.message);
    } else {
        console.log("Server connected successfully on port 3000");
    }
});
