var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON;
var mongoose = require('mongoose');
mongoose.connect(connectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
  
  console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var volcanoesRouter = require('./routes/volcanoes');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var Volcano = require("./models/volcano");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');   
var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/volcanoes', volcanoesRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);

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

// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await Volcano.deleteMany();

  let instance1 = new Volcano({volcano_name:"St. Helens", volcano_type:"stratovolcano", height_m:2549});
  let instance2 = new Volcano({volcano_name:"Kilauea", volcano_type:"shield", height_m:1247});
  let instance3 = new Volcano({volcano_name:"Mount Fuji", volcano_type:"stratovolcano", height_m:3776});

  instance1.save().then(doc=>{console.log("First object saved")}).catch(err=>{console.error(err)});
  instance2.save().then(doc=>{console.log("Second object saved")}).catch(err=>{console.error(err)});
  instance3.save().then(doc=>{console.log("Third object saved")}).catch(err=>{console.error(err)});
}

let reseed = false;
if (reseed) {recreateDB();}
module.exports = app;
