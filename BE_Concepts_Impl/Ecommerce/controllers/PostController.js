import db from "../models/index.js";
import { createComment } from "./CommentsController.js";

const Post = db.posts;
const Likes = db.likes;
const Comment = db.comments

export const createPost = (req,res) => {

    Post.create({
        description:req.body.description
    })
    .then((post)=>{
        Likes.create({
            count:0,
            postId:post.postId
        })
        Comment.create({
            comment:"",
            postId:post.postId
        })
        res.status(200).send("Post Saved Successfully!!!");
    })
    .catch(err =>{
        console.log(err);
        res.status(400).send("API Failed")
    })
}

export const getAllPost = (req,res) => {

    Post.findAll()
    .then(posts => {
        posts.sort((a,b)=> {
            return b.createdAt-a.createdAt;
        })
        res.status(200).send(posts);
    })
    .catch(err => {
        console.log(err);
        res.status(400).send({
            message:err.message
        })
    })
}

export const postliked = (req,res) => {
    console.log(req.body.postId)
    Likes.findOne({
        where:{
            postId:req.body.postId
        }
    })
    .then((pst)=>{
        Likes.update(
            { count: pst.count+1 },
            {
            where: {
                postId: req.body.postId,
            },
            },
        )
        .then(()=>{
            res.status(200).send("Post Updated")
        })
    })
   
}

export const postComment = (req,res) => {
    createComment(req.body.comment,req.body.postId);
}