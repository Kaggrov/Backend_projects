import express from 'express';
import cors from 'cors';
import { categoryRoute } from './routes/categoryRoute.js';
import db from './models/index.js';
import { productRoute } from './routes/productRoute.js';
import { postRoute } from './routes/postRoute.js';

const app = express();


var corsOptions = {
    origin:"*"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.status(200).send("BAsic Get API")
})


// this is needed if u want to create table when server starts .
db.sequelize.sync().then(()=>{
    console.log("Resync Db");
})


categoryRoute(app);
productRoute(app);
postRoute(app);


const PORT = 9000
app.listen(PORT,()=>{
    console.log("server running on "+PORT);
})