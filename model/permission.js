const mongoose = require('mongoose');
const Schema = mongoose.Schema;

permissionSchema = new Schema({
    name: String,
    allowed: Boolean
});
permission = mongoose.model('permission', permissionSchema);
