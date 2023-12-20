const {
  getAll,
  getProductById,
  createItem,
} = require("../models/productModel");

const adminControllers = {
  admin: async (req, res) => {
    const products = await getAll();
    res.render("pages/admin", {
      title: "Admin - Funkoshop",
      data: products,
      isLogged: true,
    });
  },
  createView: (req, res) =>
    res.render("pages/create", { title: "Create - Funkoshop", isLogged: true }),
  createItem: async (req, res) => {
    // console.log(req.body);
    // console.log(req.files);

    const product_schema = {
      product_name: req.body.itemName,
      product_description: req.body.description,
      sku: req.body.sku,
      price: Number(req.body.price),
      dues: Number(req.body.dues),
      stock: Number(req.body.stock),
      discount: Number(req.body.discount),
      category_id: Number(req.body.category),
      licence_id: Number(req.body.licence),
      image_front: req.files[0].originalname,
      image_back: req.files[1].originalname,
    };

    await createItem(Object.values(product_schema));
    // console.log(Object.values(product_schema));
    res.redirect("/admin");
  },
  edit: async (req, res) => {
    const product = await getProductById(req.params.product_id);
    res.render("pages/edit", {
      title: "Edit - Funkoshop",
      data: product[0],
      isLogged: true,
    });
  },
  editPut: (req, res) => res.send("route for EditPut view"),
  delete: (req, res) => res.send("route for Delete view"),
};

module.exports = adminControllers;
