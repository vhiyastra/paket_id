var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/paket',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => console.log("Mongoose Test Connection"))
.catch((err) => console.log("Mongoose Connection Error : ",err))

var indexRouter = require('./routes/index');
var packageRouter = require('./routes/package');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/package', packageRouter);

module.exports = app;
