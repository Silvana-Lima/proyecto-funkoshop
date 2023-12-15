const { getAll } = require("../models/productModel");

const shopControllers = {
  shop: async (req, res) => {
    const results = await getAll();

    res.render("pages/shop", {
      title: "Shop - Funkoshop",
      data: results,
    });
  },
  item: (req, res) =>
    res.render("pages/item/:product_id", { title: "Item - Funkoshop" }),
  addItem: (req, res) =>
    res.send("route for add the current item to de shop cart"),
  cart: (req, res) => res.render("pages/cart", { title: "Cart - Funkoshop" }),
  checkoutCart: (req, res) => res.send("route for go to checkout page"),
};

module.exports = shopControllers;
