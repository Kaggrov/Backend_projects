

export const PostModel = (sequelize,Sequelize) => {

    const Post = sequelize.define("Posts",{

        postId:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        description:{
            type:Sequelize.STRING
        }
    })

    return Post;
}