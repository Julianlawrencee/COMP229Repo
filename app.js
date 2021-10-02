const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',  { title: 'Error' });
});

//routes?
app.get('/', function(req,res){
  res.send('root');
})
app.get('/home', function(req,res){
  res.send('Home');
})
app.get('/about', function(req,res){
  res.send('About Me');
})
app.get('/projects', function(req,res){
  res.send('Projects');
})
app.get('/services', function(req,res){
  res.send('Services');
})
app.get('/contact', function(req,res){
  res.send('Contact Info');
})
//Render view
app.set('views', './views')
app.set('view engine', 'pug')
//template viewer
app.get('/home',function(req,res) {
  res.render('Home', {title:'Home View'})
})
app.get('/contact',function(req,res) {
  res.render('Contact Info', {title:'Contact Info View'})
})
module.exports = app;
