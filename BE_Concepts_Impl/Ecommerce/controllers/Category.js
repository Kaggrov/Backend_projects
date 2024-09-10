import db from "../models/index.js";

const Category = db.category;

export const createCategory = (req, res) => {
  Category.create({
    name: req.body.name,
  })
    .then(() => {
      res.status(200).send("Category created Successfully");
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

export const getAllCategory = (req, res) => {
  Category.findAll()
    .then((categories) => {
      res.status(200).send(categories);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};



