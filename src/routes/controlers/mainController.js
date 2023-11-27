const mainControllers = {
  home: (req, res) => res.send("route for home view"),
  contact: (req, res) => res.send("route for Contact view"),
  about: (req, res) => res.send("route for About view"),
  faqs: (req, res) => res.send("route for Faqs view"),
};

module.exports = mainControllers;
