const shopControllers = {
  shop: (req, res) => res.send("route for Shop view"),
  item: (req, res) =>
    res.send(
      `route for find and retrieve a product from de ID: ${req.params.id}`
    ),
  addItem: (req, res) =>
    res.send("route for add the current item to de shop cart"),
  cart: (req, res) => res.send("route for Cart view"),
  checkoutCart: (req, res) => res.send("route for go to checkout page"),
};

module.exports = shopControllers;
