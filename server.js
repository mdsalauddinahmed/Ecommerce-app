import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDb from './config/db.js';
import authRouter from './routes/authRoute.js'
import CategoryRoutes from'./routes/CategoryRoutes.js'
import productRoute from './routes/productRoute.js'
import cors from 'cors'

// config

dotenv.config()

//  rest object 
const app = express();

// database configure

connectDb()



// middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))



// routes
app.use('/api/vi/auth',authRouter)
app.use('/api/vi/category',CategoryRoutes)
app.use('/api/vi/product',productRoute)
// rest api




app.get('/',(req,res)=>{
    res.send("server is running")
});

// port
const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`server is Running on ${process.env.DEV_mode} mode on  ${PORT}`.bgCyan.white)
})
 