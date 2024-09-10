import db from "../models/index.js"


const Comment = db.comments;
export const createComment = (commentDescription,postId) => {

    
    Comment.create({
        comment : commentDescription,
        postId:postId
    })
    .then(()=>{
        return "Success";
    })
    .catch(err => {
        console.log(err);
    })
}

export const updateComment = (req,res) => {

    Comment.update(
        {comment:req.body.commet},
        {
            where:{
                commentId:req.body.commentId
            }
        }
    )
    .then(()=>{
        return res.status(200).send("Comment Updated")
    })
    .catch(err => {
        return res.status(400).send("Api Failed");
    })
}