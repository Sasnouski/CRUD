

var config = require('./config'),
    mongoose = require('mongoose');
module.exports = function() {
    var db = mongoose.connect('mongodb://127.0.0.1:27017/mean-book');
    require('../app/models/user.server.model');
    require('../app/models/article.server.model');
    return db;
};