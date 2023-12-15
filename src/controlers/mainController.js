const { getCollections, getAll } = require("../models/productModel");

const mainControllers = {
  home: async (req, res) => {
    const collections = await getCollections();
    const products = await getAll();

    res.render("index", {
      title: "Home - Funkoshop",
      data: collections,
      news: products,
    });
  },

  contact: (req, res) => res.send("route for Contact view"),
  about: (req, res) => res.send("route for About view"),
  faqs: (req, res) => res.send("route for Faqs view"),
};

module.exports = mainControllers;
