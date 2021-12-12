const mongoose = require("mongoose");
const Schema = mongoose.Schema;

roleSchema = new Schema({
  name: {
    type: String,
    trim: true,
    index: true,
    required: true,
    unique: true,
  },
  description: String,
  permissions: [
    {
      type: Schema.Types.ObjectId,
      ref: "permission",
    },
  ],
});
role = mongoose.model("role", roleSchema);

const getAll = async () => {
  return await role
    .find({})
    .populate("permissions")
    .then((doc) => doc)
    .catch((err) => {
      throw err;
    });
};

const getByID = async (id) => {
  return await role
    .findOne({ _id: id })
    .populate("permissions")
    .then((doc) => doc)
    .catch((err) => {
      throw err;
    });
};

const create = async (data) => {
  return await role.create(data).catch((err) => {
    throw err;
  });
};

const updateByID = async (id, data) => {
  return await role
    .findOneAndUpdate({ _id: id }, data, { upsert: true })
    .catch((err) => {
      throw err;
    });
};

const deleteByID = async (id) => {
  return await role.findByIdAndDelete({ _id: id }).catch((err) => {
    throw err;
  });
};

module.exports = {
  getAll,
  getByID,
  create,
  updateByID,
  deleteByID,
};
