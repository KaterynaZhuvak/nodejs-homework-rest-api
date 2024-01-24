const express = require("express");
const {
  register,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
} = require("../../controllers/auth");
const authenticate = require("../../middleWares/authenticate");
const upload = require("../../middleWares/upload");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/users", authenticate, updateSubscription);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
