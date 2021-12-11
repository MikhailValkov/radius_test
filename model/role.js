const mongoose = require('mongoose');
const Schema = mongoose.Schema;

roleSchema = new Schema({
    name: String,
    permissions: Array
});
role = mongoose.model('role', roleSchema);