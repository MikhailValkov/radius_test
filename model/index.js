const mongoose = require("mongoose");
const user = require('./user');
const role = require('./role');
const permission = require('./permission');

const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(e => {
        console.log(e);
    });

module.exports = {
    user,
    role,
    permission
}