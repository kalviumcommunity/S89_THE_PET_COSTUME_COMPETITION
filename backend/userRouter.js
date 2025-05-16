const express = require('express'); 
const User = require('./userSchema');
const jwt = require('jsonwebtoken');
const userRouter = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Use env in production

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

// LOGIN with JWT
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
        // Create JWT token
        const token = jwt.sign(
            { userId: user._id, name: user.name, email: user.email },
            JWT_SECRET,
            { expiresIn: '1d' }
        );
        // Set token in httpOnly cookie
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            secure: false, // set to true if using HTTPS
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });
        res.status(200).send({ msg: "User logged in successfully", user: { name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).send({ msg: "Something went wrong", error });
        console.log(error);
    }
});

// LOGOUT (clear cookie)
userRouter.post('/logout', (req, res) => {
    res.clearCookie('token');
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