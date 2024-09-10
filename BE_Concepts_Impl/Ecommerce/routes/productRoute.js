import { saveProduct,getProducts,getProductsByCategory } from "../controllers/Product.js";

export const productRoute = (app) => {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post("/product",saveProduct);
    app.get("/products",getProducts);
    app.get("/product/:category",getProductsByCategory);

  };
  