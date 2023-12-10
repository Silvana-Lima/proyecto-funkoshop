const adminControllers = {
  admin: (req, res) =>
    res.render("pages/admin", { title: "Admin - Funkoshop" }),
  create: (req, res) =>
    res.render("pages/create", { title: "Create - Funkoshop" }),
  createPost: (req, res) => res.send("route for CreatePost view"),
  edit: (req, res) => res.render("pages/edit", { title: "Edit - Funkoshop" }),
  editPut: (req, res) => res.send("route for EditPut view"),
  delete: (req, res) => res.send("route for Delete view"),
};

module.exports = adminControllers;
