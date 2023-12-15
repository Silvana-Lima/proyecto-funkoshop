const { getCollections } = require("../models/productModel");

const mainControllers = {
  home: async (req, res) => {
    const results = await getCollections();

    res.render("index", {
      title: "Home - Funkoshop",
      data: results,
    });
  },

  contact: (req, res) => res.send("route for Contact view"),
  about: (req, res) => res.send("route for About view"),
  faqs: (req, res) => res.send("route for Faqs view"),
};

module.exports = mainControllers;
