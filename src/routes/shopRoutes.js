const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("route for Shop view"));
router.get("/item/:id", (req, res) =>
  res.send(`route for find and retrieve a product from de ID: ${req.params.id}`)
);
router.post("/item/:id/add", (req, res) =>
  res.send("route for add the current item to de shop cart")
);
router.get("/cart", (req, res) => res.send("route for Cart view"));
router.post("/cart", (req, res) => res.send("route for go to checkout page"));

module.exports = router;
