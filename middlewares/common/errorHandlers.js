const createError = require('http-errors');

// not found or 404 error handler
const notFoundErrHandler = (req, res, next) => {
  next(createError(404, 'Your requested content was not found'));
};

// default error handler
const defaultErrHandler = (err, req, res, next) => {
  res.locals.error = { message: err.message };
  res.status(err.status || 500);
  if (res.locals.html) {
    // html response
    res.render('error', {
      title: 'Error page',
    });
  } else {
    // api or json response
    res.json(res.locals.error);
  }
};

module.exports = {
  notFoundErrHandler,
  defaultErrHandler,
};