import express from "express"
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./config/DB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import Authenticate from "../Backend/middleware/Authenticate.js";
import clientRoute from './routes/clientRoutes.js'
import proposalRoute from './routes/proposalRoute.js'
import expressStatusMonitor from 'express-status-monitor';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken';

dotenv.config()
connectDB();
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
   origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,              
  }))
app.use(expressStatusMonitor());


app.use('/api/auth',authRoutes); 
// // app.get('/api/auth/me', async (req, res) => {
// //   try {
// //     console.log(req.cookies)
// //     const token = req.cookies.token;
// //     if (!token) return res.status(401).json({ message: 'No token' });
// //     const user = jwt.verify(token, process.env.jwt_secret_key);

// //     res.status(200).json({ user });
// //   } catch (err) {
// //     console.error("Error in /me route:", err.message);
// //     res.status(500).json({ message: "Internal Server Error" });
// //   }
// // });


app.use('/api/client',Authenticate,clientRoute);
app.use('/api/proposal',Authenticate,proposalRoute);

app.listen(3000,()=>{
    console.log("Server Started");
})

