export const CategoryModel = (sequelize,Sequelize) => {

    const Category = sequelize.define("Category",{
        name:{
            type:Sequelize.STRING
        },
        categoryId:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true,
        }
    });

    return Category;

}