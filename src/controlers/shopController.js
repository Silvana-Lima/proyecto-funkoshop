const shopControllers = {
  shop: (req, res) => res.render("pages/shop", { title: "Shop - Funkoshop" }),
  item: (req, res) => res.render("pages/item", { title: "Item - Funkoshop" }),
  addItem: (req, res) =>
    res.send("route for add the current item to de shop cart"),
  cart: (req, res) => res.render("pages/cart", { title: "Cart - Funkoshop" }),
  checkoutCart: (req, res) => res.send("route for go to checkout page"),
};

module.exports = shopControllers;
