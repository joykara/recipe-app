import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
require("dotenv").config()

const app = express()

// Middlewares
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(
    () => {
        console.log("DB Connected!")
        app.listen(3002, () => console.log("Server Started!"))
    }
)