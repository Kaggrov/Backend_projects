import { createCategory,getAllCategory } from "../controllers/Category.js";


export const categoryRoute = (app) => {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post("/category",createCategory);

    app.get("/category",getAllCategory);
  };
  