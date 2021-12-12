const mongoose = require("mongoose");
const Schema = mongoose.Schema;

userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    index: true,
    required: true,
    unique: true,
  },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "role",
    },
  ],
});
user = mongoose.model("user", userSchema);

const getAll = async () => {
  return await user
    .find({})
    .populate({
      path: "roles",
      populate: {
        path: "permissions",
      },
    })
    .then((doc) => doc)
    .catch((err) => {
      throw err;
    });
};

const getByID = async (id) => {
  return await user
    .findOne({ _id: id })
    .populate({
      path: "roles",
      populate: {
        path: "permissions",
      },
    })
    .then((doc) => doc)
    .catch((err) => {
      throw err;
    });
};

const create = async (data) => {
  return await user.create(data).catch((err) => {
    throw err;
  });
};

const updateByID = async (id, data) => {
  return await user
    .findOneAndUpdate({ _id: id }, data, { upsert: true })
    .catch((err) => {
      throw err;
    });
};

const deleteByID = async (id) => {
  return await user.findByIdAndDelete({ _id: id }).catch((err) => {
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
