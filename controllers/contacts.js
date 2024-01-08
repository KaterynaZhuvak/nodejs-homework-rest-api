const { Contact } = require("../models/contact");
const { HttpError } = require("../helpers/index");
const { addSchema } = require("../models/contact");
const isValidId = require("../middleWares/isValidId");
const { updateFavoriteSchema } = require("../models/contact");

const ctrlWrapper = require("../helpers/ctrlWrapper");

const getAll = async (req, res, next) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

const getById = async (req, res, next) => {
  const result = await Contact.findById(isValidId);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

const add = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await Contacts.create(req.body);
  res.status(201).json(result);
};

const deleteById = async (req, res, next) => {
  const result = await Contacts.findByIdAndRemove(isValidId);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  // res.status(200).send(); (NO CONTENT тіло не передасться)
  res.json({
    message: "Delete successfully",
  });
};

const updateById = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await Contacts.findByIdAndUpdate(isValidId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

const updateFavorites = async (req, res, next) => {
  const { error } = updateFavoriteSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  const result = await Contacts.findByIdAndUpdate(isValidId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
  updateFavorites: ctrlWrapper(updateFavorites),
};
