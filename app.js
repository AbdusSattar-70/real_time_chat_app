// external imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// internal imports
const { notFoundErrHandler, defaultErrHandler } = require('./middlewares/common/errorHandlers');
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');

// for secrete key, password ect.
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
// database connection using mongoose
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('database connected successfully');
  } catch (error) {
    throw new Error(error);
  }
};
dbConnection();

// middlewares
// request parser from express.js. we don't need cors right now as I will full-stack oneapp.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up view engine using ejs
app.set('view engine', 'ejs');

// set static folder middleware
app.use(express.static(path.join(__dirname, 'public')));

// parse cookie middleware
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing set up
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// error handlers
// 404, not found handler
app.use(notFoundErrHandler);

// default error handler
app.use(defaultErrHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});