const authControllers = {
  login: (req, res) =>
    res.render("pages/login", { title: "Login - Funkoshop", isLogged: false }),
  loginPost: (req, res) => res.send("route for login post view"),
  register: (req, res) =>
    res.render("pages/register", {
      title: "Register - Funkoshop",
      isLogged: false,
    }),
  registerPost: (req, res) => res.send("route for registerPost view"),
  logout: (req, res) => res.send("route for logout view"),
};

module.exports = authControllers;
