import db from "../models/index.js"


const Product = db.products
const Category = db.category

export const saveProduct = (req,res) => {
    let categoryId = 1;
    Category.findAll()
    .then((categories)=>{
        categories.map((category)=>{
            if(category?.name == req.body.category ){
                categoryId = category?.categoryId;
            }
        })
        
        Product.create({
            name:req.body.name,
            cost:req.body.cost,
            categoryId:categoryId,
            productId:Math.random()*100
        })
        .then(()=>{
            res.status(200).send("Product Saved")
        })
        .catch(err => {
            res.status(404).send({
                message:err.message
            })
            console.log(err)
        })
    })
    .catch(err => {
        res.status(404).send({
            message:err.message

        })
        console.log("IN category")
    })
    
   
}

export const getProducts = (req,res) => {

    Product.findAll()
    .then((prods)=>{
        res.status(200).send(prods);
    })
    .catch(err=>{
        console.log(err);
    })
}

export const getProductsByCategory = (req,res) => {
    
    Product.findAll({include:Category})
    .then(products => {
        // products.filter(products.Category.name == req.params.category);
        console.log(req.params.category)
        let filteredProds = []
        products.map((prod)=>{
            
            if(prod.Category.name == req.params.category)
            filteredProds.push(prod)
        })

        res.status(200).send(filteredProds);
    })
    .catch(err => {
        console.log(err);
        res.status(404).send("Error");
    });
}