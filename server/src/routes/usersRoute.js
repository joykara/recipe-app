import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router()
// Register
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.findOne({ username })

    res.json(user);
})

// Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
});

export { router as userRouter };