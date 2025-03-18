const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth");

router.post("/create/users", authController.createUser);
router.get("/get/users", authController.getUser);
router.put("/update/users/:id", authController.updateUser);
router.delete("/delete/users/:id", authController.deleteUser);

module.exports = router;