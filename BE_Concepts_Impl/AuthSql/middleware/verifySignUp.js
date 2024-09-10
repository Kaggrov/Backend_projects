import db from "../models/index.js";
const ROLES = db.ROLES;
const User = db.user;


const checkDuplicateUsernameOrEmail = (req,res,next) => {

    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message:"Failed! username is already in use"
            });
            return;
        }

        User.findOne({
            where:{
                email:req.body.email
            }
        }).then(user => {
            if(user){
                res.status(400).send({
                    message:"Failed! Email is already in use"
                });
                return;
            }

            next();
            
        });
        
    });
};


const checkRolesExisted = (req,res,next) => {

    if(req.body.roles) {

        for(let i=0;i<req.body.roles.length;i++){
            if(!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message:"Failed ROle does not exist = "+req.body.role
                });
                return;
            }
        }
    }

    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail : checkDuplicateUsernameOrEmail,
    checkRolesExisted:checkRolesExisted
};

export default verifySignUp;