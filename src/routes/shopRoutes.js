const express = require("express");
const router = express.Router();
const shopControllers = require("../controlers/shopController");

router.get("/", shopControllers.shop);
router.get("/:licence_name", shopControllers.shopLicence);
router.get("/item/:product_id", shopControllers.item);
router.post("/item/:id/add", shopControllers.addItem);
router.get("/cart", shopControllers.cart);
router.post("/cart", shopControllers.checkoutCart);

module.exports = router;
