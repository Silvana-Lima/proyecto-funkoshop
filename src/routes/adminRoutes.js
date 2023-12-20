const express = require("express");
const router = express.Router();
const adminControllers = require("../controlers/adminController");
const upload = require("../middlewares/uploadFiles");

router.post("/", adminControllers.admin);
router.get("/create", adminControllers.createView);
router.post("/create", upload.array("images", 2), adminControllers.createItem);
router.get("/edit/:product_id", adminControllers.edit);
router.put("/edit/:id", adminControllers.editPut);
router.delete("/delete/:id", adminControllers.delete);

module.exports = router;
