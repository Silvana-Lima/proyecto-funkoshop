const adminControllers = {
  admin: (req, res) => res.send("route for Admin view"),
  create: (req, res) => res.send("route for Create view"),
  createPost: (req, res) => res.send("route for CreatePost view"),
  edit: (req, res) => res.send("route for Edit view"),
  editPut: (req, res) => res.send("route for EditPut view"),
  delete: (req, res) => res.send("route for Delete view"),
};

module.exports = adminControllers;
