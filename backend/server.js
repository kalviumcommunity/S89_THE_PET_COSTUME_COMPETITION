const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

// Replace this:

// With this:
app.use(cors({
    origin: "http://localhost:5174", // your frontend's URL
    credentials: true
}));
app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const userRouter = require("./userRouter");





const costumeRouter = require("./router");
app.use('/costume',costumeRouter);
app.use("/user", userRouter);

app.get("/ping", (req, res) => {
    try {
        res.status(200).send({ msg: "pong" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error: error.message });
    }
});

app.get("/", (req, res) => {
    try {
        res.status(200).send({ msg: "mongodb connected" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error: error.message });
    }
});




app.listen(3000, async(err) => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Server connected successfully on port 3000");

        
    } catch (error) {
        console.error("Failed to start the server. Error:", err.message);
    }
    
});
