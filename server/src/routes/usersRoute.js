import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router()
// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
        return res.json("User Already Exists!");
    }
    // hash password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    // create token
    // const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    // res.cookie("token", token, {
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000 // 1 day
    // });
    res.json({ message: "User Registered Successfully!" });
})

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
});

export { router as userRouter };