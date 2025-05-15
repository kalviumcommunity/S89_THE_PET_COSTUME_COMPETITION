const express = require('express'); 
const User = require('./userSchema');
const userRouter = express.Router();

userRouter.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send({ msg: "Please fill all details to register" });
        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.status(400).send({ msg: "User already exists" });
        }
        const userData = new User({ name, email, password });
        await userData.save();
        res.status(200).send({ msg: "User registered successfully", userData });
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error });
        console.log(error);
    }
});

userRouter.post('/login', async (req, res) => { 
     try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ msg: "Please fill all details to login" });
        }
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).send({ msg: "Invalid credentials" });
        }
        // Set username in cookie
        res.cookie('username', user.name, { httpOnly: true, sameSite: 'strict' });
        res.status(200).send({ msg: "User logged in successfully", user: { name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error });
        console.log(error);
    }
});

userRouter.post('/logout', (req, res) => {
    // Remove the username cookie
    res.clearCookie('username');
    res.status(200).send({ msg: "User logged out successfully" });
});

userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send({ msg: "User data retrieved successfully", users });
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error });
        console.log(error);
    }
});

module.exports = userRouter;
