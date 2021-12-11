const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    name: String,
    roles: Array
});
user = mongoose.model('user', userSchema);
