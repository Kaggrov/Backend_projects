import { createPost, getAllPost, postliked } from "../controllers/PostController.js";

export const postRoute = (app) => {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post("/post",createPost);
    app.get("/post",getAllPost);
    app.patch("/post/like",postliked);

  };
  