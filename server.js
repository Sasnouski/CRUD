

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-book');
mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});
var app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');