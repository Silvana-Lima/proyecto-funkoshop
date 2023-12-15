const {
  getAll,
  getProductById,
  getProductsByLicence,
} = require("../models/productModel");

const shopControllers = {
  shop: async (req, res) => {
    const results = await getAll();

    res.render("pages/shop", {
      title: "Shop - Funkoshop",
      data: results,
    });
  },
  item: async (req, res) => {
    const product = await getProductById(req.params.product_id);

    const productsByLicence = await getProductsByLicence(
      `'${product[0].licence_name}'`
    );

    const relatedProducts = productsByLicence.filter(
      (productItem) => productItem.product_id !== Number(req.params.product_id)
    );

    res.render("pages/item", {
      title: "Item - Funkoshop",
      data: product[0],
      relatedProducts: relatedProducts,
    });
  },
  addItem: (req, res) =>
    res.send("route for add the current item to de shop cart"),
  cart: (req, res) => res.render("pages/cart", { title: "Cart - Funkoshop" }),
  checkoutCart: (req, res) => res.send("route for go to checkout page"),
};

module.exports = shopControllers;
