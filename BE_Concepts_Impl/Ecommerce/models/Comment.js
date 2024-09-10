

export const CommentModel = (sequelize,Sequelize)=> {

    const Comment = sequelize.define({
        commentId:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        comment:{
            type:Sequelize.STRING
        }
    })

    return Comment;
}