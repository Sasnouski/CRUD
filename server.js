

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express'),
    mongoose = require('mongoose'),
    passport = require('./config/passport');

mongoose.connect('mongodb://localhost/mean-book');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});
//var db = mongoose();
var app = express();
var passport = passport();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');