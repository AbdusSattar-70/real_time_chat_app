// external imports
const express = require('express');

// internal imports
const { getLogin, login, logout } = require('./RouterControllers/loginController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require('../middlewares/login/loginValidators');
const { redirectLoggedIn } = require('../middlewares/common/checkLogin');

const router = express.Router();

// set page title
const pageTitle = 'Login';

// login page
router.get('/', decorateHtmlResponse(pageTitle), redirectLoggedIn, getLogin);

// process login
router.post(
  '/',
  decorateHtmlResponse(pageTitle),
  doLoginValidators,
  doLoginValidationHandler,
  login,
);

// logout
router.delete('/', logout);

module.exports = router;
