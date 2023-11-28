const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const clubsRouter = require('./routes/clubs');
const concertsRouter = require('./routes/concerts');
const othereventsRouter = require('./routes/otherevents');
const entradaRouter = require('./routes/entrada');
const formularioCompraRouter = require('./routes/formularioCompra');

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const profileRouter = require('./routes/profile');
const editProfileRouter = require('./routes/editProfile');
const myticketsRouter = require('./routes/mytickets');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/clubs', clubsRouter);
app.use('/concerts', concertsRouter);
app.use('/otherevents', othereventsRouter);
app.use('/entrada', entradaRouter);
app.use('/compra', formularioCompraRouter);

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/profile', profileRouter);
app.use('/editProfile', editProfileRouter);
app.use('/myTickets', myticketsRouter);


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
