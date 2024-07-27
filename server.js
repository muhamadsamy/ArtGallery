import express from "express";
import connectDB from "./Server/Models/db.js";
import customerRoutes from "./Server/Routes/customerRoutes.js";
import orderRoutes  from "./Server/Routes/orderRoutes.js";
import authRoutes from "./Server/Routes/authRoutes.js";
import productRoutes from "./Server/Routes/productRoutes.js";
import cors from 'cors';


const app= express();
const PORT= process.env.PORT||5000;




app.use(express.json());  
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static('uploads'));
app.use(cors({
    origin: 'http://localhost:3000' // Replace with your React app's origin
  }));


app.use("/",customerRoutes);
app.use("/",orderRoutes);
app.use("/",authRoutes);
app.use('/', productRoutes);
connectDB();










app.listen(PORT,()=>console.log(`Server is up and Running on port ${PORT}`));

