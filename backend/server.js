const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./userRouter");

const app = express();

const cors = require("cors")
app.use(cors());
app.use(express.json());

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
