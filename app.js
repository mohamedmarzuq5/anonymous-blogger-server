var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
    origin: ['https://anonymous-blogger.vercel.app', 'https://anonymous-blogger-git-test-mohamedmarzuq.vercel.app', 'http://localhost:3000'],
    // optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

// app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
    res.status(404).json("Page not found on the server")
})

module.exports = app;
