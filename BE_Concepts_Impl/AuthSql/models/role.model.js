const roleModel = (sequelize,Sequelize)=>{

    const Role = sequelize.define("Roles",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING
        }
    });

    return Role;
}


export default roleModel;