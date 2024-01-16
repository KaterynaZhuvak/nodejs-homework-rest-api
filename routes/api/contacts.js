const express = require("express");
const isValidId = require("../../middleWares/isValidId");
const authenticate = require("../../middleWares/authenticate");
const router = express.Router();
const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateFavorites,
} = require("../../controllers/contacts");

router.get("/", authenticate, getAll);

router.get("/:id", authenticate, isValidId, getById);

router.post("/", authenticate, add);

router.delete("/:id", authenticate, isValidId, deleteById);

router.put("/:id", authenticate, isValidId, updateById);

router.patch("/:id/favorite", authenticate, isValidId, updateFavorites);

module.exports = router;
