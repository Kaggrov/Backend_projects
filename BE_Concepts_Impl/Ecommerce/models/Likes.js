
export const LikesModel = (sequelize,Sequelize) => {

    const Likes = sequelize.define("Likes",{

        likesId:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        count:{
            type:Sequelize.INTEGER
        }
    })

    return Likes;
}