const express = require("express");

const authUser = require("../controllers/userControllers");
const userRegistration = require("../controllers/userControllers");

const router = express.Router();

console.log("User Routes File")
router.route("/").post(userRegistration);
router.route("/login").post(authUser);


module.exports = router;
