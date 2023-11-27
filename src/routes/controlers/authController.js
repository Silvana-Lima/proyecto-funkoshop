const authControllers = {
  login: (req, res) => res.send("route for login view"),
  loginPost: (req, res) => res.send("route for login post view"),
  register: (req, res) => res.send("route for register view"),
  registerPost: (req, res) => res.send("route for registerPost view"),
  logout: (req, res) => res.send("route for logout view"),
};

module.exports = authControllers;
