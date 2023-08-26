import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser"
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()
// console.log(`env mongo`,process.env.MONGODB_URI);
    
mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log(`db connected`);
}).catch(() =>{
    console.error(`db not connected`);
})

const app = express();

app.use(express.json());
app.use(cookieParser())




app.listen(3000, ()=>{
    console.log(`server is listening at 3000`);
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        message,
        statusCode
    })
})