var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database");
var auth = require("./auth/main_auth");

var alquileresRouter = require('./routes/alquileres.router');    
var registrosRouter = require('./routes/registros.router');    
var usuariosRouter = require( './routes/usuarios.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongo connect//
database.mongoConnect();
app.use('/usuarios', usuariosRouter);
app.use(auth);

//Routers//
app.use('/alquileres', alquileresRouter);
app.use('/registros', registrosRouter);
  
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
  res.render('error');
});

module.exports = app;
