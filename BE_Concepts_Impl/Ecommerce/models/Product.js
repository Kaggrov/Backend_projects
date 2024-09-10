
export const ProductModel = (sequelize,Sequelize) => {

    const Product = sequelize.define("Products",{
        name:{
            type:Sequelize.STRING
        },
        productId:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        },
        cost:{
            type:Sequelize.INTEGER
        },
        categoryId:{
            type:Sequelize.INTEGER
        }
    });

    return Product;

}