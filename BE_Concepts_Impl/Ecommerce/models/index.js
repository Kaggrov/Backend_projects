import sqlConfig from "../config/db.config.js";
import  Sequelize  from "sequelize";
import {ProductModel} from "./Product.js"
import {CategoryModel} from "./Category.js"
import { PostModel } from "./Post.js";
import { LikesModel } from "./Likes.js";
import { CommentModel } from "./Comment.js";


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

db.products = ProductModel(sequelize,Sequelize);
db.category = CategoryModel(sequelize,Sequelize);

db.posts = PostModel(sequelize,Sequelize);
db.likes = LikesModel(sequelize,Sequelize);

db.comments = CommentModel(sequelize,Sequelize);

db.category.hasMany(db.products, { as: "products" });
db.products.belongsTo(db.category, {
  foreignKey: "categoryId",
});


db.posts.hasOne(db.likes);
db.likes.belongsTo(db.posts,{
  foreignKey:"postId"
})

export default db