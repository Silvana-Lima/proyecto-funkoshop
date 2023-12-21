const { getAll } = require("../models/productModel");

const authControllers = {
  login: (req, res) =>
    res.render("pages/login", { title: "Login - Funkoshop", isLogged: false }),
  loginPost: async (req, res) => {
    const products = await getAll();
    res.render("pages/admin", {
      title: "Admin - Funkoshop",
      data: products,
      isLogged: true,
    });
  },
  register: (req, res) =>
    res.render("pages/register", {
      title: "Register - Funkoshop",
      isLogged: false,
    }),
  registerPost: (req, res) => res.send("route for registerPost view"),
  logout: (req, res) => res.send("route for logout view"),
};

module.exports = authControllers;
