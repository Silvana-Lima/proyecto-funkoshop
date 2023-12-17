const { getAll, getProductById } = require("../models/productModel");

const adminControllers = {
  admin: async (req, res) => {
    const products = await getAll();
    res.render("pages/admin", {
      title: "Admin - Funkoshop",
      data: products,
    });
  },
  create: (req, res) =>
    res.render("pages/create", { title: "Create - Funkoshop" }),
  createPost: (req, res) => res.send("route for CreatePost view"),
  edit: async (req, res) => {
    const product = await getProductById(req.params.product_id);
    res.render("pages/edit", { title: "Edit - Funkoshop", data: product[0] });
  },
  editPut: (req, res) => res.send("route for EditPut view"),
  delete: (req, res) => res.send("route for Delete view"),
};

module.exports = adminControllers;
