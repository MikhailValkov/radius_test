const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    name: String,
    roles: Array
});
user = mongoose.model('user', userSchema);

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