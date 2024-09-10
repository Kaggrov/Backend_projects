import sqlConfig from "../config/db.config.js";
import  Sequelize  from "sequelize";
import userModel from "./user.model.js";
import roleModel from "./role.model.js"

const sequelize = new Sequelize(
    sqlConfig.DB,
    sqlConfig.USER,
    sqlConfig.PASSWORD,
    {
        host:sqlConfig.HOST,
        dialect:sqlConfig.dialect
    }
);


const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = userModel(sequelize,Sequelize);
db.role = roleModel(sequelize,Sequelize);


//user-roles => Many-to-Many mapping
db.role.belongsToMany(db.user,{
    through:"user_roles"
})

db.user.belongsToMany(db.role, {
    through: "user_roles"
});

db.ROLES = ["user","admin","moderator"];

export default db;

