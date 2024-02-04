const express = require("express");
const {
  register,
  verifyEmail,
  resendVerifyEmail,
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

router.get("/verify/:verificationToken", verifyEmail);

router.post("/verify", resendVerifyEmail);

router.post("/login", login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/users", authenticate, updateSubscription);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
