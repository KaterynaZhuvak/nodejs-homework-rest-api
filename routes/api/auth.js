const express = require("express");
const isValidId = require("../../middleWares/isValidId");
const { schemas } = require("../../models/user");
const { register } = require("../../controllers/auth");

const router = express.Router();

router.post("/register", register);

module.exports = router;
