import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { userRouter } from './routes/usersRoute.js';

const app = express()

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', userRouter);

mongoose.connect(process.env.MONGODB_URI)
.then(
    () => {
        console.log("DB Connected!")
        app.listen(3002, () => console.log("Server Started!"))
    }
)