import express from 'express';
import cors from 'cors';
import db from './models/index.js';
import { authRoute } from './routes/auth.routes.js';
import { userRoute } from './routes/user.routes.js';

const app = express();

var corsOptions = {
    origin:"*"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Role = db.role;

db.sequelize.sync({force:true}).then(()=>{
    console.log("Drop and Resync Db");
    initial();
})

function initial(){
    Role.create({
        id: 1,
        name: "user"
      });
     
      Role.create({
        id: 2,
        name: "moderator"
      });
     
      Role.create({
        id: 3,
        name: "admin"
      });
}

app.get('/',(req,res)=>{
    res.status(200).json({message:'Home route'})
})

app.use(authRoute);
app.use(userRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

