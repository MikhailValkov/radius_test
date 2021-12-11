const mongoose = require("mongoose");
const Schema = mongoose.Schema;

permissionSchema = new Schema({
  name: {
    type: String,
    trim: true,
    index: true,
    required: true,
    unique: true,
  },
  description: String,
});
permission = mongoose.model("permission", permissionSchema);

const getAll = async () => {
  return await permission
    .find({})
    .then((doc) => doc)
    .catch((err) => {
      throw err;
    });
};

const getByID = async (id) => {
  return await permission
    .findOne({ _id: id })
    .then((doc) => doc)
    .catch((err) => {
      throw err;
    });
};

const create = async (data) => {
  return await permission.create(data).catch((err) => {
    throw err;
  });
};

const updateByID = async (id, data) => {
  return await permission
    .findOneAndUpdate({ _id: id }, data, { upsert: true })
    .catch((err) => {
      throw err;
    });
};

const deleteByID = async (id) => {
  return await permission.findByIdAndDelete({ _id: id }).catch((err) => {
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
