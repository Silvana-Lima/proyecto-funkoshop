const express = require("express");
const router = express.Router();
const shopControlers = require("./controlers/shopController");

router.get("/", shopControlers.shop);
router.get("/item/:id", shopControlers.item);
router.post("/item/:id/add", shopControlers.addItem);
router.get("/cart", shopControlers.cart);
router.post("/cart", shopControlers.checkoutCart);

module.exports = router;
