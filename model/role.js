const mongoose = require('mongoose');
const Schema = mongoose.Schema;

roleSchema = new Schema({
    name: String,
    permissions: Array
});
role = mongoose.model('role', roleSchema);

const getAll = () => {

}

const getByID = (id) => {

}

const insertOrUpdate = (data) => {

}

const deleteByID = (id) => {

}

module.exports = {
    getAll,
    getByID,
    insertOrUpdate,
    deleteByID
}