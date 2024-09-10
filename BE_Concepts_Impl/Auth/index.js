import express from "express";
import router from "./routes/auth.js"; // remember to add .js when type="module"
import mongoose from "mongoose";
import potectedRoute from './routes/protectedRoutes.js'


const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(router);
app.use(potectedRoute);


const mongoURI = "mongodb://0.0.0.0:27017/temp"
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(mongoURI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}


connectDB()

app.listen(PORT,()=>{
    console.log('Server is running ');
})




