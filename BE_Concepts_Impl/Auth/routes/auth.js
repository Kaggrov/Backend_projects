import express from "express";
import mongoUser from '../models/User.js'
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

const router = express.Router();


router.post('/register',async (req,res)=>{
    try{

        const {username,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);

        const user  = new mongoUser({username,password:hashedPassword});

        await user.save();
        res.status(201).json({message:'User registered Successfully'});
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:'Registration Failed'});
    }
})


router.get('/login',async (req,res)=>{
    try{
        const {username,password} = req.body;

        const user = await mongoUser.findOne({username});

        if(!user){
            return res.status(401).json({error:'Authentication Failed'})
        }

        const passwordMatch = await bcrypt.compare(password,user.password);

        if(!passwordMatch){
            return res.status(401).json({error:'Incorrect Password'});
        }

        const token = jwt.sign({userId:user._id},'karttekay',{
            expiresIn:'1h'
        });

        res.status(200).json({token});
    }
    catch(error){
        res.status(500).json({error:'Login Failed'})
    }
})

export default router;