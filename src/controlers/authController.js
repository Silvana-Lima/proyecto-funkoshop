const authControllers = {
  login: (req, res) =>
    res.render("pages/login", { title: "Login - Funkoshop" }),
  loginPost: (req, res) => res.send("route for login post view"),
  register: (req, res) =>
    res.render("pages/register", { title: "Register - Funkoshop" }),
  registerPost: (req, res) => res.send("route for registerPost view"),
  logout: (req, res) => res.send("route for logout view"),
};

module.exports = authControllers;
