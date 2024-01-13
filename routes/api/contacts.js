const express = require("express");
const isValidId = require("../../middleWares/isValidId");
const router = express.Router();
const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
  updateFavorites,
} = require("../../controllers/contacts");

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", add);

router.delete("/:id", isValidId, deleteById);

router.put("/:id", isValidId, updateById);

router.patch("/:id/favorite", isValidId, updateFavorites);

module.exports = router;
