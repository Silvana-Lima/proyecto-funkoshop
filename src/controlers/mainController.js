const { getAll } = require("../models/productModel");

const mainControllers = {
  // home: (req, res) => res.render("index", { title: "Home - Funkoshop" }),
  home: async (req, res) => {
    const results = await getAll();
    console.log(results);

    res.send({
      info: "Home - Funkoshop",
      data: results,
    });
  },
  // home: async (req, res) => {
  //   const results = await getAll();

  //   res.render("index", {
  //     title: "Home - Funkoshop",
  //     info: "Home - Funkoshop",
  //     data: JSON.stringify(results),
  //   });
  // },
  contact: (req, res) => res.send("route for Contact view"),
  about: (req, res) => res.send("route for About view"),
  faqs: (req, res) => res.send("route for Faqs view"),
};

module.exports = mainControllers;
