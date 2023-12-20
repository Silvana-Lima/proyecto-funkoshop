const { getCollections, getAll } = require("../models/productModel");

const mainControllers = {
  home: async (req, res) => {
    const collections = await getCollections();
    const products = await getAll();

    res.render("index", {
      title: "Home - Funkoshop",
      data: collections,
      news: products,
      isLogged: false,
    });
  },

  contact: (req, res) =>
    res.render("pages/contact", {
      title: "Contact - Funkoshop",
      isLogged: false,
    }),
  about: (req, res) =>
    res.render("pages/cart", {
      title: "Cart - Funkoshop",
      isLogged: false,
    }),
  faqs: (req, res) => res.send("route for Faqs view"),
};

module.exports = mainControllers;
